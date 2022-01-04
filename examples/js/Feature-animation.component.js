
let scene = document.querySelector("a-scene")


AFRAME.registerComponent('feature-animation', {
  schema: {
    obj_id: { default: '' }
    clip: { default: '' },
    loop: { default: '' },
    repetitions: { default: '' },
    clamp: { default: '' },
    obj_id: { default: '' }
  },
  init: function () {


    console.log("init");
  },

  update: function () {

    let data = this.data
    let obj = document.getElementById(data.obj_id)
    console.log("obj: ", obj)
    console.log("update ", data);
    var jumpTrans = function () {
      scene.removeEventListener('animation-loop', jumpTrans);
      obj.setAttribute("animation-mixer",
      `clip:${data.clip};
      loop:${data.loop};
      repetitions:${data.repetitions};
      clampWhenFinished:${data.clamp}; `);
      console.log("start")
    };
    setTimeout(function () { scene.addEventListener('animation-loop', jumpTrans); }, 5000);

  }



});
