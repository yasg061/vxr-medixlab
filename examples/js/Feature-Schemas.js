//======================================================================
//===============================Schema=================================
//======================================================================

let schema1={
  template: '#vxr-obj-template',
  components: [
    'position',
    'rotation',
    {
      selector: '.vxr-obj-maskn95',
      component: 'rotation'
    },
    {
      selector: '.vxr-obj-maskn95',
      component: 'position'
    }
  ]
}


NAF.schemas.add(schema1);

//======================================================================
//===============================Schema=================================
//======================================================================

let schema2={
  template: '#vxr-obj-template-2',
  components: [
    'position',
    'rotation',      
    {
      selector: '.vxr-obj-alcoholbottle',
      component: 'rotation'
    },
    {
      selector: '.vxr-obj-alcoholbottle',
      component: 'position'
    }
  ]
}

NAF.schemas.add(schema2);



//======================================================================
//===============================Schema=================================
//======================================================================

let shcema3={
  template: '#vxr-obj-template-3',
  components: [
    'position',
    'rotation',      
    {
      selector: '.vxr-obj-tray',
      component: 'rotation'
    },
    {
      selector: '.vxr-obj-tray',
      component: 'position'
    } 
  ]
}

NAF.schemas.add(shcema3);