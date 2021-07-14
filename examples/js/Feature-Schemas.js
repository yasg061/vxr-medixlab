let result
let objSchemas

fetch(url).then(
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
        },
        {
          selector: item.selector,
          component: 'visible'
        },
        {
          selector: item.selector,
          component: 'animation-trigger'
        }
      ]
    }
    NAF.schemas.add(schema1);

 
  });
}