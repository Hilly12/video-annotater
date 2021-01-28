import rickrollst from "./rickrollst.srt";

const elephantsDream = {
  src: "https://thepaciellogroup.github.io/AT-browser-tests/video/ElephantsDream.mp4",
  subtitles: "https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.vtt",
  description: `Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and
   twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.`
}

const elephantsDreamAligned = {
  src: "https://thepaciellogroup.github.io/AT-browser-tests/video/ElephantsDream.mp4",
  subtitles: "https://thepaciellogroup.github.io/AT-browser-tests/video/subtitles-en.vtt",
  description: `Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and
   twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.`,
  alignedWords: [
    { "word": "Emo", "start": 2.17, "end": 2.6615 },
    { "word": "close", "start": 3, "end": 3.153 },
    { "word": "your", "start": 3.153, "end": 3.6445 },
    { "word": "eyes", "start": 3.6445, "end": 4.136 },
    { "word": "Why", "start": 4.9, "end": 5.22 },
    { "word": "NOW", "start": 5.22, "end": 5.597 },
    { "word": "Ok", "start": 6.8, "end": 7.405 },
    { "word": "Good", "start": 7.405, "end": 8 },
    { "word": "What", "start": 9.8, "end": 9.9 },
    { "word": "do", "start": 9.9, "end": 10 },
    { "word": "you", "start": 10, "end": 10.1 },
    { "word": "see", "start": 10.1, "end": 10.2 },
    { "word": "at", "start": 10.2, "end": 10.4 },
    { "word": "your", "start": 10.4, "end": 10.6 },
    { "word": "left", "start": 10.6, "end": 10.9 },
    { "word": "side", "start": 10.9, "end": 11.2 },
    { "word": "Emo", "start": 11.2, "end": 11.5 },
    { "word": "Well", "start": 11.541, "end": 13.287 },
    { "word": "Er", "start": 14.8, "end": 14.9 },
    { "word": "nothing", "start": 14.9, "end": 15.2 },
    { "word": "Really", "start": 15.8, "end": 16.1 },
    { "word": "No", "start": 17.5, "end": 17.7 },
    { "word": "nothing", "start": 17.7, "end": 17.9 },
    { "word": "at", "start": 17.9, "end": 18 },
    { "word": "all", "start": 18, "end": 18.5 },
    { "word": "Really", "start": 18.5, "end": 19 },
    { "word": "and", "start": 19.2, "end": 19.5 },
    { "word": "at", "start": 19.8, "end": 19.9 },
    { "word": "your", "start": 19.9, "end": 20 },
    { "word": "right", "start": 20.2, "end": 20.5 },
    { "word": "What", "start": 20.5, "end": 20.8 },
    { "word": "do", "start": 20.8, "end": 20.9 },
    { "word": "you", "start": 20.9, "end": 21 },
    { "word": "see", "start": 21, "end": 21.1 },
    { "word": "at", "start": 21.1, "end": 21.2 },
    { "word": "your", "start": 21.2, "end": 21.4 },
    { "word": "right", "start": 21.4, "end": 21.7 },
    { "word": "side", "start": 21.7, "end": 22.1 },
    { "word": "Emo", "start": 22.3, "end": 22.8 },
    { "word": "Umm", "start": 22.669, "end": 23.5295 },
    { "word": "the", "start": 24.6, "end": 25 },
    { "word": "same", "start": 25, "end": 25.25 },
    { "word": "Proog", "start": 25.25, "end": 26.11 },
    { "word": "Exactly", "start": 26.11, "end": 26.74475 },
    { "word": "the", "start": 26.74475, "end": 27.3785 },
    { "word": "same", "start": 27.3785, "end": 28.01225 },
    { "word": "Nothing", "start": 28.01225, "end": 28.646 },
    { "word": "Great", "start": 29.4, "end": 30 }
  ]
}

/* Interpolation doesn't work so well for this */
const rickroll = {
  src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  subtitles: rickrollst,
  description: `We're no strangers to love You know the rules and so do I A full commitment's what I'm thinking of 
            You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand 
            Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make 
            you cry Never gonna say goodbye Never gonna tell a lie and hurt you We've known each other for so long 
            Your heart's been aching but you're too shy to say it Inside we both know what's been going on We know 
            the game and we're gonna play it And if you ask me how I'm feeling Don't tell me you're too blind to see 
            Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make 
            you cry Never gonna say goodbye Never gonna tell a lie and hurt you No, I'm never gonna give you up No, 
            I'm never gonna let you down No, I'll never run around and hurt you Never, ever desert you We've known 
            each other for so long Your heart's been aching but Never gonna give you up Never gonna let you down 
            Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell 
            a lie and hurt you No, I'm never gonna give you up No, I'm never gonna let you down No, I'll never run 
            around and hurt you I'll never, ever desert you`
}

const videos = {
  elephantsDream: elephantsDream,
  elephantsDreamAligned: elephantsDreamAligned,
  rickroll: rickroll,
}

export default videos;