AFRAME.registerComponent('attach-intracath', {
    init: function() {
      var el = this.el;
      this.el.addEventListener('collide', function(e) {
        console.log('collision ', e.detail.body.el);

    let classes= e.detail.body.el.className.split(' ')
    if(classes.includes("vxr-obj-intracath")){
    console.log('funca ', e.detail.body.el);
    
        e.detail.body.el.remove();
        console.log('Syringe has collided with ', e.detail.body.el);
        let intracathInit =document.getElementById("firstPart")
        let intracathEnd=document.getElementById("vxr-intracath-second-part")

        intracathEnd.setAttribute('visible','true')
        intracathInit.setAttribute('visible','true')
        intracathEnd.setAttribute('dynamic-body','mass:0.0')
        e.detail.body.el.setAttribute("visible","false")
        

      }else{
        console.log('no funca ', e.detail.body.el);

      }
       
      });
    }
  })