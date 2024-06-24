// const express=require('express');
// const cors=require('cors');
// const mongoose=require('mongoose');

// const app=express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb+srv://ronithroni1234:ftTtRg9GOOTYCOsz@netflix-clone.cbfds2d.mongodb.net/?retryWrites=true&w=majority&appName=netflix-clone",
// {useNewUrlParser:true,useUnifiedTopology:true}
// ) 


// app.listen(5000,console.log("Server Started"))

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://ronithroni1234:ftTtRg9GOOTYCOsz@netflix-clone.cbfds2d.mongodb.net/?retryWrites=true&w=majority&appName=netflix-clone",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((error) => {
  console.error("MongoDB connection error:", error);
});

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});


