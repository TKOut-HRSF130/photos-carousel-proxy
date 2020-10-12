const express = require('express');
const path = require('path');
const http = require('http');
const axios = require('axios');

const port = 3004;
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

// ------------------ Bookings ---------------------------
app.get('/api/bookings/restaurantName/:id', (req, res) => {
  axios.get(`http://54.176.143.236/bookings/restaurantName/${req.params.id}?restaurantId=${req.params.id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

app.get('/api/bookings/:id', (req, res) => {
  axios.get(`http://54.176.143.236/api/bookings/${req.params.id}`, {
    params: req.query
  })
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
});

// app.post('/api/bookings/:id', (req, res) => {
//   const reservation = req.body;
//   reservation.restaurantId = req.params.restaurantId;
//   axios.post(`http://54.176.143.236/api/bookings/${req.aparams.id}`, reservation)
//     .then((response) => {
//       res.status(201).send();
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// });

// -------------- Photos --------------------------------
app.get('/api/restaurants/photos/:id', (req, res) => {
  axios.get(`http://34.201.104.34/api/restaurants/photos/${req.params.id}`)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
})

// --------------- POPULAR DISHES -----------------------------------
app.get('/api/dishes/restaurant/:id', (req, res) => {
  axios.get(`http://54.67.110.162/api/dishes/restaurant/${req.params.id}`)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
})

// ------------------ Reviews ----------------------
app.get('/api/restaurants/:id', (req, res) => {
  axios.get(`http://13.52.220.189/api/restaurants/${req.params.id}`)
    .then((response) => {
      // console.log('Response Data: ', response.data);
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
})
app.get('/api/review_list/:id', (req, res) => {
  axios.get(`http://13.52.220.189/api/review_list/${req.params.id}`)
    .then((response) => {
      // console.log('Response Data: ', response.data);
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
})
app.get('/api/users', (req, res) => {
  axios.get(`http://13.52.220.189/api/users`)
    .then((response) => {
      // console.log('Response Data: ', response.data);
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
})


app.listen(port, () => {
  console.log(`Proxy Server is listening on http://localhost:${port}`);
});
