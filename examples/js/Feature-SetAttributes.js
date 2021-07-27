AFRAME.registerComponent('Feature-SetAttributes', {
  schema: {
    instance:{default:null}
  },
  
  init: function () {
    let data = this.data
    console.log("this is the data:", data)
    this.el.setAttribute('position','1 3 0')
    this.el.setAttribute('gltf-model','../../Models/gltf/maskn95.gltf')
  }, 
})

