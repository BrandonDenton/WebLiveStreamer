var constraints = {audio: true, video: {
	mandatory: {
	    minWidth: 1280,
		minHeight: 720
	},
	optional: [
	    {frameRate: 60}
	]
}

function successCallback(stream) {
    var video = document.querySelector("video");
	video.src = window.URL.createObjectURL(stream);
}

function errorCallback(error) {
	console.log("navigator.getUserMedia error: ", error)
}

navigator.getUserMedia(constraints, succsssCallback, errorCallback)