//speech recognition variable
let speechRecognition = window.webkitSpeechRecognition

let recognition = new SpeechRecognition()
// retrieve elements by id from html
let textbox = $("#textbox")

let instructions = $("#instructions")

let content = ''

recognition.continuous = true
// recognition is started

recognition.onstart = function(){
    instructions.text("Voice Recognition is on")
}
$("#chkEnglish").click(function(event){
    if (content.length){
        content += ''
        document.querySelector('#chkEnglish').checked = true;
        const model = new vosk.Model('samples/vosk-model-en');
    }
    recognition.start()
})
