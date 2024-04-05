console.log("Welcome to Spotify")
//Intialise the variables
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar')
let gif =document.getElementById('gif')
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Late Night Vibe",filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"I always wanna die",filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"No Surprises",filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"fool for you",filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"the 1",filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"Apocalypse",filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Space Song",filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
 //audioElement.play();
//play/pause handle click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play-circle');
        masterPlay.classList.add('fa-solid fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay,classList.remove('fa-solid fa-pause-circle');
        masterPlay,classList.add('fa-solid fa-play-circle');
        gif.style.opacity=0;


    }
})


//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);

    })

})
