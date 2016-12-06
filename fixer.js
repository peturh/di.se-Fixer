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
        //Set timeout, since paywall is not appearing until after 1.5 seconds aprox.
        setTimeout(function () {
            var body = $('body');
            body.find('.paywall-content').css('height','');

        }, 0);

    };
}
