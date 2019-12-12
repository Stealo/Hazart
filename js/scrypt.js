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


/*GENERATEUR DE PITCH*/

var citations = ["La lecture est un art et tout le monde n'est pas artiste. Madeleine Chapsal",
    "L'art de gouverner consiste à ne pas laisser vieillir les hommes dans leur poste. Napoléon Bonaparte",
    "Écrire est un art créé à partir d'un point ayant foui la pointe de ma plume. Mofaddel Abderrahim",
    "La vie est courte, l'art est long, l'occasion fugitive, l'expérience trompeuse, le jugement difficile. Hippocrate",
    "L’art est une abstraction, c’est le moyen de monter vers Dieu en faisant comme notre divin Maître, créer. Paul Gauguin",
    "Le seul réel dans l’art, c’est l’art. Paul Valéry ",
    "L’art, est à l’image de la création. C’est un symbole, tout comme le monde terrestre est un symbole du cosmos. Paul Klee",
    "L’art, c’est le plus court chemin de l’homme à l’homme. André Malraux",
    "C’est épatant, les artistes. Ils sont fous, comme tout le monde, mais pas vraiment comme tout le monde. J’ai un faible pour eux. Françoise Giroud ",
    "L’oeuvre d’art n’est pas le reflet, l’image du monde; mais elle est à l’image du monde. Eugène Ionesco",
    "En art, il faut croire avant d'y aller voir. Léon-Paul Fargue"];
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


