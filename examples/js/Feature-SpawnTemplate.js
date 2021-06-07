
 

 AFRAME.registerComponent('Setemplatecomponents', {
  schema: {
    speed: { default: 0.01 },
    direction: { default: 1 }
  },
  
  init() {     
    var sceneEl = document.querySelector('a-scene');
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute("id","mask")
    entityEl.setAttribute("networked", "template:#vxr-obj-template;attachTemplateToLocal:true")
    entityEl.setAttribute("position","0 1.5 -0.2")
    sceneEl.appendChild(entityEl);
  },
});


// get a-assets section
var a_assets = document.querySelector('a-assets');

// create asset reference and set gltf atributes
var maskn95= document.createElement('a-asset-item');
maskn95.setAttribute("id","model-reference")
maskn95.setAttribute("src","../../Models/gltf/maskn95.gltf")
a_assets.appendChild(maskn95);

// set template
var mask_template = document.createElement('template');
var rootEntity = document.createElement('a-entity');
var bodyEntity = document.createElement('a-entity');


mask_template.setAttribute("id","vxr-obj-template")
a_assets.appendChild(mask_template);

var templateAdded =document.getElementById("vxr-obj-template")
rootEntity.setAttribute("id","Root-mask")
templateAdded.appendChild(rootEntity)


var root_mask =document.getElementById("Root-mask")
bodyEntity.setAttribute("setemplatecomponents","")
bodyEntity.setAttribute('class', 'vxr-obj-maskn95 vxr-interact')
bodyEntity.setAttribute("gltf-model","#maskn95")
bodyEntity.setAttribute('draggable', '')
bodyEntity.setAttribute('graggable', '')
bodyEntity.setAttribute('toggle-physics', '')
bodyEntity.setAttribute('position', '-0.4 2 0')
console.log("Element modified ",bodyEntity)
root_mask.appendChild(bodyEntity);
console.log("executed")

// spawn entity
var sceneEl = document.querySelector('a-scene');
var spawnNewEntity = document.createElement('a-entity');
spawnNewEntity.setAttribute("id","mask-root")
spawnNewEntity.setAttribute("networked", "template:#vxr-obj-template;attachTemplateToLocal:true")
spawnNewEntity.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(spawnNewEntity);



