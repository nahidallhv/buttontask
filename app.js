let say = 1;
let azalansay = false;
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (azalansay) {
    btn.textContent = `Click me ${say--}`;
    if (say < 1) {
      azalansay = false;
    }
  } else {
    btn.textContent = `Click me ${say++}`;
    if (say >= 10) {
      azalansay = true;
    }
  }
});
