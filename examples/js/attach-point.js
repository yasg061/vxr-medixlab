AFRAME.registerComponent('attach-point', {
    init: function() {
      var el = this.el;
      let cathter01 = document.getElementById('catheter001');
      let cathter02 = document.getElementById('catheter002');
      console.log('************************************************ ', cathter01);
      this.el.addEventListener('collide', function(e) {
        console.log('Syringe has collided with ', e.detail.body.el);
        e.detail.body.el.setAttribute('constraint','target: #sphere1');
        e.detail.body.el.setAttribute('visible','false');
        e.detail.body.el.remove();
        cathter02.setAttribute('dynamic-body', 'mass: 0');
        cathter01.setAttribute('visible', 'true');
        cathter02.setAttribute('visible', 'true');
      });
    }
  })