import mongoose from 'mongoose'
import { db_config } from './config'
const express = require('express')
const app = express();
const users = require("./routes/api/users")
// Connect Database

const connectDB = async () => {
  try {
    await mongoose.connect(db_config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

connectDB()

app.get("/", (req, res) => res.send("API Running"));

//Init middleware
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/users", users);
// app.use("/api/auth", require("./routes/api/auth"));
// app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000; // look for PORT environment, locally PORT 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));