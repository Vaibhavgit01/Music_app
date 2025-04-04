let songName = document.querySelector("#song-name")
let songSinger = document.querySelector("#song-artist")
let songImage = document.querySelector(".song-img")
let playPauseImg = document.querySelector("#play-pause")
let volumeRange  = document.querySelector("#volume-range")
let songRange  = document.querySelector("#song-duration")
let volSvg  = document.querySelector("#vol-svg")
let playlistimg  = document.querySelector("#playlist-img")
let playlist  = document.querySelector(".playlist")
let playlistsong  = document.querySelectorAll(".playlist-song")

let index = 0;
let playingSong = false;
let track = document.createElement('audio');
let songs = [
    {
        name: "Go neffex",
        path: "song1.m4a",
        image: "images_svg/Go.jpg",
        singer: "Neffex"

    },
    {
        name: "Cold neffex",
        path: "song2.m4a",
        image: "images_svg/Cold.jpg",
        singer: "Neffex"

    },
    {
        name: "Destiny neffex",
        path: "song3.m4a",
        image: "images_svg/Destiny.jpg",
        singer: "Neffex"

    },
    {
        name: "Aaj Sa Teri",
        path: "song4.m4a",
        image: "images_svg/Padman.jpg",
        singer: "Arijit Singh"

    },
    {
        name: "Afsos",
        path: "song5.m4a",
        image: "images_svg/Afsos.jpg",
        singer: "Anuv Jain & Ap Dhillon"

    },

]
function loadTrack(index) {
    track.src = songs[index].path;
    songName.innerHTML = songs[index].name;
    songSinger.innerHTML = songs[index].singer;
    songImage.style = `background-image:url("${songs[index].image}");`
Volume()
duration()
setInterval(() => {
    songRange.max = track.duration;
    songRange.value = track.currentTime;
}, 1000);
track.loop=true;
track.load()
}
loadTrack(index);

// ###########3play finctiom
function PlayPause() {
    if (playingSong == false) {
        playSong()
    } else {
        pauseSong()
    }
}
function playSong() {
    track.play();
    playingSong = true;
    playPauseImg.src = "images_svg/pause.svg"
}
function pauseSong() {
    track.pause();
    playingSong = false;
    playPauseImg.src = "images_svg/play.svg"
}
function NextSong() {
    if (index < songs.length-1) {
        index ++;
        loadTrack(index)
        playSong()
    } else {
        index = 0;

        loadTrack(index)
        playSong()
    }
}
function PrevSong() {
    if (index > 0) {
        index--;
        loadTrack(index)
        playSong()
    } else {
        index = songs.length - 1;
        loadTrack(index)
        playSong()
    }
}
function Volume(){
    track.volume = volumeRange.value / 100;
    if(volumeRange.value == 0){
        volSvg.src = "images_svg/mute.svg"
}else{
    volSvg.src = "images_svg/volume.svg"
}
}
function duration(){
    track.currentTime=songRange.value
}
playlistimg.addEventListener("click",()=>{
    playlist.classList.toggle("playlist_active")
    if(playlist.classList.contains("playlist_active")){
        playlistimg.src = "images_svg/cross.svg"
    }else{
        playlistimg.src = "images_svg/playlist.svg"
    }
})
playlistsong.forEach((song,index)=>{
    song.addEventListener("click",()=>{
        index = index;
        loadTrack(index)
        playSong()
        playlist.classList.remove("playlist_active")
        playlistimg.src = "images_svg/playlist.svg"
    })
})