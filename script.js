const songs = [
    { title: 'Song 1', url: 'https://your-app-name.herokuapp.com/songs/song1.mp3' },
    { title: 'Song 2', url: 'https://your-app-name.herokuapp.com/songs/song2.mp3' },
    { title: 'Song 3', url: 'https://your-app-name.herokuapp.com/songs/song3.mp3' }
];

const songList = document.getElementById('song-list');
songs.forEach(song => {
    const songItem = document.createElement('li');
    songItem.textContent = song.title;
    songItem.addEventListener('click', () => playSong(song.url));
    songList.appendChild(songItem);
});

function playSong(url) {
    const audioPlayer = document.getElementById('audio-player');
    const audioSource = document.getElementById('audio-source');
    audioSource.src = url;
    audioPlayer.load();
    audioPlayer.play();
}
