const express = require("express");
const { ExpressPeerServer } = require("peer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "turbo-isla.html"));
});

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`Racing-Rivals server running on port ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  path: "/peerjs"
});

app.use("/peerjs", peerServer);

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    service: "Racing-Rivals"
  });
});
