
 

 AFRAME.registerComponent('setemplatecomponents', {
  schema: {
    speed: { default: 0.01 },
    direction: { default: 1 }
  },
  
  init() {     
    var sceneEl = document.querySelector('a-scene');
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute("id","mascarilla?")
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
maskn95.setAttribute("src","../../Models/gltf/Generic-model.gltf")
a_assets.appendChild(maskn95);

// set template
var mask_template = document.createElement('template');
var entityEl = document.createElement('a-entity');
var entityEl2 = document.createElement('a-entity');


mask_template.setAttribute("id","vxr-obj-template")
a_assets.appendChild(mask_template);

var templateAdded =document.getElementById("vxr-obj-template")
entityEl.setAttribute("id","Root-mask")
templateAdded.appendChild(entityEl)


var root_mask =document.getElementById("Root-mask")
entityEl2.setAttribute("setemplatecomponents","")
entityEl2.setAttribute('class', 'vxr-obj-maskn95 vxr-interact')
entityEl2.setAttribute("gltf-model","#maskn95")
entityEl2.setAttribute('draggable', '')
entityEl2.setAttribute('graggable', '')
entityEl2.setAttribute('toggle-physics', '')
entityEl2.setAttribute('position', '-0.4 2 0')
console.log("Elemento modificado?",entityEl2)
root_mask.appendChild(entityEl2);
console.log("executed")


var sceneEl = document.querySelector('a-scene');
var entityEl = document.createElement('a-entity');
entityEl.setAttribute("id","mascarilla?")
entityEl.setAttribute("networked", "template:#vxr-obj-template;attachTemplateToLocal:true")
entityEl.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl);




// var sceneEl = document.querySelector('a-scene');
// var template = document.createElement('template');
// var entityEl = document.createElement('a-entity');

// template.setAttribute("id","vxr-obj-template")
// entityEl.setAttribute('class', 'vxr-obj-maskn95 vxr-interact')
// entityEl.setAttribute('gltf-model', '#maskn95')
// entityEl.setAttribute('draggable', '')
// entityEl.setAttribute('graggable', '')
// entityEl.setAttribute('toggle-physics', '')
// entityEl.setAttribute('position', '-0.6 2 -0.107')

// template.appendChild(entityEl)
// sceneEl.appendChild(template);

// var template2 = document.createElement('template');
// var entityEl2 = document.createElement('a-entity');

// template2.setAttribute("id","vxr-obj-template-2")
// entityEl2.setAttribute('class', 'vxr-obj-alcoholbottle vxr-interact')
// entityEl2.setAttribute('gltf-model', '#alcoholbottle')
// entityEl2.setAttribute('draggable', '')
// entityEl2.setAttribute('graggable', '')
// entityEl2.setAttribute('toggle-physics', '')
// entityEl2.setAttribute('position', '-0.4 2 0')

// template2.appendChild(entityEl2)
// sceneEl.appendChild(template2);

// var template3 = document.createElement('template');
// var entityEl3 = document.createElement('a-entity');

// template3.setAttribute("id","vxr-obj-template-3")
// sceneEl3.setAttribute('class', 'vxr-obj-tray vxr-interact')
// sceneEl3.setAttribute('gltf-model', '#tray')
// sceneEl3.setAttribute('draggable', '')
// sceneEl3.setAttribute('graggable', '')
// sceneEl3.setAttribute('toggle-physics', '')
// sceneEl3.setAttribute('position', '0.035 0.5 -0.2')

// template3.appendChild(entityEl)
// sceneEl3.appendChild(template);








      