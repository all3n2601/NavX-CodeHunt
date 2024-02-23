const express = require('express');
const app = express();
const connectToDatabase = require('./db/mongoose');
const corsMiddleware = require("./middlewares/cors");
const errorHandlerMiddleware = require("./middlewares/errorHandler");
const bodyParser = require("body-parser");
const authController = require('./controllers/authController');
const bookingController = require('./controllers/bookingController');
const contactController = require('./controllers/contactController');
const passengerController = require('./controllers/passengerController');

const router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(corsMiddleware);


app.use("/auth",authController);
app.use("/booking",bookingController);
app.use("/contact",contactController);
app.use("/passenger",passengerController);

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