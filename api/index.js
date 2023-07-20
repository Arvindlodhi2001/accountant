const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const adminRoutes = require('./routes/adminRoutes');
const blogRoutes = require('./routes/blogRoutes');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);
app.use('/api/admin', blogRoutes);

app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/accountant", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
    }
}

const PORT = 4500;

app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
    connectDB();
})