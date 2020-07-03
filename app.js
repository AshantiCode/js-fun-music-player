const songs = [
  {
    name: "Acoustic Breeze",
    url: "./music/bensound-acousticbreeze.mp3",
  },
  {
    name: "Dance",
    url: "./music/bensound-dance.mp3",
  },
  {
    name: "Dreams",
    url: "./music/bensound-dreams.mp3",
  },
  {
    name: "Erf",
    url: "./music/bensound-erf.mp3",
  },
  {
    name: "Inspire",
    url: "./music/bensound-inspire.mp3",
  },
  {
    name: "Moose",
    url: "./music/bensound-moose.mp3",
  },
  {
    name: "Summer",
    url: "./music/bensound-summer.mp3",
  },
  {
    name: "The Lounge",
    url: "./music/bensound-thelounge.mp3",
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

// Return the Current Song
let index = 0;

//Play Current Song
const playSong = () => {
  const source = document.getElementById("source");
  let song = songs[index];
  //add current file to audio source
  source.src = song.url;

  player.load();
  player.play();

  console.log("Source: ", source.src);
};

const skipForward = () => {
  // if index reaches end of the list, start at the begining
  if (index >= 7) {
    index = -1;
  }
  index++;
  //   let nextSong = songs[index];
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
