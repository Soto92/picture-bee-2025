const flashcards = {
  1: [
    {
      word: "Bird",
      img: "day1/Bird.png",
    },
    {
      word: "Black",
      img: "day1/Black.png",
    },
    {
      word: "Blue",
      img: "day1/Blue.png",
    },
    {
      word: "Brown",
      img: "day1/Brown.png",
    },
    {
      word: "Cat",
      img: "day1/Cat.png",
    },
    {
      word: "Dog",
      img: "day1/Dog.png",
    },
    {
      word: "Eight",
      img: "day1/Eight.png",
    },
    {
      word: "Fish",
      img: "day1/Fish.png",
    },
    {
      word: "Five",
      img: "day1/Five.png",
    },
    {
      word: "Four",
      img: "day1/Four.png",
    },
    {
      word: "Green",
      img: "day1/Green.png",
    },
    {
      word: "Hen",
      img: "day1/Hen.png",
    },
    {
      word: "Nine",
      img: "day1/Nine.png",
    },
    {
      word: "One",
      img: "day1/One.png",
    },
    {
      word: "Orange",
      img: "day1/Orange.png",
    },
    {
      word: "Pink",
      img: "day1/Pink.png",
    },
    {
      word: "Purple",
      img: "day1/Purple.png",
    },
    {
      word: "Red",
      img: "day1/Red.png",
    },
    {
      word: "Seven",
      img: "day1/Seven.png",
    },
    {
      word: "Six",
      img: "day1/Six.png",
    },
    {
      word: "Ten",
      img: "day1/Ten.png",
    },
    {
      word: "Three",
      img: "day1/Three.png",
    },
    {
      word: "Two",
      img: "day1/Two.png",
    },
    {
      word: "White",
      img: "day1/White.png",
    },
    {
      word: "Yellow",
      img: "day1/Yellow.png",
    },
  ],
  2: [
    {
      word: "Angry",
      img: "day2/Angry.png",
    },
    {
      word: "Baby",
      img: "day2/Baby.png",
    },
    {
      word: "Brother",
      img: "day2/Brother.png",
    },
    {
      word: "Circle",
      img: "day2/Circle.png",
    },
    {
      word: "Cloudy",
      img: "day2/Cloudy.png",
    },
    {
      word: "Cooking",
      img: "day2/Cooking.png",
    },
    {
      word: "Dad",
      img: "day2/Dad.png",
    },
    {
      word: "Drinking",
      img: "day2/Drinking.png",
    },
    {
      word: "Grandma",
      img: "day2/Grandma.png",
    },
    {
      word: "Grandpa",
      img: "day2/Grandpa.png",
    },
    {
      word: "Happy",
      img: "day2/Happy.png",
    },
    {
      word: "Hungry",
      img: "day2/Hungry.png",
    },
    {
      word: "Lozenge",
      img: "day2/Lozenge.png",
    },
    {
      word: "Mom",
      img: "day2/Mom.png",
    },
    {
      word: "Rainy",
      img: "day2/Rainy.png",
    },
    {
      word: "Rectangle",
      img: "day2/Rectangle.png",
    },
    {
      word: "Sad",
      img: "day2/Sad.png",
    },
    {
      word: "Scared",
      img: "day2/Scared.png",
    },
    {
      word: "Snowy",
      img: "day2/Snowy.png",
    },
    {
      word: "Square",
      img: "day2/Square.png",
    },
    {
      word: "Sunny",
      img: "day2/Sunny.png",
    },
    {
      word: "Syster",
      img: "day2/Syster.png",
    },
    {
      word: "Triangle",
      img: "day2/Triangle.png",
    },
  ],
  3: [
    {
      word: "Bathroom",
      img: "day3/Bathroom.png",
    },
    {
      word: "Bedroom",
      img: "day3/Bedroom.png",
    },
  ],
  4: [
    {
      word: "Apple",
      img: "day4/Apple.png",
    },
    {
      word: "Ball",
      img: "day4/Ball.png",
    },
    {
      word: "Banana",
      img: "day4/Banana.png",
    },
    {
      word: "Bed",
      img: "day4/Bed.png",
    },
    {
      word: "Broccoli",
      img: "day4/Broccoli.png",
    },
    {
      word: "Carrot",
      img: "day4/Carrot.png",
    },
    {
      word: "Chair",
      img: "day4/Chair.png",
    },
    {
      word: "Eating",
      img: "day4/Eating.png",
    },
    {
      word: "Pillow",
      img: "day4/Pillow.png",
    },
    {
      word: "Resting",
      img: "day4/Resting.png",
    },
    {
      word: "Studyng",
      img: "day4/Studyng.png",
    },
  ],
};

let currentSet = [];
let currentIndex = 0;

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const card = document.getElementById("flashcard");
const inner = card.querySelector(".card-inner");
const cardImage = document.getElementById("card-image");
const cardWord = document.getElementById("card-word");
const nextBtn = document.getElementById("nextBtn");
const homeBtn = document.getElementById("homeBtn");

function setCard(i) {
  cardImage.src = currentSet[i].img;
  cardWord.textContent = currentSet[i].word;
}

function startDay(day) {
  currentSet = flashcards[day];
  currentIndex = 0;
  setCard(currentIndex);
  menu.classList.add("hidden");
  game.classList.remove("hidden");
}

document.querySelectorAll(".day-btn").forEach((btn) => {
  btn.addEventListener("click", () => startDay(btn.dataset.day));
});

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

nextBtn.addEventListener("click", () => {
  const proceed = () => {
    currentIndex = (currentIndex + 1) % currentSet.length;
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

homeBtn.addEventListener("click", () => {
  game.classList.add("hidden");
  menu.classList.remove("hidden");
  card.classList.remove("flipped");
});
