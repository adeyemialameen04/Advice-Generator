const adviceId = document.getElementById("advice-number");
const adviceGenerated = document.getElementById("advice-generated");
const diceBtn = document.getElementById("dice-btn");

// // const getRandomAdvice = () => {
// //   fetch("https://api.adviceslip.com/advice")
// //     .then(res => res.json())
// //     .then(data => {
// //       console.log(data);
// //       adviceId.textContent = `#${data.slip.id}`;
// //       adviceGenerated.textContent = data.slip.advice;
// //     });
// // };

// // diceBtn.addEventListener("click", () => {
// //   getRandomAdvice();
// // });


// async function getRandomAdvice() {
//   try {
//     const response = await fetch("https://api.adviceslip.com/advice");
//     const data = await response.json();
//     console.log(data);
//     adviceId.textContent = `#${data?.slip?.id}`;
//     adviceGenerated.textContent = data?.slip?.advice;
//   } catch (error) {
//     console.log(error);
//   }
// };

// diceBtn.addEventListener("click", () => {
//   getRandomAdvice();
// });

// const getRandomAdvice = () => {
//   fetch("https://api.adviceslip.com/advice")
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       adviceId.textContent = `#${data.slip.id}`;
//       adviceGenerated.textContent = data.slip.advice;
//     });
// };

// diceBtn.addEventListener("click", () => {
//   getRandomAdvice();
// });


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