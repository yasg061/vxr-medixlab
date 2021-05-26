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
        // that.updateColor();
        // that.el.setAttribute('dynamic-body', "");           

      } else {
        that.updateOpacity(0.5);
              

      }

      // Opacity is not a networked attribute, but change it based on ownership events
      let timeout;

      el.addEventListener('ownership-gained', e => {
        that.updateOpacity(1);
        console.log("ownership gained")
        that.el.setAttribute('dynamic-body',''); 

      });

      el.addEventListener('ownership-lost', e => {
        that.updateOpacity(0.5);
        that.el.removeAttribute('dynamic-body');   
        console.log("lost ownership")
        
      });

      el.addEventListener('ownership-changed', e => {
        clearTimeout(timeout);
        if (e.detail.newOwner == NAF.clientId) {
          console.log("ownership-changed")
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
 

    // let x = document.getElementsByClassName('vxr-obj-maskn95');
    // x[0].setAttribute("rotator","2")
    // console.log("danmwon")
    // console.log("raycast intersect is working.")
        
   
          if(e.detail.els.indexOf(this.el)>=0){
            console.log("Working")
            console.log("object to change ownership: ", this.el)
            NAF.utils.takeOwnership(this.el)
          }else{
            console.log("not working")
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