// Define song arrays for each artist
const anirudhSongs = [
    {
        title: 'Naa Ready',
        singer: 'Anirudh Ravichander',
        audioSrc: 'assets/Anirudh/Naa Ready.mp3',
        albumArt: 'assets/Anirudh/leo.jpg'
    },
    {
        title: 'Bad Ass',
        singer: 'Anirudh Ravichander',
        audioSrc: 'assets/Anirudh/badass.mp3',
        albumArt: 'assets/Anirudh/leo.jpg'
    }
    // Add more songs for Anirudh as needed
];

const harishSongs = [
    {
        title: 'Engeyum Kaadhal',
        singer: 'Harris Jayaraj',
        audioSrc: 'assets/harish/Engeyum-Kaadhal.mp3',
        albumArt: 'assets/harish/engeyum.jfif'
    },
    {
        title: 'Venmathiye',
        singer: 'Harris Jayaraj',
        audioSrc: 'assets/harish/venmathiye.mp3',
        albumArt: 'assets/harish/download.jfif'
    },
    {
        title: 'June Pona',
        singer: 'Harris Jayaraj',
        audioSrc: 'assets/harish/June-Pona.mp3',
        albumArt: 'assets/harish/june.jfif'
    },
    {
        title: 'Manjal Veiyil',
        singer: 'Harris Jayaraj',
        audioSrc: 'assets/harish/Manjal-Veiyil.mp3',
        albumArt: 'assets/harish/manjal.jfif'
    },
    {
        title: 'Vaseegara',
        singer: 'Harris Jayaraj',
        audioSrc: 'assets/harish/vaseegara.mp3',
        albumArt: 'assets/harish/vaseegara.jfif'
    }

    // Add more songs for Harish as needed
];

const tmsSongs = [
    {
        title: 'Mudhal Kaadhal',
        singer: 'G. V. Prakash Kumar',
        audioSrc: 'assets/GV/adiye.mp3',
        albumArt: 'assets/GV/adiye.jfif'
    },
    {
        title: 'Mazhai Pozhiyum',
        singer: 'G. V. Prakash Kumar',
        audioSrc: 'assets/GV/Mazhai-Pozhiyum.mp3',
        albumArt: 'assets/GV/malai.jfif'
    },
    {
        title: 'Pookal Pookum',
        singer: 'G. V. Prakash Kumar',
        audioSrc: 'assets/GV/pookal-pookum.mp3',
        albumArt: 'assets/GV/download.jpg'
    },
    {
        title: 'Oru Paathi Kadhavu',
        singer: 'G. V. Prakash Kumar',
        audioSrc: 'assets/GV/oru.mp3',
        albumArt: 'assets/GV/kanavu.jfif'
    },
    {
        title: 'En Jeevan',
        singer: 'G. V. Prakash Kumar',
        audioSrc: 'assets/GV/En-Jeevan.mp3',
        albumArt: 'assets/GV/theri.jfif'
    }
    // Add more songs for TMS as needed
];

const kkkSongs = [
    {
        title: 'Uyire Uyire',
        singer: 'A.R Rahman',
        audioSrc: 'assets/AR/Uyire-Uyire.mp3',
        albumArt: 'assets/AR/bombay.jfif'
    },
    {
        title: 'Enna Solla Pogirai',
        singer: 'A.R Rahman',
        audioSrc: 'assets/AR/Enna-Solla-Pogirai.mp3',
        albumArt: 'assets/AR/enna.jfif'
    },
    {
        title: 'Pudhu Vellai Malai',
        singer: 'A.R Rahman',
        audioSrc: 'assets/AR/Pudhu-Vellai-Malai.mp3',
        albumArt: 'assets/AR/pudhu.jfif'
    },
    {
        title: 'Kadhal Rojave',
        singer: 'A.R Rahman',
        audioSrc: 'assets/AR/Kadhal-Rojave.mp3',
        albumArt: 'assets/AR/roja.jfif'
    },
    {
        title: 'Nenachapadi',
        singer: 'A.R Rahman',
        audioSrc: 'assets/AR/Nenachapadi.mp3',
        albumArt: 'assets/AR/kadhal.jfif' 
    }
    // Add more songs for KKK as needed
];

let currentSongIndex = 0;
let currentPlaylist = anirudhSongs; // Default to Anirudh's songs
const audio = document.querySelector('#audio');
const playPauseBtn = document.querySelector('#play-pause');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const slider = document.querySelector('#slider');
const songTitle = document.querySelector('.song .title');
const singerName = document.querySelector('.song .singer');
const albumArt = document.querySelector('.album-art img');
const anirudhBtn = document.querySelector('#anirudhBtn');
const harishBtn = document.querySelector('#harishBtn');
const tmsBtn = document.querySelector('#tmsBtn');
const kkkBtn = document.querySelector('#kkkBtn');

// Function to load a song from the current playlist
function loadSong() {
    const song = currentPlaylist[currentSongIndex];
    audio.src = song.audioSrc;
    songTitle.textContent = song.title;
    singerName.textContent = song.singer;
    albumArt.src = song.albumArt;
}

// Function to play the current song
function playSong() {
    audio.play();
    togglePlayPauseBtn();
}

// Event listener for Anirudh button
anirudhBtn.addEventListener('click', () => {
    currentPlaylist = anirudhSongs;
    loadSong();
    playSong();
});

// Event listener for Harish button
harishBtn.addEventListener('click', () => {
    currentPlaylist = harishSongs;
    loadSong();
    playSong();
});

// Event listener for TMS button
tmsBtn.addEventListener('click', () => {
    currentPlaylist = tmsSongs;
    loadSong();
    playSong();
});

// Event listener for KKK button
kkkBtn.addEventListener('click', () => {
    currentPlaylist = kkkSongs;
    loadSong();
    playSong();
});

// Event listener for Play/Pause button
playPauseBtn.addEventListener('click', () => {
    togglePlayPause();
});

// Event listener for Next button
nextBtn.addEventListener('click', () => {
    nextSong();
});

// Event listener for Previous button
prevBtn.addEventListener('click', () => {
    prevSong();
});

// Event listener for slider input
slider.addEventListener('input', () => {
    seek();
});

// Update playback progress and slider position
audio.addEventListener('timeupdate', () => {
    updateSlider();
});

// Handle end of song playback
audio.addEventListener('ended', () => {
    handleSongEnd();
});

// Function to toggle play/pause state
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    togglePlayPauseBtn();
}

// Function to update play/pause button UI
function togglePlayPauseBtn() {
    const isPlaying = !audio.paused;
    playPauseBtn.classList.toggle('play', !isPlaying);
    playPauseBtn.classList.toggle('pause', isPlaying);
}

// Function to update slider position based on playback progress
function updateSlider() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    slider.value = progress;
}

// Function to seek to a specific position in the song
function seek() {
    const seekTime = (slider.value * audio.duration) / 100;
    audio.currentTime = seekTime;
}

// Function to play the next song in the playlist
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
    loadSong();
    playSong();
}

// Function to play the previous song in the playlist
function prevSong() {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
    } else {
        currentSongIndex = (currentSongIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
    }
    loadSong();
    playSong();
}

// Function to handle end of song playback
function handleSongEnd() {
    nextSong();
}

// Initialize with Anirudh's songs
loadSong();
playSong();
