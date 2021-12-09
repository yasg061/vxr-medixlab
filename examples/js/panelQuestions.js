    let scene = document.querySelector('a-scene');
    let objectsResult;
    let x = 0;

    fetch("../../../js/panelQuestions.json").then(
      function (u) { return u.json(); }
    ).then(
      function (json) {
        objectsResult = JSON.parse(JSON.stringify(json));
        console.log("answer1", objectsResult[1].answers[0]) 
        if (x < objectsResult.length) createQuestionsElements()
      }
    )

    function createQuestionsElements() {
      console.log('objectsResult:', objectsResult);
      let panel1 = document.createElement('a-plane');
      panel1.setAttribute('material', "color: black; opacity: 0.7");
      panel1.setAttribute('position', "1 2.375 1");
      panel1.setAttribute('rotation', "0 180 0");
      let questionPlane = document.createElement('a-plane');
      questionPlane.setAttribute('material', "color: #072B73; opacity: 0.7");
      questionPlane.setAttribute('position', "1 3 1");
      questionPlane.setAttribute('rotation', "0 180 0")
      questionPlane.setAttribute('height', "0.25");
      console.log('question:', objectsResult[x].question);
      questionPlane.setAttribute('text', `${objectsResult[x].question}; font:SourceSansPro-SemiBold-msdf.json; negate:false` );
      scene.appendChild(questionPlane);
      scene.appendChild(panel1);

      objectsResult[x].answers.forEach(item => {
        let answer = document.createElement('a-plane');
        answer.setAttribute('class', 'answers')
        answer.setAttribute('id', item.id)
        answer.setAttribute('material', "color: #072B73")
        answer.setAttribute('height', "0.15")
        answer.setAttribute('width', "0.75")
        answer.setAttribute('position', item.position)
        answer.setAttribute('text', `${item.text}; font:SourceSansPro-SemiBold-msdf.json; negate:false`)

        answer.addEventListener('raycaster-intersected', function () {
          answer.setAttribute('color', '#0D4BC6');
          console.log('Raycaster intersected')
        })

        answer.addEventListener('raycaster-intersected-cleared', function () {
          answer.setAttribute('color', '#072B73');
          console.log('Raycaster intersected cleared')
        })

        answer.addEventListener('click', function() {
          answer.setAttribute('color', '#0F234A');
          console.log('Clicked answer')
        })
        panel1.appendChild(answer);
      });

      let answersArray = [];
      let firstAnswer = document.getElementById('firstAnswer');
      let secondAnswer = document.getElementById('secondAnswer');
      let thirdAnswer = document.getElementById('thirdAnswer');
      let fourthAnswer = document.getElementById('fourthAnswer');

      answersArray.push(firstAnswer, secondAnswer, thirdAnswer, fourthAnswer);

      firstAnswer.addEventListener('click', function () {
          answersArray = answersArray.filter(answer => answer != firstAnswer);
          console.log('answersArray', answersArray);

          setTimeout(function() {
            questionPlane.removeAttribute('text');
            panel1.remove();
            questionPlane.remove();
            if (x < objectsResult.length) {
              createQuestionsElements()
            } else {
              let panel1 = document.createElement('a-plane');
              panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
              panel1.setAttribute('position', "1 2.375 1");
              panel1.setAttribute('rotation', "0 180 0");
              panel1.setAttribute('height', "0.5");
              panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
              scene.appendChild(panel1);
            }
          }, 1000);
          
          setTimeout(function() {
            questionPlane.removeAttribute('text');
            panel1.remove();
            questionPlane.remove();
            if (x < objectsResult.length) {
              createQuestionsElements()
            } else {
              let panel1 = document.createElement('a-plane');
              panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
              panel1.setAttribute('position', "1 2.375 1");
              panel1.setAttribute('rotation', "0 180 0");
              panel1.setAttribute('height', "0.5");
              panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
              scene.appendChild(panel1);
            }
          }, 1000);
      });

      secondAnswer.addEventListener('click', function () {
          answersArray = answersArray.filter(answer => answer != secondAnswer);
          console.log('answersArray', answersArray);

          setTimeout(function() {
            questionPlane.removeAttribute('text');
            panel1.remove();
            questionPlane.remove();
            if (x < objectsResult.length) {
              createQuestionsElements()
            } else {
              let panel1 = document.createElement('a-plane');
              panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
              panel1.setAttribute('position', "1 2.375 1");
              panel1.setAttribute('rotation', "0 180 0");
              panel1.setAttribute('height', "0.5");
              panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
              scene.appendChild(panel1);
            }
          }, 1000);

          setTimeout(function() {
            questionPlane.removeAttribute('text');
            panel1.remove();
            questionPlane.remove();
            if (x < objectsResult.length) {
              createQuestionsElements()
            } else {
              let panel1 = document.createElement('a-plane');
              panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
              panel1.setAttribute('position', "1 2.375 1");
              panel1.setAttribute('rotation', "0 180 0");
              panel1.setAttribute('height', "0.5");
              panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
              scene.appendChild(panel1);
            }
          }, 1000);
      });

      thirdAnswer.addEventListener('click', function () {
          setTimeout(function() {
            questionPlane.removeAttribute('text');
            panel1.remove();
            questionPlane.remove();
            if (x < objectsResult.length) {
              createQuestionsElements()
            } else {
              let panel1 = document.createElement('a-plane');
              panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
              panel1.setAttribute('position', "1 2.375 1");
              panel1.setAttribute('rotation', "0 180 0");
              panel1.setAttribute('height', "0.5");
              panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
              scene.appendChild(panel1);
            }
          }, 1000);

          setTimeout(function() {
            questionPlane.removeAttribute('text');
            panel1.remove();
            questionPlane.remove();
            if (x < objectsResult.length) {
              createQuestionsElements()
            } else {
              let panel1 = document.createElement('a-plane');
              panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
              panel1.setAttribute('position', "1 2.375 1");
              panel1.setAttribute('rotation', "0 180 0");
              panel1.setAttribute('height', "0.5");
              panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
              scene.appendChild(panel1);
            }
          }, 1000);
        });

      fourthAnswer.addEventListener('click', function () {
          answersArray = answersArray.filter(answer => answer != fourthAnswer);
          console.log('answersArray', answersArray);

          setTimeout(function() {
            questionPlane.removeAttribute('text');
            panel1.remove();
            questionPlane.remove();
            if (x < objectsResult.length) {
              createQuestionsElements()
            } else {
              let panel1 = document.createElement('a-plane');
              panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
              panel1.setAttribute('position', "1 2.375 1");
              panel1.setAttribute('rotation', "0 180 0");
              panel1.setAttribute('height', "0.5");
              panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
              scene.appendChild(panel1);
            }
          }, 1000);

          setTimeout(function() {
            questionPlane.removeAttribute('text');
            panel1.remove();
            questionPlane.remove();
            if (x < objectsResult.length) {
              createQuestionsElements()
            } else {
              let panel1 = document.createElement('a-plane');
              panel1.setAttribute('material', "color: #072B73; opacity: 0.7");
              panel1.setAttribute('position', "1 2.375 1");
              panel1.setAttribute('rotation', "0 180 0");
              panel1.setAttribute('height', "0.5");
              panel1.setAttribute('text', `value: ¡Fin de la prueba!; align: center`);
              scene.appendChild(panel1);
            }
          }, 1000);
      });
    }