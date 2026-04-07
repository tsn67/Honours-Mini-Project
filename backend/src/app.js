const express = require("express");
const cors = require("cors");
require("dotenv").config();

const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "2mb" }));

app.use("/api", aiRoutes);

app.get("/", (req, res) => {
    res.send("Local AI Backend Running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
