// Local RTSP URL for testing
const rtspUrl = 'rtsp://localhost:8554/live';

// Set up the video player
const canvas = document.getElementById('video-canvas');
const player = new JSMpeg.Player(rtspUrl, { canvas: canvas });

// Get control buttons
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

// Play button event
playButton.addEventListener('click', () => {
    player.play();
});

// Pause button event
pauseButton.addEventListener('click', () => {
    player.pause();
});
