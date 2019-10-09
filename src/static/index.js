// eslint-disable-next-line no-undef
const socket = io("/");
//socket.on("hello", () => console.log("Somebody said hello"));

function sendMessage(message) {
  socket.emit("newMessage", { message });
  console.log(`You: ${message}`);
}

function setNickName(nickname) {
  socket.emit("setNickName", { nickname });
}

function handleMessageNotif(data) {
  const { message, nickname } = data;
  console.log(`${nickname}: ${message}`);
}
socket.on("messageNotif", handleMessageNotif);
