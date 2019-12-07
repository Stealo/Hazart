var controller = new ScrollMagic.Controller({vertical: false});

var scene = new ScrollMagic.Scene({
  triggerElement: '.red-cube'
})

.setClassToggle('.red-cube', 'show')
.addTo(controller);

