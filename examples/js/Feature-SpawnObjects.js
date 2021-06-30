
let ojectsResult
let spawnedObj
let sceneEl = document.querySelector('a-scene');

fetch(url).then(
  function (u) { return u.json(); }
).then(
  function (json) {
    spawnedObj = json
     ojectsResult = JSON.parse(JSON.stringify(json));

    spawnEntities(ojectsResult)
  }
)

function spawnEntities(structure) {
   let i =0

  structure.forEach(item => {
    i++
    let entityEl = document.createElement('a-entity');
    entityEl.setAttribute("position", "0 1.5 -0.2")
    entityEl.setAttribute("id",`template${i}`)

    if(item.selector=="#instruments"){
      entityEl.setAttribute("networked", `template:${item.template};attachTemplateToLocal:true`)
     }else{
      entityEl.setAttribute("networked", `template:${item.template};attachTemplateToLocal:true`)

    }

    sceneEl.appendChild(entityEl);
   });
}

AFRAME.registerComponent('spawnobjects', {
  schema: {
    speed: { default: 0.01 },
    direction: { default: 1 }
  },

  init() {
 
  },

});