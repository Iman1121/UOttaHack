const express = require("express");
const { auth } = require('express-openid-connect');

require("dotenv").config();


const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL
};
console.log("PORT:", process.env.BASEURL);
const user = require("./routes/user");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(auth(config));

app.use("/api/users", user);
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  // res.json({ mssg: "works" });
});

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
