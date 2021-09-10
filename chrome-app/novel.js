const novels = [
  {
    firstLine: "Call me Ishmael.",
    novel: " Moby-Dick ",
  },
  {
    firstLine:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    novel: "Pride and Prejudice",
  },

  {
    firstLine: "A screaming comes across the sky. ",

    novel: " Gravity's Rainbow",
  },
  {
    firstLine:
      "Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice.",

    novel: "One Hundred Years of Solitude",
  },
  {
    firstLine: "Lolita, light of my life, fire of my loins.",

    novel: "Lolita ",
  },
  {
    firstLine:
      "Happy families are all alike; every unhappy family is unhappy in its own way.",

    novel: "Anna Karenina ",
  },
  {
    firstLine:
      "riverrun, past Eve and Adam's, from swerve of shore to bend of bay, brings us by a commodius vicus of recirculation back to Howth Castle and Environs.",

    novel: " Finnegans Wake",
  },
  {
    firstLine: "I am an invisible man.",

    novel: "Invisible Man ",
  },
  {
    firstLine:
      " You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter.",

    novel: "Adventures of Huckleberry Finn",
  },
  {
    firstLine:
      "Someone must have slandered Josef K., for one morning, without having done anything truly wrong, he was arrested.",

    novel: " The Trial ",
  },
];

const firstLine = document.querySelector("#novel span:first-child");
const novel = document.querySelector("#novel span:last-child");

const randomNovel = novels[Math.floor(Math.random() * novels.length)];

firstLine.innerText = randomNovel.firstLine;
novel.innerText = randomNovel.novel;
