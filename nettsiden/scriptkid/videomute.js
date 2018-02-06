function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('CRY', {
        videoId: 'pSWN6Qj98Iw', 
        width: 200,               
        height: 150,             
        playerVars: {
            autoplay: 1,       
            controls: 0,        
            showinfo: 0,       
            modestbranding: 0,  
            loop: 1,           
            fs: 0,             
            cc_load_policy: 0, 
            iv_load_policy: 3,  
            autohide: 0        
        },
        events: {
            onReady: function (e) {
                e.target.mute();
            }
        }
    });
}

