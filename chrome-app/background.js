const iamges = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
const randomImage = iamges[Math.floor(Math.random() * iamges.length)];

const background = document.createElement("img");
background.src = `img/${randomImage}`;
document.body.appendChild(background);
