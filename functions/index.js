const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");



//API

// ~ App config
const app = express();

// ~ Middlewares
app.use(cors({  origin: true }));
app.use(express.json());

// ~ API routes
app.get("/", (req, res) => 
res.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment request Recieved BOOM!!! for this amount >>> ", total);


    const stripe = require("stripe")('sk_test_51LqHQcSAVNo5nx3BaP7pQKa1k5ghi7i6JhW98gA6pCDkpBfLOeZlPz1SdfSCCYPItMZYiCUOpi74d6UxKBFlQrgm00fifoebMP')

    (async function(){

        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, //subunits of the currency 
            currency: "usd",
        });


        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        })
    })
})

// ~ Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-e34cd/us-central1/api