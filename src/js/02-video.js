    import Vimeo from "@vimeo/player"
 
    
    const iframe = document.querySelector("iframe");
    console.log(iframe);
    const player = new Vimeo(iframe) ;
    console.dir(player);
    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    // const TIME_WATCH  = 

    player.setCurrentTime(50.456).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
console.dir(player.getCurrentTime())
    // console.log( player.getCurrentTime().then(function(seconds) {
    //     // seconds = the current playback position
    // }).catch(function(error) {
    //     // an error occurred
    // }
    // ))