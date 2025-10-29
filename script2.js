
// ketika playlist atau daftar video di kanan dipencet
let playlist1 = document.querySelectorAll('.playlist .vid');
let mainVideo1 = document.querySelector('.main-video iframe');
let title = document.querySelector('.main-video .title');
    
    playlist1.forEach(video =>{
        video.onclick = () =>{
             playlist1.forEach(vid => vid.classList.remove('active'));
                video.classList.add('active');
                if(video.classList.contains('active')){
                let src = video.children[0].getAttribute('src');
                mainVideo1.src = src;
                let poster = video.children[0].getAttribute('poster');
                mainVideo1.poster = poster;
                let text = video.children[1].innerHTML;
                title.innerHTML = text;
                    }
                }
            });
 
// menerima file dari halaman RTube awal
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const videoId = urlParams.get("videoId");

const videoPlayer = document.getElementById('videoPlayer');
videoPlayer.src = videoId ;

var urlParams2 = new URLSearchParams(window.location.search);
// untuk judul
var hasilText = urlParams2.get("title");
let result = document.getElementById('judul')
result.innerHTML = hasilText;

// untuk tema web dan tema dr bootstrap

var urlParams3 = new URLSearchParams(window.location.search);
var bgTema = urlParams3.get("tema");
let tema = document.getElementById("bg-video")
tema.src = bgTema;

var urlParams4 = new URLSearchParams(window.location.search);
var bgTema2 = urlParams4.get("theme");
let tema2 = document.getElementById("body")
tema2.setAttribute("data-bs-theme", bgTema2)

var urlParams4 = new URLSearchParams(window.location.search);
var bgTema3 = urlParams4.get("logo");
let tema3 = document.getElementById("logo")
tema3.src = bgTema3

var bgTema4 = urlParams4.get("menu");
let tema4 = document.getElementById("menu")
tema4.src = bgTema4

var bgTema5 = urlParams4.get("add");
let tema5 = document.getElementById("upload")
tema5.src = bgTema5

var bgTema6 = urlParams4.get("home");
let tema6 = document.getElementById("home")
tema6.src = bgTema6

var bgTema7 = urlParams4.get("play");
let tema7 = document.getElementById("playlist")
tema7.src = bgTema7



