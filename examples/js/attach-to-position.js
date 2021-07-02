AFRAME.registerComponent('attach-point-v2', {
  schema: {
    objClass: {default: 'null'},
    
  },
    init: function() {
      let data = this.data;
      var el = this.el;
      this.el.addEventListener('collide', function(e) {
        let classes= e.detail.body.el.className.split(' ')
        if(classes.includes(data.objClass)){
          let x =document.getElementById("static-heparinseal")
          x.setAttribute("visible","true")
          e.detail.body.el.remove();

          
        
      }
      console.log("the class is: ", data.objClass)
      });
    }
  })