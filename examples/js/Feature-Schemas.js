

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
        }
      ]
    }
    NAF.schemas.add(schema1);

    console.log("selector name:",item.selector)

  });
}