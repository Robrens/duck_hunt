var duck = document.getElementById('root');
var sky = document.getElementsByTagName('main')

function move(){
window.setInterval(animation, 800);
}

function animation() {
    duck.style.top= Math.random()*90 + "%";

    duck.style.left = Math.random()*90 + "%"

};
move()

// while (move) {
//     animation()
// }

    
    
duck.style.transition= "1s";