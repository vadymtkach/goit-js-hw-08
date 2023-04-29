


import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_PLAYER_CURRENT_TIME = 'videoplayer-current-time';
const player = new Vimeo(document.querySelector('#vimeo-player'));
const THROTTLE_DELAY = 1000;

player.on('timeupdate', throttle(function(data) {
  const currentTime = data.seconds;
  localStorage.setItem(VIDEO_PLAYER_CURRENT_TIME, currentTime);
}, THROTTLE_DELAY));

const savedTime = localStorage.getItem(VIDEO_PLAYER_CURRENT_TIME);
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}