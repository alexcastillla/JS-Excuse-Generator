    let whoOptions = ['the dog','my grandma','my turtle','my bird','my fish'];
    let didOptions = ['ate','peed','burned','broke'];
    let objectOptions = ['my homework', 'my bag', 'the notebook'];
    let timeOptions = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function excuseGenerator(){

    whoAnswer = whoOptions[Math.round(Math.random()*(whoOptions.length-1))];
    didAnswer = didOptions[Math.round(Math.random()*(didOptions.length-1))];
    objectAnswer = objectOptions[Math.round(Math.random()*(objectOptions.length-1))];
    timeAnswer = timeOptions[Math.round(Math.random()*(timeOptions.length-1))];

    document.getElementById("answerDocument").innerHTML = "Sorry teacher, but" +" " + whoAnswer +" "+ didAnswer +" "+ objectAnswer +" "+ timeAnswer;
}
