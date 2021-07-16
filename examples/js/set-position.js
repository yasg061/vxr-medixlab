AFRAME.registerComponent('set-position', {
  schema: {
  },
  
  init: function () {
    this.el.setAttribute('position','1 3 0')
    this.el.setAttribute('gltf-model','../../Models/gltf/maskn95.gltf')
  }, 
})

