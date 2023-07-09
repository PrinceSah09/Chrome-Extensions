function resetBorder() {
  const temp = document.getElementById("btn");
  temp.style.transition = "0.7s";
  temp.style.fontSize = "13px";
  temp.style.borderWidth = "1px";
}
function borderBold() {
  const temp = document.getElementById("btn");
  temp.style.borderWidth = "5px";
  temp.style.transition = "0.7s";
  temp.style.fontSize = "12px";

  setTimeout(function () {
    resetBorder();
  }, 1000);
  
}

function size(str) {
  let cnt = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") cnt++;
  }
  return cnt + 1;
}

function run() {
  fetch("https://icanhazdadjoke.com/slack")
    .then((data) => data.json())
    .then((jokeData) => {
      const jokeText = jokeData.attachments[0].text;
      const HtmlContent = document.getElementById("htmlElement");
      if (size(jokeText) > 20) {
        HtmlContent.innerHTML =
          " I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take.";
        return;
      } else {
        HtmlContent.innerHTML = jokeText;
      }
    });
    
}

run();
const temp = document.getElementById("btn");
temp.addEventListener("click", run);
temp.addEventListener("click", borderBold);
