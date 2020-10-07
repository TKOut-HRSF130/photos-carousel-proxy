const express = require('express');
const path = require('path');
const http = require('http');
const axios = require('axios');

const port = 3004;
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

// ------------------ Bookings ---------------------------
app.get('/api/bookings/restaurantName/:id', (req, res) => {
  axios.get(`http//localhost:3000/bookings/restaurantName/${req.params.id}?restaurantId=${req.params.id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

app.get('/api/bookings/:id', (req, res) => {
  axios.get(`http://localhost:3000/api/bookings/${req.params.id}`, {
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
//   axios.post(`http://localhost:3000/api/bookings/${req.aparams.id}`)
//     .then((response) => {
//       res.status(201).send();
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// });
// bookings post request??

// -------------- Photos --------------------------------
app.get('/api/restaurants/photos/:id', (req, res) => {
  axios.get(`http://localhost:3003/api/restaurants/photos/${req.params.id}`)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
})

// --------------- POPULAR DISHES -----------------------------------
app.get('/api/dishes/restaurant/:id', (req, res) => {
  axios.get(`http://localhost:3001/api/dishes/restaurant/${req.params.id}`)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
})

// ------------------ Reviews ----------------------
app.get('/api/restaurants/:id', (req, res) => {
  axios.get(`http://localhost:3002/api/restaurants/${req.params.id}`)
    .then((response) => {
      // console.log('Response Data: ', response.data);
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
})
app.get('/api/review_list/:id', (req, res) => {
  axios.get(`http://localhost:3002/api/review_list/${req.params.id}`)
    .then((response) => {
      // console.log('Response Data: ', response.data);
      res.status(200).send(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
})
app.get('/api/users', (req, res) => {
  axios.get(`http://localhost:3002/api/users`)
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
