$(function() {
    var tl = new TimelineMax();

    logos = '.logo';
    cardLogo = '.vcard .logo';

    $cardLogo.on('click', function() {
        TweenMax.to(logos, 3, {
                throwProps: {
                    rotation: {
                        velocity: 800,
                        end: function(n) {
                            var degree = Math.round(n/180) * 180;
                            console.log('n: ' + n + ' degree: ' + degree);
                            return degree;
                        }
                    }
                },
                ease: Power4.easeOut
            }
        );
    });

    function introAnimation() {
        tl.to('.vcard', 1.5, {autoAlpha:1, display: 'block', ease: Power3.easeIn});
    }

    introAnimation();
});
