const songs = [
  {
    name: "Acoustic Breeze",
    url: "./music/bensound-acousticbreeze.mp3",
    image: "./img/acousticbreeze.jpg",
  },
  {
    name: "Dance",
    url: "./music/bensound-dance.mp3",
    image: "/img/dance.jpg",
  },
  {
    name: "Dreams",
    url: "./music/bensound-dreams.mp3",
    image: "/img/bluejpg.jpg",
  },
  {
    name: "Erf",
    url: "./music/bensound-erf.mp3",
    image: "/img/erf.jpg",
  },
  {
    name: "Inspire",
    url: "./music/bensound-inspire.mp3",
    image: "/img/inspire.jpg",
  },
  {
    name: "Moose",
    url: "./music/bensound-moose.mp3",
    image: "./img/moose.jpg",
  },
  {
    name: "Summer",
    url: "./music/bensound-summer.mp3",
    image: "/img/summer.jpg",
  },
  {
    name: "The Lounge",
    url: "./music/bensound-thelounge.mp3",
    image: "./img/thelounge.jpg",
  },
];

const createSongList = () => {
  const list = document.createElement("ol");

  songs.forEach(function (song) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(song.name));

    list.appendChild(item);
  });
  return list;
};
document.getElementById("songList").appendChild(createSongList());

// Index of the Current Song in songs Array
let index = 0;

//Play Current Song
const playSong = () => {
  const source = document.getElementById("source");
  // get current song and update src
  let song = songs[index];
  source.src = song.url;

  const title = document.getElementById("title");
  title.innerText = song.name;
  highlightCurrent();
  updateImage();
  player.load();
  player.play();

  console.log("Source: ", source.src);
};

// Hightlight the current playing song
const highlightCurrent = () => {
  const songList = document.querySelector("ol");
  const nodeList = document.querySelectorAll("li");

  const currentSong = songs[index].name;
  console.log("Current Song: ", currentSong);

  for (let i = 0; i < nodeList.length; i++) {
    // get the text of <li>
    let listItem = nodeList[i].innerText;

    //compare to current playing song, if match, highlight
    if (listItem == currentSong) {
      nodeList[i].classList.add("current");
    } else {
      nodeList[i].classList.remove("current");
    }
  }
};

const updateImage = () => {
  const image = document.querySelector(".card-image");

  image.style.cssText = `background-image: url(${songs[index].image}); background-repeat: no-repeat; background-size: cover`;
};

const skipForward = () => {
  // if index reaches end of the list, start at the begining
  if (index >= 7) {
    index = -1;
  }
  index++;
  playSong();
};

const skipBackwards = () => {
  // if index smaller 0 start at end of the list
  if (index <= 0) {
    index = 8;
  }
  index--;
  playSong();
};

// Skip Forward
const forward = document.getElementById("forward");
forward.onclick = () => {
  skipForward();
};

// Skip Backward
const backward = document.getElementById("backward");
backward.onclick = () => {
  skipBackwards();
};

// Click Play Button
const play = document.getElementById("play");
play.onclick = () => {
  playSong();
};

//Click Pause Button
const pause = document.getElementById("pause");
pause.onclick = () => {
  player.pause();
};
