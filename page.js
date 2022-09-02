function save() {
    alert("Music Saved For Later...");
}
let audio = new Audio('./UtahCase.mp3');
function play(){
    audio.play();
}
function pause(){
    audio.pause();
}
function toggleBtnClass(id){
    const button = document.querySelector("#" + id);
    button.className = button.className == "Follow" ? "Unfollow" : "Follow";
    button.textContent = button.className == "Follow" ? "Unfollow" : "Follow";
}