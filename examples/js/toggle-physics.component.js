let varBool=false;

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
    
    
    
      // this.onButtonDown = function (evt) { self.onButtonEvent(evt.detail.id, 'down'); };
      // this.onButtonUp = function (evt) { self.onButtonEvent(evt.detail.id, 'up'); };

    var that = this;
    this.onKeyUp = this.onKeyUp.bind(this);
    document.addEventListener('collisions', this.onKeyUp);

    // var el = this.el;
    // el.addEventListener('triggerdown', function (evt) {
    //   document.addEventListener('keyup', this.onKeyUp);
    // });

    NAF.utils.getNetworkedEntity(this.el).then((el) => {
      if (NAF.utils.isMine(el)) {
            that.el.setAttribute('dynamic-body','');        
      } else {
        that.updateOpacity(0.5);
        that.el.setAttribute('static-body','');        
      }
      // Opacity is not a networked attribute, but change it based on ownership events
      let timeout;
      el.addEventListener('ownership-gained', e => {
        that.updateOpacity(1);
        // console.log("ownership gained")
        // that.el.removeAttribute('static-body');   
        // that.el.setAttribute('dynamic-body',''); 
      });

      el.addEventListener('ownership-lost', e => {
            console.log("ownership-lost")
            this.el.removeAttribute('dynamic-body');   
            this.el.setAttribute('static-body',''); 
      });

      el.addEventListener('ownership-changed', e => {
        clearTimeout(timeout);
        if (e.detail.newOwner == NAF.clientId) {
          //same as listening to 'ownership-gained'
        } else if (e.detail.oldOwner == NAF.clientId) {
          console.log(e)
          console.log("old owner: ",e.detail.oldOwner)
          console.log("naf client ID: ",e.detail.oldOwner)
          //same as listening to 'ownership-lost'
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
          if(e.detail.els.indexOf(this.el)>=0){

            if(NAF.utils.takeOwnership(this.el)){   
              console.log(NAF.utils.takeOwnership)   
              console.log(NAF.utils.getNetworkedEntity(this.el))   
              console.log("object to change ownership", this.el)
              this.el.removeAttribute('static-body');   
              this.el.setAttribute('dynamic-body',''); 
              console.log("networked ? ", this.el.components)
            }
          }else{
            
          }
          
  },

  // updateColor() {
  //   const headColor = document.querySelector('#player .head').getAttribute('material').color;
  //   this.el.setAttribute('material', 'color', headColor);
  // },

  updateOpacity(opacity) {
    this.el.setAttribute('material', 'opacity', opacity);
  },
});