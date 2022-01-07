// import { stringify } from "querystring";

// object that stores the text, source for every card.
const word_dict = {
    ear: {text: "This is the Abyss card", source: "https://readwords.s3.us-west-1.amazonaws.com/ear.png"}
  , eye:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/eye.png"}
  , knee:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/knee.png"}
  , leg:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/leg.png"}
  , shoulder:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/shoulder.png"}
  , bat:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/bat.png"}
  , car:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/car.png"}
  , cat:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/cat.png"}
  , hand:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/hand.png"}
  , house:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/house.png"}
  , nose:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/nose.png"}
  , toes:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/toes.png"}
  , star:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/star.png"}
  , rat:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/rat.png"}
  , hat:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/hat.png"}
  , jar:  {text: "Test", source: "https://readwords.s3.us-west-1.amazonaws.com/jar.png"}
}

// let words_json = JSON.stringify(word_dict)

// console.log(words_json)

const word_anim_dict = {0:"showup1 2s 1",
                        1:"showup2 2s 1"}

const img_anim_dict = {0:"showup1 2s 1",
                       1:"showup2 2s 1"}

// const word_class_dict = {0:"showup1",
//                          1:"showup2"}

// const img_class_dict = {0:"showup1;",
//                         1:"showup2;"}

// /* @keyframes | duration | easing-function | delay |iteration-count | direction | fill-mode 
// | play-state | nameanimation: 3s ease-in 1s 2 reverse both paused slidein;

let i = 0; // Iterator for word_dict
let j = 0; // Iterator for anim_dict



function showWord() {
    let wordDiv = document.getElementById("wordDiv")
    let cardDiv = document.getElementById("cardDiv");
    let wordlkp = Object.keys(word_dict)[i];
    // let img = document.getElementById("cardImg");

    cardDiv.innerHTML = ""

    wordDiv.innerText = wordlkp;
    // img.style.opacity = "0";

    // (async () => {
    //     img.src = ''
    //     await img.decode();
    //     // img is ready to use
    //     wordDiv.innerText = lkp;    
    //   })();    

    wordDiv.style.animation = word_anim_dict[j];
    setTimeout(showImage, 3000);
} 

function showImage() {
    let cardDiv = document.getElementById("cardDiv");
    let lkp = Object.keys(word_dict)[i];
    let imgURL = word_dict[lkp].source

    cardDiv.innerHTML = `<img id="cardImg" src=${imgURL}><img>`

    let img = document.getElementById("cardImg")    
    // img.style.opacity = "1";

    img.style.animation = img_anim_dict[j]
    // if (img.complete) {img.style.animation = img_anim_dict[j]};
    if (Object.keys(word_dict).length > i + 1) {i++} else {i = 0};
    if (Object.keys(word_anim_dict).length > j + 1) {j++} else {j = 0};
}
