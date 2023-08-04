import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ejs from "ejs";
import routes from "./routes";

class app {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(express.json());
    this.server.use(bodyParser.json());
    this.server.set("view engine", "ejs");
    this.server.set("view", __dirname + "/view");
    this.server.use(
      express.static(__dirname + "/public", {
        setHeaders: function (res, path, stat) {
          if (path.endsWith(".css")) {
            res.set("Content-Type", "text/css");
          } else if (path.endsWith(".js")) {
            res.set("Content-Type", "application/javascript");
          }
        },
      }),
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new app().server;
