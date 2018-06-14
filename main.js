var duck = document.getElementById('root');
var duck2 = document.getElementById('root2');
var sky = document.getElementsByTagName('main')
var scoreText = document.getElementById('score')

var score = 0;
scoreText.innerHTML = "Votre score est de :" + score;



function move() {
    window.setInterval(animation, 800);
}

function animation() {
    duck.style.top = Math.random() * 90 + "%";
    duck.style.left = Math.random() * 90 + "%";

    duck2.style.top = Math.random() * 75 + "%";
    duck2.style.left = Math.random() * 45 + "%";

};
move()

duck.style.transition = "0.35s";
duck2.style.transition = "0.35s";

duck.addEventListener("click", function() {
    score++;
    scoreText.innerHTML = "Votre score est de :" + score;
    duck.style.display = "none";
    setTimeout(function() {
        duck.style.display = "block"
    }, 3000);
});

duck2.addEventListener("click", function() {
    score++;
    scoreText.innerHTML = "Votre score est de :" + score;
    duck2.style.display = "none";
    setTimeout(function() {
        duck2.style.display = "block"
    }, 3000)


});
