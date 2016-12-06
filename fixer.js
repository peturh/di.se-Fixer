//When dom is ready, remove ad header
$(document).ready(function(){
    //Removes the big fat ad thingy at the top (on smaller screens)
    var body = $('body');
    //Remove for both small screen and big screen view
    body.find('.di_panorama-compensation').css('height',0);
    body.find('.di_panorama.js_panorama').css('height',0);
    body.find('.di_panorama-wrapper').css('height',0);
});

//Run the init() method
init();
function init() {
    //When window loads
    window.onload = function () {
        //Timeout to run just after the other stuff, no "real" timeout needed
        setTimeout(function () {
            var body = $('body');
            //Remove the paywall
            body.find('.paywall-content').css('height','');
        }, 0);
    };
}