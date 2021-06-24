let result
let objSchemas

fetch("../../../js/structureEntities.json").then(
  function (u) { return u.json(); }
).then(
  function (json) {
    objSchemas = json
    result = JSON.parse(JSON.stringify(json));

    SetSchemas(result)
  }
)

function SetSchemas(structure) {
  structure.forEach(item => {

    let schema1 = {
      template: item.template,
      components: [
        'position',
        'rotation',
        {
          selector: item.selector,
          component: 'rotation'
        },
        {
          selector: item.selector,
          component: 'position'
        }
      ]
    }
    NAF.schemas.add(schema1);


  });
}