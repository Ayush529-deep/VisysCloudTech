import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import contactRoutes from "./routes/contactRoutes"
import contactRoutes from "./routes/contactRoutes.js";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("✅ MongoDB Connected"))
//   .catch((err) => console.log("❌ DB Error:", err));



let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.log("❌ DB Error:", err);
  }
};

connectDB();



app.get("/", (req, res) => {
  res.send("API Running...");
});

app.use("/api/contact", contactRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));

export default app;
