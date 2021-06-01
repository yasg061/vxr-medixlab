
 AFRAME.registerComponent('SpawnObjects', {
  schema: {
    speed: { default: 0.01 },
    direction: { default: 1 }
  },
  
  init() {
    console.log("json file", config)   

  },
 
});

var sceneEl = document.querySelector('a-scene');
var entityEl = document.createElement('a-entity');


entityEl.setAttribute("id","mascarilla?")
entityEl.setAttribute("networked", "template:#vxr-obj-template;attachTemplateToLocal:true")
entityEl.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl);

var entityEl2 = document.createElement('a-entity');
entityEl2.setAttribute("networked", "template:#vxr-obj-template-2;attachTemplateToLocal:true")
entityEl2.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl2);

var entityEl3 = document.createElement('a-entity');
entityEl3.setAttribute("networked", "template:#vxr-obj-template-3;attachTemplateToLocal:true")
entityEl3.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl3);

var entityEl4 = document.createElement('a-entity');
entityEl4.setAttribute("networked", "template:#vxr-obj-template-rubber;attachTemplateToLocal:true")
entityEl4.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl4);

var entityEl3 = document.createElement('a-entity');
entityEl3.setAttribute("networked", "template:#vxr-obj-template-dripbag;attachTemplateToLocal:true")
entityEl3.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl3);

var entityEl3 = document.createElement('a-entity');
entityEl3.setAttribute("networked", "template:#vxr-obj-template-medicaltape;attachTemplateToLocal:true")
entityEl3.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl3);

var entityEl3 = document.createElement('a-entity');
entityEl3.setAttribute("networked", "template:#vxr-obj-template-gauze;attachTemplateToLocal:true")
entityEl3.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl3);

var entityEl3 = document.createElement('a-entity');
entityEl3.setAttribute("networked", "template:#vxr-obj-template-allistweezers;attachTemplateToLocal:true")
entityEl3.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl3);

var entityEl3 = document.createElement('a-entity');
entityEl3.setAttribute("networked", "template:#vxr-obj-template-cottonswab01;attachTemplateToLocal:true")
entityEl3.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl3);

var entityEl3 = document.createElement('a-entity');
entityEl3.setAttribute("networked", "template:#vxr-obj-template-cottonswab02;attachTemplateToLocal:true")
entityEl3.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl3);

var entityEl3 = document.createElement('a-entity');
entityEl3.setAttribute("networked", "template:#vxr-obj-template-cottonswab03;attachTemplateToLocal:true")
entityEl3.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl3);

var entityEl3 = document.createElement('a-entity');
entityEl3.setAttribute("networked", "template:#vxr-obj-template-salinebottle;attachTemplateToLocal:true")
entityEl3.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl3);

var entityEl3 = document.createElement('a-entity');
entityEl3.setAttribute("networked", "template:#vxr-obj-template-alcoholgel;attachTemplateToLocal:true")
entityEl3.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl3);

var entityEl3 = document.createElement('a-entity');
entityEl3.setAttribute("networked", "template:#vxr-obj-template-heparinseal;attachTemplateToLocal:true")
entityEl3.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl3);

var entityEl3 = document.createElement('a-entity');
entityEl3.setAttribute("networked", "template:#vxr-obj-template-intracath;attachTemplateToLocal:true")
entityEl3.setAttribute("position","0 1.5 -0.2")
sceneEl.appendChild(entityEl3);



console.log("it's working ?")