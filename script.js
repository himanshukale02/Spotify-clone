console.log("Welcome to Spotify!");
let songIndex;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('list'));


let songs = [
    {songName: 'Animals - Martin Garrix', filePath:'songs/1.mp3', coverPath:'covers/cover1.png'},
    {songName: 'Let Me Down Slowly - Alec Benjamin', filePath:'songs/2.mp3', coverPath:'covers/cover2.png'},
    {songName: 'Better - Ananya Birla', filePath:'songs/3.mp3', coverPath:'covers/cover3.png'},
    {songName: 'How Long - Charlie Puth', filePath:'songs/4.mp3', coverPath:'covers/cover4.png'},
    {songName: 'Perfect - Ed Sheeran', filePath:'songs/5.mp3', coverPath:'covers/cover5.png'}
];

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})


masterPlay.src = "play.svg";
//audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src = "pause.svg";
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.src = "play.svg";
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
        const isPlaying = playIcon.src.includes('playing.svg');

        if (currentPlaying && currentPlaying !== playIcon) {
            currentPlaying.src = 'play.svg'; // Reset the icon of the previously playing song
            audio.pause(); // Pause the currently playing song
        }

        if (isPlaying) {
            playIcon.src = 'play.svg';
            audio.pause();
            currentPlaying = null; // No song is playing now
        } else {
            playIcon.src = 'playing.svg';
            audio.src = songs[index].filePath;
            audio.play();
            currentPlaying = playIcon; // Set the current playing song
        }

        console.log(e.target); // Logs the clicked element
    });
});

