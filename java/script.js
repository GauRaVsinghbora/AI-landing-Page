const autoPlayVideo = document.querySelector(".autoplay");
const videobox  = document.querySelector(".video-section");
const playButton = document.querySelector(".play-button");
const searchbar = document.querySelector(".searchbar");

autoPlayVideo.addEventListener("click", () => {
    playButton.remove();
    console.log("play button is appended.")

    autoPlayVideo.setAttribute("autoplay", "autoplay");
    autoPlayVideo.play(); // This line will start the video playback
});

playButton.addEventListener("click", () => {
    playButton.remove();
    console.log("play button is appended.")

    autoPlayVideo.setAttribute("autoplay", "autoplay");
    autoPlayVideo.play(); // This line will start the video playback
});

searchbar.addEventListener("click",()=>{
    searchbar.setAttribute('transform','scale(1.1)');
})