import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const TIME_WATCH = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const savedTime = localStorage.getItem(TIME_WATCH);
if (savedTime) {
  player.setCurrentTime(savedTime);
}

const setWatchingTime = ({ seconds }) => {
  localStorage.setItem(TIME_WATCH, seconds);
};

player.on('timeupdate', throttle(setWatchingTime, 1000));
