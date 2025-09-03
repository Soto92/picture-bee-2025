const flashcards = [
  {
    word: "Angry",
    img: "assets/Angry.png",
  },
  {
    word: "Apple",
    img: "assets/Apple.png",
  },
  {
    word: "Ball",
    img: "assets/Ball.png",
  },
  {
    word: "Banana",
    img: "assets/Banana.png",
  },
  {
    word: "Bathroom",
    img: "assets/Bathroom.png",
  },
  {
    word: "Bed",
    img: "assets/Bed.png",
  },
  {
    word: "Bedroom",
    img: "assets/Bedroom.png",
  },
  {
    word: "Bird",
    img: "assets/Bird.png",
  },
  {
    word: "Broccoli",
    img: "assets/Broccoli.png",
  },
  {
    word: "Carrot",
    img: "assets/Carrot.png",
  },
  {
    word: "Cat",
    img: "assets/Cat.png",
  },
  {
    word: "Chair",
    img: "assets/Chair.png",
  },
  {
    word: "Dog",
    img: "assets/Dog.png",
  },
  {
    word: "Fish",
    img: "assets/Fish.png",
  },
  {
    word: "Happy",
    img: "assets/Happy.png",
  },
  {
    word: "Hen",
    img: "assets/Hen.png",
  },
  {
    word: "Hungry",
    img: "assets/Hungry.png",
  },
  {
    word: "Pillow",
    img: "assets/Pillow.png",
  },
];

let currentIndex = 0;

const card = document.getElementById("flashcard");
const inner = card.querySelector(".card-inner");
const cardImage = document.getElementById("card-image");
const cardWord = document.getElementById("card-word");
const nextBtn = document.getElementById("nextBtn");

function setCard(i) {
  cardImage.src = flashcards[i].img;
  cardWord.textContent = flashcards[i].word;
}

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

nextBtn.addEventListener("click", () => {
  const proceed = () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    setCard(currentIndex);
  };
  if (card.classList.contains("flipped")) {
    const onEnd = (e) => {
      if (e.propertyName !== "transform") return;
      inner.removeEventListener("transitionend", onEnd);
      proceed();
    };
    inner.addEventListener("transitionend", onEnd);
    card.classList.remove("flipped");
  } else {
    proceed();
  }
});

setCard(currentIndex);
