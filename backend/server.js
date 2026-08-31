const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const connectDB = require("./config/db");


dotenv.config();

connectDB();

const app = express();

app.use(cors(
  {
    origin: [
      "http://localhost:5173",
      "https://YOUR-FRONTEND.vercel.app",
    ],
    credentials: true,
  }
));

app.use(express.json({
  limit: "10mb"
}));

app.use(express.urlencoded({
  extended: true,
  limit: "10mb"
}));

// Uploaded PDFs public access
app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/documents", require("./routes/documentRoutes"));

app.get("/", (req, res) => {
  res.json({
    message: "Surendra Portfolio API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`);
});