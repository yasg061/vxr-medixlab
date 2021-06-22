let anmBool = true

AFRAME.registerComponent('input-controls', {
  // dependencies: ['tracked-controls'],
  schema: {
    hand: { default: 'left' }
  },

  init: function () {
    var self = this;

    this.onButtonChanged = this.onButtonChanged.bind(this);
    this.onButtonDown = function (evt) { self.onButtonEvent(evt.detail.id, 'down'); };
    this.onButtonUp = function (evt) { self.onButtonEvent(evt.detail.id, 'up'); };
  

    // this.el.addEventListener("loaded", e => {
    //   // set up the body
    //   this.el.setAttribute("body", {
    //     "type": "static",
    //     "shape": "none"
    //   })
    //    // set up the shape
    //    this.el.setAttribute("shape__cylinder", {
    //     'shape': 'cylinder',
    //     "height": 1.5,
    //     "radiusTop": 0.1,
    //     "radiusBottom": 0.2
    //   })   
    //   // static-body collision handling
    //   this.el.setAttribute("physics-collider", "")
    //   // listen for collisions
    //   this.el.addEventListener('collide', e => {
    //     // change the sphere color when collided
    //     let classes= e.detail.body.el.className.split(' ')
        
    //     if(classes.includes("vxr-interact")){
    //       console.log("working")
    //       NAF.utils.takeOwnership(e.detail.body.el)
    //       console.log("earned ownership ")
    //       }else{
    //       console.log("err")
    //     }        
    //   });

    // })


  },

  play: function () {
    var el = this.el;
    el.addEventListener('buttonchanged', this.onButtonChanged);
    el.addEventListener('buttondown', this.onButtonDown);
    el.addEventListener('buttonup', this.onButtonUp);
  },

  pause: function () {
    var el = this.el;
    el.removeEventListener('buttonchanged', this.onButtonChanged);
    el.removeEventListener('buttondown', this.onButtonDown);
    el.removeEventListener('buttonup', this.onButtonUp);
  },

  // buttonId
  // 0 - trackpad
  // 1 - trigger ( intensity value from 0.5 to 1 )
  // 2 - grip
  // 3 - menu ( dispatch but better for menu options )
  // 4 - system ( never dispatched on this layer )
  mapping: {
    axis0: 'trackpad',
    axis1: 'trackpad',
    button0: 'trackpad',
    button1: 'trigger',
    button2: 'grip',
    button3: 'menu',
    button4: 'system'
  },

  onButtonChanged: function (evt) {
    // console.log("on button changed");

    var buttonName = this.mapping['button' + evt.detail.id];
    if (buttonName !== 'trigger') { return; }

    var value = evt.detail.state.value;
    // let vxr_objs = document.getElementsByClassName("vxr-interact");
    // for (let i = 0; i < vxr_objs.length; ++i) {
    //   NAF.utils.takeOwnership(vxr_objs[i])
    // }

  },

  onButtonEvent: function (id, evtName) {
    var buttonName = this.mapping['button' + id];
    console.log("button name: ",buttonName)
    this.el.emit(buttonName + evtName);

    if(buttonName=="grip" && anmBool==true){
      console.log("gigas activated")
      let animationObject = document.getElementById("instruments")
      animationObject.setAttribute("animation-mixer","loop: false; repetitions: 0; timeScale: 0.5; clampWhenFinished: true")
      anmBool=false;
     }
  },

  update: function () {
    var data = this.data;
    var el = this.el;

    el.setAttribute('tracked-controls', { hand: data.hand, model: false });
    el.setAttribute('oculus-touch-controls', { hand: data.hand, model: false });
    el.setAttribute('windows-motion-controls', { hand: data.hand, model: false });
    if (data.hand === 'right') {
      el.setAttribute('daydream-controls', { hand: data.hand, model: false });
      el.setAttribute('gearvr-controls', { hand: data.hand, model: false });
    }
  }
});