

  function blanketOut(element) {
    console.log("fire")
    let obj = document.getElementById("e-blanket_animation")
    obj.setAttribute("animation-mixer", "clip:ClosedBlanlet;loop:once;repetitions:once;clampWhenFinished:true")
    document.getElementById("sphere_e-BlanketOut").setAttribute("visible","false")
    document.getElementById("sphere_e-BlanketUp").setAttribute("visible","true")
  }
  
  function blanketUp(element) {
    let obj = document.getElementById("e-blanket_animation")
    obj.setAttribute("animation-mixer", "clip:OpenBlanket;loop:once;repetitions:once;clampWhenFinished:true")
    document.getElementById("sphere_e-BlanketOut").setAttribute("visible","true")
    document.getElementById("sphere_e-BlanketUp").setAttribute("visible","false")
  }
  
  function   closePlug(element) {
    console.log("start fire")
    console.log({element})
    let search= element.id.replace("sphere","e")
    console.log({search})
    let obj = document.getElementById(search)
    console.log({obj})
    obj.setAttribute("animation-mixer", "loop:once;repetitions:once;clampWhenFinished:true")
  }
