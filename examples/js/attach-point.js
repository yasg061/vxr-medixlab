AFRAME.registerComponent('attach-point', {
    init: function() {
      var el = this.el;
      this.el.addEventListener('collide', function(e) {
        console.log('Syringe has collided with ', e.detail.body.el);
        e.detail.body.el.setAttribute('constraint','target: #sphere1');
      });
    }
  })