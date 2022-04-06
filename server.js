const express = require("express"); //import express
const mongoose = require("mongoose");
const dotenv = require("dotenv"); //environmental variables
const cors = require("cors"); //middleware
const bodyParser = require("body-parser");


//import APIs
// const projectAPI = require('./src/apis/nosql/project.api');
// const userTypeAPI = require("./src/apis/sql/userType.api");
// const userRoleAPI = require("./src/apis/sql/userRole.api");
const userAPI = require("./src/apis/user.api");
const taskAPI = require("./src/apis/task.api");
// const tenantAPI = require("./src/apis/sql/tenant.api");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());


const db = require("./src/models");
// db.sequelize.sync({ force: true }).then(() => {console.log("Drop and re-sync db.");});

//port no for run backend server
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

//connect to database
mongoose.connect(
  MONGODB_URI,
  {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  },
  (error) => {
    if (error) {
      console.log("Database Error: ", error.message);
    }
  }
);

//open connection
mongoose.connection.once("open", () => {
  console.log("Database Synced");
});

//root route
app.route("/").get((req, res) => {
  res.send("sequelize Test project");
});

//register router - CHANGEABLE
app.use('/user', userAPI());
app.use('/task', taskAPI());
// app.use("/usertype", userTypeAPI());
// app.use("/userrole", userRoleAPI());
// app.use("/user", userAPI());
// app.use("/tenant", tenantAPI());



app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});
