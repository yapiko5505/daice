function drawdaice() {
    let randomNumber = Math.floor(Math.random() * 6 + 1);
    document.getElementsByClassName("daice")[0].setAttribute('src', `images/daice${randomNumber}.png`);
    document.querySelectorAll("button")[0].innerHTML="もう一度投げる";
}