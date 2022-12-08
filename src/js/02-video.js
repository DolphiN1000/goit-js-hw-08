    import Vimeo from "@vimeo/player"
    console.dir(Vimeo);
    
    const iframe = document.querySelector('vimeo-playere');
    console.log(iframe);
    const player = new Vimeo.Player(iframe) ;
    console.dir(player);
    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


