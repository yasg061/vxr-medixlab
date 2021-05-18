const colors = ['red', 'blue', 'yellow', 'purple', 'green', 'black', 'cyan', 'brown'];
const color = colors[Math.floor(Math.random() * colors.length)];

AFRAME.registerComponent('randomize-spec-color', {
  schema: {
    color: { default: color }
  },

  init: function () {
    // Wait for model to load.
    this.el.addEventListener('model-loaded', () => {
      // Grab the mesh / scene.
      const obj = this.el.getObject3D('mesh');
      // Go over the submeshes and modify materials we want.
      obj.traverse(node => {
        if (node.name.indexOf('Mesh.024_2') !== -1 ) {
          node.material.color.set(this.data.color);
        }
      });
    });
  }
});