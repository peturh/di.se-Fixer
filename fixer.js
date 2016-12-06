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
