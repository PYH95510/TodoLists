const images = ["0.jpeg",
"1.jpeg",
"2.jpeg",
"3.jpeg",
"4.jpeg",
"5.jpeg",
"6.jpeg"];

const imgChoose = images[Math.floor(Math.random()*(images.length))];
console.log(imgChoose);

const bgImage = document.createElement("img");

bgImage.src = `img/${imgChoose}`;

document.body.appendChild(bgImage);
