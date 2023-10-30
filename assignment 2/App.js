const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/product'); 

const app = express();
const port = process.env.PORT || 3000; 


app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.send('{"Message": "Welcome to dressstore Application"}');
});


const connectionString = 'mongodb+srv://amutenhw:Mickeyangelo01@cluster0.we6pfe5.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});


const productRoutes = require('./routes/productRoutes');


app.use('/api', productRoutes); 


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
