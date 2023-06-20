const express = require("express"),
  serveStatic = require("serve-static"),
  history = require("connect-history-api-fallback"),
  port = process.env.PORT || 5000;

const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");

require("dotenv").config();

const app = express();

if (process.env.ENV !== "prod") {
  let corsOptions = {
    origin: ["http://localhost:8080"],
    credentials: true,
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
} else {
  let corsOptions = {
    origin: ["https://shielded-dusk-66247.herokuapp.com/"],
    credentials: true,
    optionsSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
}

app.use(compression());
app.use(helmet());
app.use(history());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(serveStatic(__dirname + "/dist/spa"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
