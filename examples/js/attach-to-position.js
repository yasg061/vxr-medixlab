AFRAME.registerComponent('attach-point-v2', {
  schema: {
    objClass: { default: 'xlr8' },

  },
  init: function () {
    let data = this.data;
    var el = this.el;
    this.el.addEventListener('collide', function (e) {
      let classes = e.detail.body.el.className.split(' ')
      if (classes.includes(data.objClass)) {
        let x = document.getElementById("static-heparinseal")
        x.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }
      if (classes.includes("vxr-obj-MedicalClothe")) {
        let medicalClothe = document.getElementById("StaticMedicalClothe")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();

      }

      if (classes.includes("vxr-obj-Tape-Bow")) {
        let medicalClothe = document.getElementById("Static-Tape-Bow")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }

      if (classes.includes("vxr-obj-Tape-Butterfly")) {
        let medicalClothe = document.getElementById("Static-Tape-Butterfly")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }
      if (classes.includes("vxr-obj-Tape-Normal")) {
        let medicalClothe = document.getElementById("Static-Tape-Normal")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }

      if (classes.includes("vxr-obj-rubber")) {
        let medicalClothe = document.getElementById("Static-vxr-obj-rubber")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }

      if (classes.includes("vxr-obj-Clamp")) {
        let medicalClothe = document.getElementById("e-ClampClosed")
        medicalClothe.setAttribute("visible", "true")
        e.detail.body.el.remove();
      }

      if (classes.includes("vxr-obj-allistweezers")) {
        let medicalClothe = document.getElementById("e-Cordon_Tijera")
        medicalClothe.setAttribute("dynamic-body", "")
        // e.detail.body.el.remove();
      }

      console.log("the class is: ", data.objClass)
    });
  }
})