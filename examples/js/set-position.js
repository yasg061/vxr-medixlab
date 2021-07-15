AFRAME.registerComponent('set-position', {
  schema: {
    triggerKeyCode: { default: 32 },
    boolVar: { default: false } // spacebar
  },
  
  init: function () {

    this.el.setAttribute('position','1 3 0')
    this.el.setAttribute('gltf-model','../../Models/gltf/maskn95.gltf')
  },

 
})

