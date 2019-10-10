import { handleMessageNotif } from "./chat";

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

socket.on("messageNotif", handleMessageNotif);
