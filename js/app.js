let cards = document.querySelectorAll(".card");
let pic = 0;
let score = 0

for(index = 0; index < cards.length; index++){
  cards[index].addEventListener("click", (e)=>{
    if(!e.target.className.includes("match") && !e.target.className.includes("active")){
      if(pic === 0){
        e.target.classList.toggle("active");
        pic = e.target;
      } else if(pic.childNodes[1].src === e.target.childNodes[1].src){
        e.target.classList.add("active");
        pic.classList.add("match");
        e.target.classList.add("match");
        pic = 0;
        if(score < 5){
          score++
          document.querySelector("#score").innerText = score
        } else{
          score++
          document.querySelector("#score").innerText = score
          confetti.start()
          sleep(10000).then(() => { 
            nytSpil()
          });
        }
      } else{
        e.target.classList.add("active");
        sleep(1500).then(() => { 
          e.target.classList.remove("active");
          pic.classList.remove("active");
          pic = 0;
        });
      }
    } else{
      console.log("fuck yeah")
    }
  })
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function nytSpil(){
  pic = 0;
  score = 0
  shuffle(arr);
  confetti.stop()
  document.querySelector("#score").innerText = score
  for(index1 = 0; index1 < cards.length; index1++){
    cards[index1].classList.remove("active");
    cards[index1].classList.remove("match");
  }
}
document.querySelector("button").addEventListener("click", ()=>{
  nytSpil()
})

function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  for(index2 = 0; index2 < arr.length; index2++){
    cards[index2].childNodes[1].src = arr[index2]
  }
}

let arr = [
  "https://picsum.photos/seed/memory_1/300/300",
  "https://picsum.photos/seed/memory_2/300/300",
  "https://picsum.photos/seed/memory_3/300/300",
  "https://picsum.photos/seed/memory_4/300/300",
  "https://picsum.photos/seed/memory_5/300/300",
  "https://picsum.photos/seed/memory_6/300/300",
  "https://picsum.photos/seed/memory_1/300/300",
  "https://picsum.photos/seed/memory_2/300/300",
  "https://picsum.photos/seed/memory_3/300/300",
  "https://picsum.photos/seed/memory_4/300/300",
  "https://picsum.photos/seed/memory_5/300/300",
  "https://picsum.photos/seed/memory_6/300/300",
];