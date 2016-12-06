# DN-Fixer
A small little extension for removing the paywall on di.se

## Download
Download from [Chrome extensions](COMING SOON)

## Environment
Tested on Chrome Version 54.0.2840.71 (64-bit)

## Dev Dependencies
* jQuery 2.2.0

## The code
    
    //Run the method
    
    $(document).ready(function(){
        //Removes the big fat ad thingy at the top (on smaller screens)
        var body = $('body');
    
        body.find('.di_panorama-compensation').css('height',0);
        body.find('.di_panorama.js_panorama').css('height',0);
        body.find('.di_panorama-wrapper').css('height',0);
    });
    init();
    function init() {
        //When window loads
        window.onload = function () {
            //Timeout to run just after the other stuff
            setTimeout(function () {
                var body = $('body');
                //Remove the paywall
                body.find('.paywall-content').css('height','');
            }, 0);
        };
    }
