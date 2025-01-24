// const express = require('express')
// const cors = require('cors')
// const cookieParser = require('cookie-parser')
// require('dotenv').config()
// const connectDB = require('./config/db')
// const router = require('./routes')


// const app = express()
// app.use(cors({
//     origin : process.env.FRONTEND_URL,
//     credentials : true
// }))
// app.use(express.json())
// app.use(cookieParser())

// app.use("/api",router)

// const PORT = 8080 || process.env.PORT


// connectDB().then(()=>{
//     app.listen(PORT,()=>{
//         console.log("connnect to DB")
//         console.log("Server is running "+PORT)
//     })
// })

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')

const app = express()

const allowedOrigins = [
    "http://localhost:3000",
    "https://ecommerce-with-payment-gateway-c425.vercel.app"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

app.use(express.json())
app.use(cookieParser())

// Handle preflight requests
app.options('*', cors());

app.use("/api", router)

const PORT = process.env.PORT || 8080

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB")
        console.log("Server is running on port " + PORT)
    })
})
