const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userName = urlParams.get('name')

AFRAME.registerComponent('name-up', {
    
    schema: {
        name: { default: userName }
    },


    update: function () {
        var el = this.el;

        el.setAttribute("text-geometry", { value: this.data.name });
        el.setAttribute('material', {
            color: 'yellow',
        });
        el.setAttribute('rotation',
            '0 180 0',
        );
        el.setAttribute('position', {
            x: 0.5, y: 2, z: 0,
        });
        el.setAttribute('scale',
            '0.32 0.32 0.32',
        );
    }


});