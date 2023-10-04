const footerbtn = document.querySelector(".footer_btn");
const chatMessageInput = document.getElementById("chat_MessageInput");
let chatlist = [];

footerbtn.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  let inputresult = chatMessageInput.value;
  chatlist.push(inputresult);
  console.log(chatlist);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < chatlist.length; i++) {
    resultHTML += `<div class="chat_room">
    <div class="chat_task">
      <div>${chatlist[i]}</div>
    </div>
  </div>`;
  }
  document.querySelector(".chat_border").innerHTML = resultHTML;
}
