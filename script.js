const flashcards = [
  {
    word: "Bird",
    img: "assets/Bird.png",
  },
  {
    word: "Black",
    img: "assets/Black.png",
  },
  {
    word: "Blue",
    img: "assets/Blue.png",
  },
  {
    word: "Brown",
    img: "assets/Brown.png",
  },
  {
    word: "Cat",
    img: "assets/Cat.png",
  },
  {
    word: "Dog",
    img: "assets/Dog.png",
  },
  {
    word: "Eight",
    img: "assets/Eight.png",
  },
  {
    word: "Fish",
    img: "assets/Fish.png",
  },
  {
    word: "Five",
    img: "assets/Five.png",
  },
  {
    word: "Four",
    img: "assets/Four.png",
  },
  {
    word: "Green",
    img: "assets/Green.png",
  },
  {
    word: "Hen",
    img: "assets/Hen.png",
  },
  {
    word: "Nine",
    img: "assets/Nine.png",
  },
  {
    word: "One",
    img: "assets/One.png",
  },
  {
    word: "Orange",
    img: "assets/Orange.png",
  },
  {
    word: "Pink",
    img: "assets/Pink.png",
  },
  {
    word: "Purple",
    img: "assets/Purple.png",
  },
  {
    word: "Red",
    img: "assets/Red.png",
  },
  {
    word: "Seven",
    img: "assets/Seven.png",
  },
  {
    word: "Six",
    img: "assets/Six.png",
  },
  {
    word: "Ten",
    img: "assets/Ten.png",
  },
  {
    word: "Three",
    img: "assets/Three.png",
  },
  {
    word: "Two",
    img: "assets/Two.png",
  },
  {
    word: "White",
    img: "assets/White.png",
  },
  {
    word: "Yellow",
    img: "assets/Yellow.png",
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
