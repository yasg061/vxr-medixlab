AFRAME.registerComponent('bone-component', {
  schema: {
    triggerKeyCode: { default: 32 } // spacebar
  },
  init: function () {

    this.el.addEventListener('model-loaded', () => {
      let meshId=this.el.id
      let fatherMesh = this.el.getAttribute('position');
      console.log("father mesh position: ", fatherMesh)
      let sceneEl = document.getElementById("boneToTest");
      // let sceneEl = document.querySelector("a-scene");
      let mesh = this.el.getObject3D("mesh")

      let i = 0;
      console.log("mesh",mesh)
      // let objToIterate = mesh.children[0].children[9].children[0].skeleton.bones
      let objToIterate = mesh.children[0].children[1].children[0].skeleton.bones


      //-------------------------------------------------//
      //----------------- skeletal helper ---------------//
      //-------------------------------------------------//

    //let scene=this.el.sceneEl.object3D;// THREE.Scene
      let scene=document.querySelector('a-scene').object3D;  // THREE.Scene

      
      let skinned = mesh.children[0]
      const helper = new THREE.SkeletonHelper( skinned );
      scene.add( helper);

      //-------------------------------------------------//
      //-------------------------------------------------//
      //-------------------------------------------------//

      var delayInMilliseconds = 5000; //1 second
      setTimeout(function () {       

        objToIterate.forEach(bone => {

          let dir = new THREE.Vector3(); // create once an reuse it
          // let pos =  bone.getWorldPosition() - fatherMesh
          dir.subVectors( bone.getWorldPosition(), fatherMesh );


          let entityEl = document.createElement('a-box')
          let rot = { x: THREE.Math.radToDeg(bone.rotation.x), y:THREE.Math.radToDeg(bone.rotation.y), z:THREE.Math.radToDeg(bone.rotation.z) }

          // console.log("bone world position: ",bone.getWorldPosition())
          // console.log("mesh world position: ",fatherMesh)
          // console.log("mesh world position length: ",fatherMesh.length())
          // console.log("result position: ",dir)
          // console.log("bone: ", bone)
          // console.log("rotation: ", rot)

          entityEl.setAttribute("id", bone.name)
          entityEl.setAttribute("dynamic-body", "mass:0.0")
          entityEl.setAttribute("geometry", "width:0.1; height:0.1;depth:0.1")
          //entityEl.setAttribute("position", bone.position)
          entityEl.setAttribute("position", dir)
          entityEl.setAttribute("rotation", rot)
           entityEl.setAttribute("opacity", "1")
          entityEl.setAttribute("grabbable", "")
          entityEl.setAttribute("draggable", "")
          entityEl.setAttribute("ondragstart", `genericBone(${bone.name})`);
          entityEl.setAttribute("ondragend", `genericBoneEnd(${bone.name})`);

          entityEl.setAttribute("boneposition", `mesh_id:${meshId};bone_id:${i}`)
          
          // console.log("id : ", meshId )

           sceneEl.appendChild(entityEl);
          i++;
        })

      }, delayInMilliseconds);
    })
  },
  update: function () {
  }
})