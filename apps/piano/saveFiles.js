function LoadFilePrompt() {
    $("#file-upload").click();
}
var TryLoadFile = () => {
    SavedData.RetrieveFromFile();
}

var SavedData = {
    RetrieveFromFile: function () {
        let file = $("#file-upload").prop("files")[0],
            reader = new FileReader();

        reader.onload = function (e) {
            playSongFromFile(JSON.parse(reader.result))
        };

        reader.readAsText(file);
    }
}

document.getElementById("playButton").onclick = () => {
    LoadFilePrompt()
}
