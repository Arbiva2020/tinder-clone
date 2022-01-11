import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Cards from "./dbCards.js";


//App config
     //creating an instance:
const app = express();
    //the port we listen to:
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://arbiva:Adi101010@cluster0.brstm.mongodb.net/tinderdb?retryWrites=true&w=majority'


//Middleware
app.use(express.json());
app.use(Cors());

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true,
});


//API Endpoints
app.get('/', (req, res) => res.status(200).send('hello Adi'));


//defining an endpoint: '/tinder/cards' in post request:
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
//the db structure:
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});

//endpoint that downloads the data from the db:
app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});

//Listeners
app.listen(port, () => console.log(`listening on localhost: ${port}`));