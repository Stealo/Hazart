var controller = new ScrollMagic.Controller({vertical: false});

var scene = new ScrollMagic.Scene({
    triggerElement: '.red-cube'
})

    .setClassToggle('.red-cube', 'show')
    .addTo(controller);


/*SMOOTH SCROLL*/
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    }
                    ;
                });
            }
        }
    });

/*SCROLLMAGIC ANIM*/

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: '.red-cube'
})

    .setClassToggle('.red-cube', 'show')
    .addTo(controller);


/*GENERATEUR DE PITCH*/

var citations = ["La lecture est un art et tout le monde n'est pas artiste.",
  "L'art de gouverner consiste à ne pas laisser vieillir les hommes dans leur poste.",
  "Écrire est un art créé à partir d'un point ayant foui la pointe de ma plume.",
  "La vie est courte, l'art est long, l'occasion fugitive, l'expérience trompeuse, le jugement difficile."];
var auteur = "L'auteur";
var aleatoire = null;

$('document').ready(function () {

    $('.auteur').html(auteur);

    aleatoire = Math.floor(Math.random() * citations.length);
    $('.citation').html(citations[aleatoire]);

    $('#generer').click(function () {
        //bouton générer
        aleatoire = Math.floor(Math.random() * citations.length);
        $('.citation').html(citations[aleatoire]);

    });

});