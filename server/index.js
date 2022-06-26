import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import createPost from './routes/posts.js'
import getPosts from './routes/posts.js';
const PORT = 4000;


const app = express();

// These are the routes for specific tasks.
app.use('/post', createPost )
app.use('/get', getPosts )



// This is because we gonna send some image which may have size bigger than 30mb.
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

const CONNECTION_URL = 'mongodb+srv://dbuser:pyrlkf78b4bwXaCs@memories.cdnmitp.mongodb.net/?retryWrites=true&w=majority'
const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then (() => app.listen(PORT, () => console.log(`Database is connected`)))
    .catch((error) => console.log(error))


app.listen(port, () => {
    console.log(`Port is running at ${port}`);
})