const submitbtn = document.querySelector(".submit_btn");
const chatMessageInput = document.getElementById("chat_MessageInput");
let chatlist = [];

submitbtn.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  let inputresult = chatMessageInput.value;
  chatlist.push(inputresult);
  console.log(chatlist);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < chatlist.length; i++) {
    resultHTML =
      `<div class="chat">
            ${chatlist[i]}
          </div>` + resultHTML;
  }
  document.querySelector(".chat_area").innerHTML = resultHTML;
}
