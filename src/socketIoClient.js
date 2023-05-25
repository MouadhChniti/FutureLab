const ioClient = require("socket.io-client");
//const dotenv = require("dotenv");

function socketIoClient() {
  try {
    console.log(`socketIoClient.message:>>${`socketIoClient.message`}<<`);
   // dotenv.config();
    const host = `http://code.branper.com:26015/jobs`;
    console.log({ [`socketIoClient.message`]: `host:>>${host}<<` });
    const socket = ioClient(host, {
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      randomizationFactor: 0.5,
      timeout: 20000,
      // transports: ["websocket"],
      // path: "/testme",
      // withCredentials: true,
      // extraHeaders: {
      //   "my-custom-header": "abcd",
      // },
    });

    socket.on("connect", () => {
      console.log({
        [`socketIoClient.message`]: `connect socketId:>>${socket.id}<<`,
      });
    });
    socket.on("disconnect", (reason) => {
      console.log({ [`socketIoClient.message`]: `disconnect`, reason });
    });
    socket.on("error", (error) => {
      console.log({ [`socketIoClient.message`]: `error`, error });
    });

    socket.on("change", (changedDocument) => {
      console.log({ [`socketIoClient.message`]: `change`, changedDocument });
    });

    return socket;
  } catch (error) {
    console.log({ [`socketIoClient.message`]: `Error`, error });
  }
}


export default  socketIoClient;
//
