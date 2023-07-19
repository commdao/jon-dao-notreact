let tracks = {
    1: {
        path: 'media/tracks/1 - Melty Blood Basilica.mp3',
        duration: '3:08',
        name: 'Melty Blood Basilica [Type B: 1-2]'
    },
    2: {
        path:'media/tracks/2 - Private Room.m4a',
        duration: '3:19',
        name: 'Private Room in the Velvet Room'
    },
    3: {
        path:'media/tracks/3 - Tie a Cherry.m4a',
        duration:'3:10',
        name:'CL - Tie a Cherry (BlackJackJonny Remix)'
    },
    4: {
        path:'media/tracks/4 - Garibaldi Temple Remix.m4a',
        duration:'1:57',
        name: 'Garibaldi Temple Remix'
    },
    5: {
        path:'media/tracks/5 - Horny Chiptune.m4a',
        duration:'2:20',
        name:"Mousse T vs Hot'n'Juicy - Horny (Chiptune Remix)"
    },
    6: {
        path:'media/tracks/6 - Winter Sonata.m4a',
        duration:'4:55',
        name:'Winter Sonata'
    },
    7: {
        path:'media/tracks/7 - Tulibu Dibu Douchu.m4a',
        duration:'3:11',
        name:'Tulibu Dibu Douchu'
    },
    8: {
        path:'media/tracks/8 - HBV.mp3',
        duration:'1:02',
        name:'HBV'
    }, 
};

const currentTrackName = document.getElementById('currentTrackName');
const audioPlayer = new Audio();
function playTrack(trackPath) {
    audioPlayer.src = trackPath;
    audioPlayer.play();
    currentTrackName.textContent = tracks[currentTrackIndex + 1].name;
}

const playButton = document.getElementById('playIcon');
playButton.addEventListener('click', togglePlay);

function togglePlay() {
    console.log('working')
    if (audioPlayer.paused) {
        audioPlayer.play(); // Play the audio
        playButton.innerHTML = '<i class="fa fa-pause fa-lg" aria-hidden="true"></i>'; // Update the play icon to pause icon
    } else {
        audioPlayer.pause(); // Pause the audio
        playButton.innerHTML = '<i class="fa fa-play fa-lg" aria-hidden="true"></i>'; // Update the pause icon to play icon
    }
}

const nextButton = document.getElementById('nextIcon');
const prevButton = document.getElementById('prevIcon');
let currentTrackIndex = 0;

nextButton.addEventListener('click', playNextTrack);
prevButton.addEventListener('click', playPreviousTrack);

function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % Object.keys(tracks).length;
    const nextTrackPath = tracks[currentTrackIndex + 1];
    playTrack(nextTrackPath.path);
}

function playPreviousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + Object.keys(tracks).length) % Object.keys(tracks).length;
    const previousTrackPath = tracks[currentTrackIndex + 1];
    playTrack(previousTrackPath.path);
}

const progressBar = document.getElementById('progress-bar');
const progressBarContainer = document.querySelector('.progress-bar-container');
const currentTimeDisplay = document.querySelector('.current-time');
const totalDurationDisplay = document.querySelector('.total-duration');

audioPlayer.addEventListener('timeupdate', updateProgressBar);

function updateProgressBar() {
    const currentTime = audioPlayer.currentTime;
    const currentTrack = tracks[currentTrackIndex + 1];
    if (currentTrack) {
        const duration = currentTrack.duration;
        const progressPercentage = (currentTime / convertTimeToSeconds(duration)) * 100;

        progressBar.style.width = `${progressPercentage}%`;
        currentTimeDisplay.textContent = formatTime(currentTime);
        totalDurationDisplay.textContent = duration;
        currentTrackName.textcontent = currentTrack.name;
    }
}

function convertTimeToSeconds(time) {
    const timeParts = time.split(':');
    const minutes = parseInt(timeParts[0]);
    const seconds = parseInt(timeParts[1]);
    return minutes * 60 + seconds;
  }

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}