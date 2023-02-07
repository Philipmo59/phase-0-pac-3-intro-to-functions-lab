const greeting = "hello";

function shout(string) {
    return string.toUpperCase();
  }
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(string.toUpperCase()); 
}
function logWhisper(string){
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string){
    if (string =="Let's have dinner together!"){
        return "I would love to!"
    }
    else if (string == greeting){
        return "I can't hear you!"
    }
    else if (string != greeting) {
        return "YES INDEED!"
    }

}
shout(hello);
logShout(hello);
logWhisper(hello);
sayHiToHeadphonedRoommate("hello")