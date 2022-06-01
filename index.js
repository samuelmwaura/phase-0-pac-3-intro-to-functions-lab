function shout(word){
return word.toUpperCase();
}

function whisper(word){
    return word.toLowerCase();
};

function logShout(word){
  console.log(`${word.toUpperCase()}`);
}
function logWhisper(word){
  console.log(`${word.toLowerCase()}`);
}

function sayHiToHeadphonedRoommate(sentence){
    switch(sentence){
       case sentence.toUpperCase():
           return "YES INDEED!";
       case sentence.toLowerCase():
           return "I can't hear you!";
       case "Let's have dinner together!":
           return "I would love to!"
    }
}
console.log(shout('mwaura'));//because it has a return value, It will log the return value of the function.
console.log(whisper('MWAURA'));