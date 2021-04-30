/* global AFRAME */
AFRAME.registerComponent('avatar-body', {
  schema: {
      body: { type: 'selector'}
      
    },
  init: function() {
    var that = this;
    this.body = document.getElementById(this.data.body)
    console.log("body", this.body);
  },
  tick: function () {

    
    }  
}); 