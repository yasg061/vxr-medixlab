/* global AFRAME */
AFRAME.registerComponent('avatar-body', {
  schema: {
    body: {type: 'selector'},
    id: {type: 'string' }  
    },
  init: function() {
    var data = this.data;
    var el = this.el;
    this.body = document.getElementById(data.body)
    console.log("body", data.body);
    console.log("id", data.id);
    el.setAttribute('constraint',
                    'type: lock; maxForce: 0.9; target:' + data.id);
  },
  update: function () {
    
    }  
}); 