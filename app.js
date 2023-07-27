const adviceId = document.getElementById("advice-number");
const adviceGenerated = document.getElementById("advice-generated");
const diceBtn = document.getElementById("dice-btn");

async function generate() {
  const res = await fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 300) + 1}`);
  const data = await res.json();
  console.log(data);
  adviceId.innerText = "A D V I S E # " + data.slip.id;
  adviceGenerated.innerText = '"' + data.slip.advice + '"';
}
document.querySelector('button').onclick = () => {
  generate();
};