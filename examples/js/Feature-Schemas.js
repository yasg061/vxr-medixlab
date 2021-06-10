let result
let objSchemas

fetch("../../js/structureSchemas.json").then(
  function(u){ return u.json();}
).then(
  function(json){
    objSchemas=json
    console.log("json: ", objSchemas)
    result = JSON.parse(JSON.stringify(json));

    SetSchemas(result)
  }
)

function SetSchemas(structure) {
  console.log("structure",structure)
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
    console.log("added template: ", item.template)


  });
}