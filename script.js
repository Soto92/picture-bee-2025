const flashcards = [
  {
    "word": "Bird",
    "img": "day1/Bird.png"
  },
  {
    "word": "Black",
    "img": "day1/Black.png"
  },
  {
    "word": "Blue",
    "img": "day1/Blue.png"
  },
  {
    "word": "Brown",
    "img": "day1/Brown.png"
  },
  {
    "word": "Cat",
    "img": "day1/Cat.png"
  },
  {
    "word": "Dog",
    "img": "day1/Dog.png"
  },
  {
    "word": "Eight",
    "img": "day1/Eight.png"
  },
  {
    "word": "Fish",
    "img": "day1/Fish.png"
  },
  {
    "word": "Five",
    "img": "day1/Five.png"
  },
  {
    "word": "Four",
    "img": "day1/Four.png"
  },
  {
    "word": "Green",
    "img": "day1/Green.png"
  },
  {
    "word": "Hen",
    "img": "day1/Hen.png"
  },
  {
    "word": "Nine",
    "img": "day1/Nine.png"
  },
  {
    "word": "One",
    "img": "day1/One.png"
  },
  {
    "word": "Orange",
    "img": "day1/Orange.png"
  },
  {
    "word": "Pink",
    "img": "day1/Pink.png"
  },
  {
    "word": "Purple",
    "img": "day1/Purple.png"
  },
  {
    "word": "Red",
    "img": "day1/Red.png"
  },
  {
    "word": "Seven",
    "img": "day1/Seven.png"
  },
  {
    "word": "Six",
    "img": "day1/Six.png"
  },
  {
    "word": "Ten",
    "img": "day1/Ten.png"
  },
  {
    "word": "Three",
    "img": "day1/Three.png"
  },
  {
    "word": "Two",
    "img": "day1/Two.png"
  },
  {
    "word": "White",
    "img": "day1/White.png"
  },
  {
    "word": "Yellow",
    "img": "day1/Yellow.png"
  }
]

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
