console.log("Welcome to Spotify!");
let songIndex;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('list'));


let songs = [
    {songName: 'Animals - Martin Garrix', filePath:'https://www.youtube.com/watch?v=IPYTxAHeR_o', coverPath:'https://i.vgy.me/Zx5Eym.png'},
    {songName: 'Let Me Down Slowly - Alec Benjamin', filePath:'songs/2.mp3', coverPath:'https://i.vgy.me/enlbsk.jpg'},
    {songName: 'Better - Ananya Birla', filePath:'songs/3.mp3', coverPath:'https://i.vgy.me/gtHLLp.png'},
    {songName: 'How Long - Charlie Puth', filePath:'songs/4.mp3', coverPath:'https://i.vgy.me/6RBUBJ.png'},
    {songName: 'Perfect - Ed Sheeran', filePath:'songs/5.mp3', coverPath:'https://i.vgy.me/L7ASdc.png'}
];

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})


masterPlay.src = "https://github.com/user-attachments/assets/ada4c9cf-2ff9-44a9-b5c3-9fef54893498";
//audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src = "https://github.com/user-attachments/assets/b38d35ab-f1d2-46b0-9218-c8dfde25e0f2";
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.src = "https://github.com/user-attachments/assets/ada4c9cf-2ff9-44a9-b5c3-9fef54893498";
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100; 
})
// Array.from(document.getElementsByClassName('playLogo')).forEach((element)=>{
//         element.addEventListener('click', (e)=>{
//         console.log(e.target);
//         songPlay.src = "pause.svg";
//         songPlay.src = "play.svg";
//     })
// })



let currentPlaying = null; // To track the currently playing song
let audio = new Audio(); // Create a new Audio object

songItems.forEach((element, index) => {
    element.querySelector('.playLogo').addEventListener('click', (e) => {
        const playIcon = e.target;
        const isPlaying = playIcon.src.includes('https://github.com/user-attachments/assets/dc417798-0579-4c5c-a262-c543215b6741');

        if (currentPlaying && currentPlaying !== playIcon) {
            currentPlaying.src = 'https://github.com/user-attachments/assets/ada4c9cf-2ff9-44a9-b5c3-9fef54893498'; // Reset the icon of the previously playing song
            audio.pause(); // Pause the currently playing song
        }

        if (isPlaying) {
            playIcon.src = 'https://github.com/user-attachments/assets/ada4c9cf-2ff9-44a9-b5c3-9fef54893498';
            audio.pause();
            currentPlaying = null; // No song is playing now
        } else {
            playIcon.src = 'https://github.com/user-attachments/assets/dc417798-0579-4c5c-a262-c543215b6741';
            audio.src = songs[index].filePath;
            audio.play();
            currentPlaying = playIcon; // Set the current playing song
        }

        console.log(e.target); // Logs the clicked element
    });
});

