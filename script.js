// Search System
let kataSearch = [
  "Ngendap Ngendap Biar Nggak Ketahuan - The Outlast Trials Indonesia - Part 28",
  "[EN] MSC Grand Finals | BLACKLIST INTERNATIONAL VS ONIC | Game 1",
  "Attack On Titan Season 4 (Final Season) Part 4 - Official Trailer 2",
  "Try Not To Laugh Challenge #9",
  "Attack On Titan Season 4 (Final Season) Part 4 - Official Trailer | Sub indonesia",
  "dhruv - double take (official video)",
  "Satu Hal Yang Kurindu // Nyanyian Pujian Bagimu (cover) by Filakustik",
  "Reels suci",
  "Anything You Can Fit In The Circle I'll Pay For",
  "Attack On Titan Season 4 Part 3 - Official Main Trailer | English Sub",
  "COBAIN RAMEN DAN JAPANESE FOOD DI INDIA! RASANYA... | WASEDABOYS WORLD TRIP 30",
  "Goodness Of God (LIVE) - Jenn Johnson | VICTORY",
  "Terhebat-CJR (cover)",
  "Mengejar Mimpi (feat.MCUC)",
  "Praise (feat. Brandon Lake, Chris Brown & Chandler Moore) | Elevation Worship",
];

const hasil1 = document.querySelector(".hasil");
const input1 = document.getElementById("input");

input1.onkeyup = function () {
  let result = [];
  let input2 = input1.value;
  if (input2.length) {
    result = kataSearch.filter((keyword) => {
      return keyword.toLowerCase().includes(input2.toLowerCase());
    });
    console.log(result);
  }

  display(result);

  if (result.length == 0) {
    hasil1.innerHTML = "";
  }
};

function display(result) {
  const isi = result.map((list) => {
    return "<li onclick=selectInput(this) style='color:black;'>" + list + "</li>";
  });
  hasil1.innerHTML = "<ul>" + isi.join("") + "</ul>";
}

function selectInput(list) {
  input1.value = list.innerHTML;
  hasil1.innerHTML = "";

  let searchBox = document.querySelector("#input");
  let content = document.querySelectorAll(".yt .div1");

  content.forEach((hide) => (hide.style.display = "none"));
  let value = searchBox.value.toLowerCase();
  content.forEach((filter) => {
    let title = filter.getAttribute("data-title");
    if (input1.value == title) {
      filter.style.display = "block";
    }
  });
}
let searchBox = document.querySelector("#input");
let content = document.querySelectorAll(".yt .div1");

searchBox.oninput = () => {
  content.forEach((hide) => (hide.style.display = "none"));
  let value = searchBox.value.toLowerCase();
  content.forEach((filter) => {
    let title2 = filter.getAttribute("data-title2");
    if (value == title2) {
      filter.style.display = "block";
    }
    if (searchBox.value == "") {
      filter.style.display = "block";
    }
  });
};

// Search System

// Ketika masing2 video di pencet maka filenya di kirim ke gallerry
function fungsii(videoId, a) {
  let yt1 = document.querySelectorAll(".div1");
  let info = document.getElementById(a);

  let title = info.innerHTML;
  console.log(title);

  let bgTema = document.getElementById("bg-video")
  let bgTema2 = bgTema.src;

  let theme = document.getElementById("body")
  let theme2 = theme.getAttribute("data-bs-theme")

  let logo = document.getElementById("logo")
  let logo2 = logo.src;

  let menu = document.getElementById("menu")
  let menu2 = menu.src;

  let add = document.getElementById("upload")
  let add2 = add.src;

  let home = document.getElementById("home")
  let home2 = home.src;

  let play = document.getElementById("playlist")
  let play2 = play.src;

  // kirim file ke Gallery.html
  let videoId2 = "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
  window.location.href = "Gallery.html?videoId=" + videoId2 + "&title=" + encodeURIComponent(title) + "&tema=" + bgTema2 + "&theme=" + theme2 + "&logo=" + logo2 + "&menu=" + menu2 + "&add=" + add2 + "&home=" + home2 + "&play=" + play2 ; 
}

// TEMA 

function theme(){
  let active = document.getElementById("active");
  let attr = active.setAttribute("class", "bx bxs-sun");

  let color = document.getElementById("body")
  let color2 = color.setAttribute("data-bs-theme", "light")

  let bgVid = document.getElementById("bg-video")
  bgVid.src = 'images/sunny.mp4';

  let logo = document.getElementById("logo");
  logo.src = 'icon/motionblack.png'

  let home = document.getElementById("home")
  home.src = "sidebar/home-black.png"

  let play = document.getElementById("playlist")
  play.src = "sidebar/playlist-black.png"
}

function theme2(){
  
  let active = document.getElementById("active");
  let attr = active.setAttribute("class", "bx bxs-moon");

  let color = document.getElementById("body")
  let color2 = color.setAttribute("data-bs-theme", "dark")

  let bgVid = document.getElementById("bg-video")
  bgVid.src = 'images/night2.mp4';

  let logo = document.getElementById("logo");
  logo.src = 'icon/motionwhite.png'

  let addVid = document.getElementById("upload");
  addVid.src = "header logo/video-white.png"

  let menu = document.getElementById("menu")
  menu.src = "header logo/menu-white.png"

  let home = document.getElementById("home")
  home.src = "sidebar/home-white.png"

  let play = document.getElementById("playlist")
  play.src = "sidebar/playlist-white.png"
}
function theme3(){
  
  let active = document.getElementById("active");
  let attr = active.setAttribute("class", "bx bxs-cloud-rain");

  let color = document.getElementById("body")
  let color2 = color.setAttribute("data-bs-theme", "dark")

  let bgVid = document.getElementById("bg-video")
  bgVid.src = 'images/rain.mp4';

  let logo = document.getElementById("logo");
  logo.src = 'icon/motionwhite.png'

  let addVid = document.getElementById("upload");
  addVid.src = "header logo/video-white.png"

  let menu = document.getElementById("menu")
  menu.src = "header logo/menu-white.png"

  let home = document.getElementById("home")
  home.src = "sidebar/home-white.png"

  let play = document.getElementById("playlist")
  play.src = "sidebar/playlist-white.png"
}
function theme4(){
  
  let active = document.getElementById("active");
  let attr = active.setAttribute("class", "bx bxs-ghost");

  let color = document.getElementById("body")
  let color2 = color.setAttribute("data-bs-theme", "dark")

  let bgVid = document.getElementById("bg-video")
  bgVid.src = 'images/spooky.mp4';

  let logo = document.getElementById("logo");
  logo.src = 'icon/motionwhite.png'

  let addVid = document.getElementById("upload");
  addVid.src = "header logo/video-white.png"

  let menu = document.getElementById("menu")
  menu.src = "header logo/menu-white.png"

  let home = document.getElementById("home")
  home.src = "sidebar/home-white.png"

  let play = document.getElementById("playlist")
  play.src = "sidebar/playlist-white.png"



}
function theme5(){
  
  let active = document.getElementById("active");
  let attr = active.setAttribute("class", "bx bx-cloud-snow");

  let color = document.getElementById("body")
  let color2 = color.setAttribute("data-bs-theme", "dark")

  let bgVid = document.getElementById("bg-video")
  bgVid.src = 'images/snow.mp4';

  let logo = document.getElementById("logo");
  logo.src = 'icon/motionwhite.png'

  let menu = document.getElementById("menu")
  menu.src = "header logo/menu-white.png"

  let addVid = document.getElementById("upload");
  addVid.src = "header logo/video-white.png"

  let home = document.getElementById("home")
  home.src = "sidebar/home-white.png"

  let play = document.getElementById("playlist")
  play.src = "sidebar/playlist-white.png"
}
function theme6(){
  
  let active = document.getElementById("active");
  let attr = active.setAttribute("class", "bx bxs-leaf");

  let color = document.getElementById("body")
  let color2 = color.setAttribute("data-bs-theme", "dark")

  let bgVid = document.getElementById("bg-video")
  bgVid.src = 'images/autumn.mp4';

  let logo = document.getElementById("logo");
  logo.src = 'icon/motionwhite.png'

  let menu = document.getElementById("menu")
  menu.src = "header logo/menu-white.png"

  let addVid = document.getElementById("upload");
  addVid.src = "header logo/video-white.png"

  let home = document.getElementById("home")
  home.src = "sidebar/home-white.png"

  let play = document.getElementById("playlist")
  play.src = "sidebar/playlist-white.png"

}
function theme0(){
  
  let active = document.getElementById("active");
  let attr = active.setAttribute("class", "");

  let color = document.getElementById("body")
  let color2 = color.setAttribute("data-bs-theme", "light")

  let bgVid = document.getElementById("bg-video")
  bgVid.src = '';

  let logo = document.getElementById("logo");
  logo.src = 'icon/motionblack.png'

  let menu = document.getElementById("menu")
  menu.src = "header logo/menu-black.png"

  let addVid = document.getElementById("upload");
  addVid.src = "header logo/video-black.png"

  let home = document.getElementById("home")
  home.src = "sidebar/home-black.png"

  let play = document.getElementById("playlist")
  play.src = "sidebar/playlist-black.png"
}

// TEMA
