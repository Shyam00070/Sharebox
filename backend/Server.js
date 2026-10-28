
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const dns = require("node:dns");
const Item = require("./models/Item");


dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());




app.get("/", (req, res) => {
  res.send("ShareBox API is running");
});


app.post("/api/items", async (req, res) => {
  try {
    const {
      itemName,
      itemDescription,
      sharingType,
      itemImage,
      itemLocation,
    } = req.body;

    const newItem = new Item({
      itemName,
      itemDescription,
      sharingType,
      itemImage,
      itemLocation,
    });

    const savedItem = await newItem.save();

    res.status(201).json({
      message: "Item created successfully",
      item: savedItem,
    });
  } catch (error) {
    console.error("Error creating item:", error.message);

    res.status(500).json({
      message: "Failed to create item",
      error: error.message,
    });
  }
});


app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Failed to fetch items" });
  }
});

app.get("/api/items/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    console.error("Error fetching item:", error);
    res.status(500).json({ message: "Failed to fetch item" });
  }
});


require("dotenv").config();


const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`ShareBox server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

startServer();
