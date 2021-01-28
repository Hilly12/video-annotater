import React, {useEffect, useState} from "react";
import {Button} from "reactstrap";
import axios from "axios";
import webvtt from "node-webvtt";
import parseSRT from 'parse-srt';
import ReactPlayer from "react-player";

export default function VideoPlayer(props) {
  const src = props.src;
  const subtitles = props.subtitles;
  const alignedWords = props.alignedWords;
  const ref = React.createRef();

  const [time, setTime] = useState(0);
  const [subs, setSubs] = useState([]);

  /* Loads and aligns subtitles into the state. Loads subtitles from URL if provided. */
  useEffect(() => {
    if (Array.isArray(subtitles)) {
      const aligned = align(subtitles, alignedWords)
      setSubs(aligned);
    } else {
      axios.get(subtitles).then(response => {
        if (subtitles.includes('.srt')) {
          const srt = parseSRT(response.data);
          // console.log(srt);
          setSubs(align(srt, alignedWords));
        }
        if (subtitles.includes('.vtt')) {
          const vtt = webvtt.parse(response.data);
          setSubs(align(vtt.cues, alignedWords));
        }
      });
    }
  }, [alignedWords, subtitles]);

  /* Fires every progressInterval milliseconds */
  const onProgress = e => e && setTime(e.playedSeconds);

  /* Seek to time */
  const seek = time => ref.current.seekTo(time);

  /* Get the current subtitles based on the time */
  const sub = getTimedEntry(time, subs);

  /* Formats the subtitle based on aligned words into JSX */
  const transcript = () => {
    if (!sub) return null;

    /* Sort in order of time and flag current word */
    const words = Array.from(sub.words.sort((w1, w2) => w1.start - w2.start))
    words.forEach(w => {
      w.flag = false
    });
    const current = getTimedEntry(time, words);
    if (current) current.flag = true;

    /* Add back punctuation  */
    const sep = sub.text.match(/\b([^A-Za-z0-9_'′]+)/g) || [];
    const punctuated = words.reduce((acc, w, i) => acc.concat(w, sep[i] || " "), []);

    return punctuated.map((w, i) => {
      if (w instanceof String || typeof w === 'string')
        return <span className="punctuation" key={i}>{w}</span>

      if (w.flag)
        return <span className="word" onClick={() => seek(w.start)} style={{ color: 'blue' }} key={i}>{w.word}</span>

      return <span className="word" onClick={() => seek(w.start)} key={i}>{w.word}</span>
    });
  }

  return (
    <div className="center">
      <Button tag="a" color="info" size="large" href="/info">
        Info
      </Button>
      <ReactPlayer className="video" controls={true} progressInterval={100}
                   onProgress={onProgress} url={src} ref={ref}/>
      <div className="transcript">{transcript()}</div>
    </div>
  );
}

/* Helpers */

/* Finds the item corresponding to the given timestamp using binary search;
   Assumes items are sorted by start time, intervals do not overlap, and
   all entries have a 'start' and 'end' */
function getTimedEntry(timestamp, timedEntries) {
  let l = 0
  let r = timedEntries.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (timedEntries[m].end < timestamp) {
      l = m + 1;
    } else if (timedEntries[m].start > timestamp) {
      r = m - 1;
    } else {
      return timedEntries[m];
    }
  }
  return null;
}

/* Checks that the aligned words provided match up with the subtitles  */
function checkValid(alignedWords, subs) {
  console.log("Checking aligned words", alignedWords);
  /* Sort in order of time */
  alignedWords = alignedWords.sort((w1, w2) => w1.time - w2.time);

  /* Check each word in subtitle corresponds to an aligned word entry */
  let j = 0;
  for (let i = 0; i < subs.length; i++) {
    const words = subs[i].text.match(/\b([A-Za-z0-9_'′]+)/g);
    for (let k = 0; words && k < words.length; k++, j++) {
      if (j >= alignedWords.length || words[k].toLowerCase() !== alignedWords[j].word.toLowerCase()) {
        console.log("Invalid aligned words provided");
        return false;
      }
    }
  }
  return true;
}

/* Add aligned words to individual subtitle cues, if no aligned words are
   provided then interpolate */
function align(subs, alignedWords) {
  /* Sort in order of time */
  subs = subs.sort((s1, s2) => s1.start - s2.start)

  /* If aligned words are provided and they are valid append them to the
     corresponding subtitles */
  if (alignedWords && checkValid(alignedWords, subs)) {
    let j = 0;
    for (let i = 0; i < subs.length; i++) {
      const words = subs[i].text.match(/\b([A-Za-z0-9_'′]+)/g);
      subs[i].words = []
      for (let k = 0; words && k < words.length && j < alignedWords.length; k++) {
        subs[i].words.push({
          word: words[k],
          start: alignedWords[j].start,
          end: alignedWords[j].end
        });
        j++;
      }
    }
    return subs;
  }

  /* Interpolate when no aligned words are provided */
  for (let i = 0; i < subs.length; i++) {
    const words = subs[i].text.match(/\b([A-Za-z0-9_'′]+)/g);
    subs[i].words = words.map(((w, k) => ({
      word: w,
      start: subs[i].start + k * (subs[i].end - subs[i].start) / words.length,
      end: subs[i].start + (k + 1) * (subs[i].end - subs[i].start) / words.length
    })));
  }
  return subs;
}