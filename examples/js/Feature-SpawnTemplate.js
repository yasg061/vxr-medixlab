let aAssets = document.querySelector('a-assets');

// create asset reference and set gltf atributes
let maskn95= document.createElement('a-asset-item');
maskn95.setAttribute('id','maskn9555')
maskn95.setAttribute('src','../../Models/gltf/maskn95.gltf')
aAssets.appendChild(maskn95);

// set template
let maskTemplate = document.createElement('template');
let rootEntity = document.createElement('a-entity');
let bodyEntity = document.createElement('a-entity');

maskTemplate.setAttribute('id','xlr8')

rootEntity.setAttribute('id','Root-mask')
bodyEntity.setAttribute('id', 'maskn9501')
//bodyEntity.setAttribute('gltf-model','../../Models/gltf/maskn95.gltf')
bodyEntity.setAttribute('draggable', '')
bodyEntity.setAttribute('graggable', '')
// bodyEntity.setAttribute('toggle-physics', '')
bodyEntity.setAttribute('set-position', '');
bodyEntity.setAttribute('rotation', '0 90 0')
  rootEntity.append(bodyEntity); //innner
maskTemplate.content.append(rootEntity) //medium
aAssets.append(maskTemplate); //root
 
// let template9 =document.getElementById('xlr8')
// let clone = document.importNode(template9.content,true);
// document.appendChild(clone);
 
