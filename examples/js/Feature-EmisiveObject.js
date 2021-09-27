 AFRAME.registerComponent('emissive-object', {
  init: function() {

    let el = this.el

    this.el.addEventListener('model-loaded', () => {
      console.log("obj",this.el.getObject3D("mesh"))
      this.el.getObject3D("mesh").children[1].material.emissive.g=1


    })
 
  }
})