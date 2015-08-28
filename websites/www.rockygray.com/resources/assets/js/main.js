$(function() {
    var tl = new TimelineMax();

    $logos = $('.logo')
    $cardLogo = $('.vcard .logo');

    $cardLogo.on('click', function() {
        TweenMax.to($logos, 1, {rotation: "+=900"})
    });

    function introAnimation() {
        tl.to('.vcard', 1.5, {autoAlpha:1, display: 'block', ease: Power3.easeIn});
    }

    introAnimation();
});
