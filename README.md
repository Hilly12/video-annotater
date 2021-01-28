# Video Player

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

In the project directory, you can run `npm start` to run the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Overview of the files

These files can be found in the `src` directory.

`assets/VideoData.js` - Contains metadata for sample videos, new videos can be added here

`components/Video.js` - A container for the video player

`components/VideoPlayer` - The video player with all its functionality

`src/App.js` - Any new videos added should be passed to `Video` here


## Adding a new video

* Create a new JSON object in `VideoData.js` with the following fields:
    * `src` - Link to the video
    * `subtitles` - Link a .srt or .vtt file containing the transcript
    * `description` - Information about the video
    * [Optional] `alignedWords` - Timestamps indicating the beginning and end of each word in the transcript
* Pass the object to `Video` in `App.js`

N.B. To pass links to files they must be imported in `VideoData.js`