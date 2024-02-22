const express = require('express');
const app = express();
const connectToDatabase = require('./db/mongoose');
const corsMiddleware = require("./middlewares/cors");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const bodyParser = require("body-parser");
const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(corsMiddleware);




app.use(errorHandlerMiddleware);

(async () => {
    try {
      await connectToDatabase();
      const port = process.env.PORT || 4451;
      const server = app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
      });
    } catch (error) {
      console.error("Failed to start the server:", error.message);
    }
  })();