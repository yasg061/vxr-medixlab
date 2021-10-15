AFRAME.registerComponent('gltf-hover', {
  init: function () {
    let el = this.el;
    let self = this;
    this.mouseOverObject = null
    self.trees = [];
    el.addEventListener('model-loaded', e => {
      let tree3D = el.getObject3D('mesh');
      if (!tree3D) {
        return;
      }
      //console.log('tree3D', tree3D);
      tree3D.traverse(function (node) {
        if (node.isMesh) {
          console.log(node);
          self.trees.push(node);
        }
      });
    });

    el.addEventListener('raycaster-intersected', e => {

      self.raycaster = e.detail.el;
      let intersection = self.raycaster.components.raycaster.getIntersection(
        el
      );
      console.log('Hover: ', intersection.object.name, self.mouseOverObject,
        intersection.object.name != self.mouseOverObject);
      self.mouseOver = true
    });

    el.addEventListener('raycaster-intersected-cleared', e => {

      self.trees.forEach(function (tree) {
        tree.material.emissive = new THREE.Color(0x000000);
        tree.material.emissiveIntensity = 0.0;
      });
      self.mouseOverObject = null
      self.mouseOver = false
    });
    document.addEventListener('mousemove', e => {
      if (!self.mouseOver) return;

      let intersection = self.raycaster.components.raycaster.getIntersection(
        el
      );
      if (!self.mouseOverObject || self.mouseOverObject.name != intersection.object.name) {
        console.log('Hover: ', intersection.object.name, self.mouseOverObject,
          intersection.object.name != self.mouseOverObject);
        // intersection.object.material.emissive = new THREE.Color(0xFF0000);
        // intersection.object.material.emissiveIntensity = 0.5;
        if (intersection.object.name == 'Box000') {
          document.getElementById('e-Egg').setAttribute('animation-mixer', 'clip:Idle')
        } else if (intersection.object.name == 'Box001') {
          document.getElementById('e-BadChicken').setAttribute('animation-mixer', 'clip:Idle')
        } else if (intersection.object.name == 'Box002') {
          document.getElementById('e-Bat').setAttribute('animation-mixer', 'clip:Idle')
        } else if (intersection.object.name == 'Box003') {
          document.getElementById('e-Butterfly').setAttribute('animation-mixer', 'clip:Idle')
        } else if (intersection.object.name == 'Box004') {
          document.getElementById('e-Cactus').setAttribute('animation-mixer', 'clip:Idle')
        } else if (intersection.object.name == 'Box005') {
          document.getElementById('e-Ghost').setAttribute('animation-mixer', 'clip:Idle')
        } else if (intersection.object.name == 'Box006') {
          document.getElementById('e-Gremlin').setAttribute('animation-mixer', 'clip:Idle')
        } else if (intersection.object.name == 'Box007') {
          document.getElementById('e-Ogre').setAttribute('animation-mixer', 'clip:Idle')
        } else if (intersection.object.name == 'Box008') {
          document.getElementById('e-Penguin').setAttribute('animation-mixer', 'clip:Idle')
        } else if (intersection.object.name == 'Box009') {
          document.getElementById('e-RockGuitar').setAttribute('animation-mixer', 'clip:Idle')
        } else if (intersection.object.name == 'Box010') {
          document.getElementById('e-Vampire').setAttribute('animation-mixer', 'clip:Idle')
        }

        if (self.mouseOverObject) {
          self.mouseOverObject.material.emissive = new THREE.Color(0x000000);
          self.mouseOverObject.material.emissiveIntensity = 0.0;
          if (self.mouseOverObject.name == 'Box000') {
            document.getElementById('e-Egg').removeAttribute('animation-mixer')
          } else if (self.mouseOverObject.name == 'Box001') {
            document.getElementById('e-BadChicken').removeAttribute('animation-mixer')
          } else if (self.mouseOverObject.name == 'Box002') {
            document.getElementById('e-Bat').removeAttribute('animation-mixer')
          } else if (self.mouseOverObject.name == 'Box003') {
            document.getElementById('e-Butterfly').removeAttribute('animation-mixer')
          } else if (self.mouseOverObject.name == 'Box004') {
            document.getElementById('e-Cactus').removeAttribute('animation-mixer')
          } else if (self.mouseOverObject.name == 'Box005') {
            document.getElementById('e-Ghost').removeAttribute('animation-mixer')
          } else if (self.mouseOverObject.name == 'Box006') {
            document.getElementById('e-Gremlin').removeAttribute('animation-mixer')
          } else if (self.mouseOverObject.name == 'Box007') {
            document.getElementById('e-Ogre').removeAttribute('animation-mixer')
          } else if (self.mouseOverObject.name == 'Box008') {
            document.getElementById('e-Penguin').removeAttribute('animation-mixer')
          } else if (self.mouseOverObject.name == 'Box009') {
            document.getElementById('e-RockGuitar').removeAttribute('animation-mixer')
          } else if (self.mouseOverObject.name == 'Box010') {
            document.getElementById('e-Vampire').removeAttribute('animation-mixer')
          }
        }
        self.mouseOverObject = intersection.object;
      }
    });
    el.addEventListener('click', function () {
      console.log('click over: ', self.mouseOverObject);

      if (self.mouseOverObject.name == 'Box001') {
        document.getElementById('player').setAttribute('animation', 'property: position; to: 0 2.05 1; dur: alternate; dur: 2000;')
        console.log('............');
        // let url = "https:";
        // let win = window.open(url, "_blank");
        // win.focus();
      }
    });
  },
  highlight: function () {},
  deselect: function () { }
});