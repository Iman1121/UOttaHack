require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const { auth } = require("express-openid-connect");

//route imports
const user = require("./routes/users");
const message = require("./routes/messages");
const course = require("./routes/courses");
const notes = require("./routes/notes");
const lecture = require("./routes/lectures");
const takes = require("./routes/takes");

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL,
};
console.log("PORT:", process.env.BASEURL);
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(auth(config));

//api routes
app.use("/api/users", user);
app.use("/api/messages", message);
app.use("/api/courses", course);
app.use("/api/notes", notes);
app.use("/api/lectures", lecture);
// app.use("/api/takes", takes);
app.use("/api/pictures", pictures);
// app.use("/api/takes", takes);

//auth
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
