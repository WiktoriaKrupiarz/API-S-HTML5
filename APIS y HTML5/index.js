addEventListener('load', main, false)

var play = document.getElementById('play');
var pause = document.getElementById('pause');
var upVolume = document.getElementById('up');
var downVolume = document.getElementById('down');

function main() {
    var videoPlayer = document.getElementById('videoPlayer');
    //var loadingMessage = document.getElementById('loadingMessage');

    //EVENT VIDEO####################################################
    document.getElementById('videoFile').addEventListener('change', function (e) {
        var file = e.target.files[0];
        var videoSource = videoPlayer.querySelector('source');

        if (file) {
            videoSource.src = URL.createObjectURL(file);
            videoPlayer.load();

            //loadingMessage.style.display = 'block';
            alert('Cargando video')

            videoSource.onloadeddata = function () {
                //loadingMessage.style.display = 'none';
                videoPlayer.play();
            };
        } else {
            alert('Por favor, seleccione un archivo de vídeo válido');
        }
    });
}
//BUTTONS#####################################################
play.addEventListener('click', function () {
    videoPlayer.play();
});

pause.addEventListener('click', function () {
    videoPlayer.pause();
});

upVolume.addEventListener('click', function () {
    videoPlayer.volume += 0.1
});

downVolume.addEventListener('click', function () {
    videoPlayer.volume -= 0.1
});