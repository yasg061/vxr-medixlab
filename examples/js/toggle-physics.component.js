let varBool = false;

/* global AFRAME, NAF, THREE */
/**
 * Rotate the entity every frame if you are the owner.
 * When you press enter take ownership of the entity,
 * spin it in the opposite direction and change its color.
 */
AFRAME.registerComponent('toggle-physics', {
  schema: {
    speed: { default: 0.01 },
    direction: { default: 1 }
  },

  init() {

    var that = this;
    this.onKeyUp = this.onKeyUp.bind(this);
    document.addEventListener('collisions', this.onKeyUp);

    NAF.utils.getNetworkedEntity(this.el).then((el) => {
      if (NAF.utils.isMine(el)) {
        // that.updateColor();
        // that.el.setAttribute('dynamic-body', "");           

      } else {
        that.updateOpacity(0.5);
      }

      // Opacity is not a networked attribute, but change it based on ownership events
      let timeout;

      el.addEventListener('ownership-gained', e => {
        that.updateOpacity(1);
        that.el.setAttribute('dynamic-body', '');
      });

      el.addEventListener('ownership-lost', e => {
        that.updateOpacity(0.5);
        that.el.removeAttribute('dynamic-body');
      });

      el.addEventListener('ownership-changed', e => {
        clearTimeout(timeout);
        console.log(e.detail)
        if (e.detail.newOwner == NAF.clientId) {
          //same as listening to 'ownership-gained'
        } else if (e.detail.oldOwner == NAF.clientId) {
          //same as listening to 'ownership-lost'
          that.el.removeAttribute('dynamic-body');

        } else {
          that.updateOpacity(0.8);
          timeout = setTimeout(() => {
            that.updateOpacity(0.5);
          }, 200)
        }
      });
    });
  },

  onKeyUp(e) {
    console.log(e)
    if (NAF.utils.takeOwnership(this.el)) {
      console.log("ownership taked")
    }
  },

  updateOpacity(opacity) {
    this.el.setAttribute('material', 'opacity', opacity);
  },
});