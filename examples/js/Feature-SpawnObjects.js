
let ojectsResult
let spawnedObj
let sceneEl = document.querySelector('a-scene');

fetch("../../../js/structureEntities.json").then(
  function (u) { return u.json(); }
).then(
  function (json) {
    spawnedObj = json
    console.log("json objs: ", spawnedObj)
    ojectsResult = JSON.parse(JSON.stringify(json));

    spawnEntities(ojectsResult)
  }
)

function spawnEntities(structure) {
  console.log("structure obj ", structure)
  structure.forEach(item => {
    let entityEl = document.createElement('a-entity');
    entityEl.setAttribute("networked", `template:${item.template};attachTemplateToLocal:true`)
    entityEl.setAttribute("position", "0 1.5 -0.2")
    sceneEl.appendChild(entityEl);
    console.log("entity: ", entityEl)
  });
}

AFRAME.registerComponent('SpawnObjects', {
  schema: {
    speed: { default: 0.01 },
    direction: { default: 1 }
  },

  init() {
    console.log("json file", config)

  },

});