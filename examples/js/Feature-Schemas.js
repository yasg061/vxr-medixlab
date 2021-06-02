let result
let obj

fetch("../../js/tst.json").then(
  function(u){ return u.json();}
).then(
  function(json){
    obj=json
    console.log("json: ", obj)
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