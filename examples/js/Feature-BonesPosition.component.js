AFRAME.registerComponent('boneposition', {      
  schema: {
    bone: { default: null },
    mesh_id:{ default: ""},
    bone_id:{ default: ""},
    vectorPosition:{ default: {x:0, y:0, z:0}},
    varBool:{default: false}

    
  },

  init: function () {


    //  let boneReference=document.getElementById(this.data.mesh_id).getObject3D("mesh").children[0].children[1].skeleton.bones[this.data.bone_id];
    let boneReference=document.getElementById(this.data.mesh_id).getObject3D("mesh").children[0].children[1].children[0].skeleton.bones[this.data.bone_id];
     


    this.data.bone=boneReference;       
    // boneReference.position.set(x)//=   new THREE.Vector3( 0, 5, 0 );
    let pos = this.el.getAttribute('position')
    // console.log("bone reference: ",boneReference.position)
    // console.log("entity position",this.el.getAttribute('position'))
    // console.log("entity rotation",this.el.getAttribute('rotation'))
    // console.log("mesh: ",boneReference)
    // console.log("entity: ", this.el.getObject3D("mesh"))
    let dir = new THREE.Vector3(); // create once an reuse it
    this.data.vectorPosition=dir

    

  },

  tick: function(){
    //let pos = this.el.getAttribute('position')
    
 
var dir = new THREE.Vector3(); // create once an reuse it 


       let worldQuaternion = new THREE.Quaternion();
    let entityQuat = this.el.object3D.getWorldQuaternion(worldQuaternion);
    let pos = this.el.getObject3D("mesh").getWorldPosition()
    // dir.subVectors(  pos, this.data.bone.getWorldPosition()  ).normalize() ;
    dir= this.data.bone.worldToLocal(pos).normalize() ;
    

    
    // if(dir.length()>1){
    // if(this.data.varBool){

    //   this.data.bone.position.copy(dir);
    //   console.log("bone: ", this.data.bone.position)
    //   console.log("bone world position: ", this.data.bone.getWorldPosition())
    //   console.log("entity position: ", pos)
    // }
    //   console.log(dir.length())
    // else{
    //   this.data.varBool=true   

    //  }
    
    this.data.bone.rotation.setFromQuaternion(entityQuat)
    

  }
})