//DNS CONNECTION FIX
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

//imports
require("dotenv").config();
require("./config/db-connection");
const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3001;

//MIDDLEWARE
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(express.json());
app.use(morgan("dev"));

//router
const authRouter = require("./routes/userRoutes")
app.use("/api/auth", authRouter)

//SERVER
app.listen(PORT, () => {
  console.log(`Server running on http:localhost:${PORT}`);
});
