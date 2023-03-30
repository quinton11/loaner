import Server from "../server";

const createServer = (test: boolean) => {
  const server = new Server(test);
  console.log("In index.ts");

  return server.getApp();
};

export default createServer;
