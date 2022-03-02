/* global AFRAME */
AFRAME.registerComponent('set-scene-id', {
  schema: {
    template: { default: '' },
    keyCode: { default: 32 }
  },

  init: function() {
    


   this.el.setAttribute("networked-scene",`room: ${parseInt(10000000*Math.random())};adapter: easyrtc; audio: false; debug: true; onConnect: spawnentity;`)
  },

 
});