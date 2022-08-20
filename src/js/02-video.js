
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

function onPlay(evt) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(evt.seconds));
}

player.on('timeupdate', throttle(onPlay), 1000);

const savedTime = localStorage.getItem(STORAGE_KEY);
      
    player.setCurrentTime(savedTime).then(function(seconds) {
    }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});    
        
    

   