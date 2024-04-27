const express = require('express');
const app = express();
const port = process.env.PORT || 8082;
const exams = require("./routes/api/exams");
const users = require('./routes/api/users');

const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors({origin: true, credentials: true}));
app.use(express.json({etended: false}));
app.use("/api/exams", exams)
app.use('/api/users', users);
const conn_str = 'mongodb+srv://taj30846:kYMxLlwo4DGJALVW@knowflow.sbfx6bw.mongodb.net/'
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log(`MongoDB Connection Suceeded...`);
})
.catch(err => {
    console.log(`Error in DB Connection ${err}`);
});


//PASSWORD FOR CLUSTER: DO NOT DELETE
//kYMxLlwo4DGJALVW