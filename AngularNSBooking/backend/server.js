import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Event from './models/Event';

const app = express();
const router = express.Router();
const connectionString = "Hidden";

mongoose.connect(connectionString);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use(cors({
    'Access-Control-Allow-Origin': '*'
}));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

router.route('/events/:id').get((req, res) => {
    Event.findOne({ 'id': req.body.id }, (err, event) => {
        if(err) console.log(err);
        else res.json(event);
    });
});

router.route('/events').get((req, res) => {
    Event.find((err, events) => {
        if(err)
            console.log(err);
        else
            res.json(events);
    });
});

router.route('/events/add').post((req, res) =>{
    let event = new Event(req.body);
    console.log(req.body);
    event.save().then(event => {
        res.status(200).json();
    })
    .catch(err => {
        res.status(400).send('Failed to create new record');
    });
});

app.use('/', router);
app.listen(3000, () => console.log('Express server running on port 3000'));