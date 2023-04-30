const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.port || 5000;

const booking = require('./data/booking.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send("Book Now is Running");
})

app.get('/booking', (req, res) => {
    res.send(booking)
})


app.get('/booking/:id', (req, res) => {
    const id = req.params.id;
    if (id === "0") {
      res.send(booking);
    } else {
      const singleBooking = booking.filter((n) => n.id === id);
      res.send(singleBooking);
    }
})

app.listen(port, () => {
    console.log(`Book Api is running on port: ${port}`);
})