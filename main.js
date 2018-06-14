var duck = document.getElementById('root');


function move(){
window.setInterval(animation, 500);
}

function animation() {
    duck.style.top=48+ "px";

    duck.style.left=48+ "px";

};

// while (move) {
//     animation()
// }
move();
