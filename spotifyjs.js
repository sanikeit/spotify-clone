console.log("welcome to spotify");
let songIndex=0;
let audioel=new Audio('Excuses.mp3');
let masterPlay=document.getElementsByClassName('fa-play-circle');
console.log(masterPlay);
// let progressBar=document.getElementById('myRange');
// console.log(progressBar);

masterPlay.addEventListener('click',()=>{
    if(audioel.currentTime==0)
    {
        audioel.play();
    }
})
// progressBar.addEventListener('timeupdate',()=>{
//     console.log('timeupdate');
// })
//audioel.play();