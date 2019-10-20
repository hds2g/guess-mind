import events from "./events";

const socketController = socket => {
  //console.log("socketController");
  const broadcast = (event, data) => socket.broadcast.emit(event, data);

  socket.on(events.setNickname, ({ nickname }) => {
    console.log(nickname, " connected");
    broadcast(events.newUser, { nickname });
    socket.nickname = nickname;
  });
  socket.on(events.disconnect, () => {
    broadcast(events.disconnected, { nickname: socket.nickname });
  });
};

export default socketController;
