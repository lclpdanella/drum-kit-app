let buttons = document.querySelectorAll(".drum");

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        checkButton(this.innerHTML)
        buttonAnimation(this.innerHTML)
    })
}

document.addEventListener("keypress", function(event){
    checkButton(event.key)
    buttonAnimation(event.key)
})

function checkButton(key){
    switch (key) {
        case 'w':
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'a':
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 's':
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'd':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'j':
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 'k':
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'l':
            let hiHat = new Audio('sounds/hiHat.wav');
            hiHat.play();
            break;
            
        default:
            break;
    }
}

/*document.querySelector("."+currentKey).setAttribute("class", "w drum pressed")*/
function buttonAnimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed")
    setTimeout(function(){ document.querySelector("."+currentKey).classList.remove("pressed") }, 100);

    
}