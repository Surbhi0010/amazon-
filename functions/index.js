const functions = require("firebase-functions");
const Express = require('express')
const cors = require('cors')
const stripe=require('stripe')('sk_test_51KQYEoSJKW02H5dLXKkkPg46ZksXBOiKjmAWuNAjacZvFkXzVyTiMWyFd67DngHKSwNhZv9yyI4mHxVbm8k7EMTD00TQe27uh3')
//API


//API CONFIG
const app= Express();

//API MIDDLEWARE
app.use(cors({origin: true}))
app.use(Express.json());

//API ROUTES
app.get('/', (req, res)=> res.status(200).send('Hello World'));
app.post('/payments/create', async(req,res)=>{
    const total= req.query.total;
    console.log(`Payment Recieved `, total)
    const paymentIntent= await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    })
    res.status(201).send({
        clientSecret:paymentIntent.client_secret
    })
})

//LISTEN COMMA
 exports.api = functions.https.onRequest(app);