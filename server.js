const express = require('express');
const app = express();
const PORT = process.env.PORT || 3832;
require('ejs')
app.set('view engine', 'ejs')
// Middleware
app.use(express.urlencoded({extended: true}));
let uri = "mongodb+srv://Acunetixtech22:Acunetixtech22.@cluster0.3iqnnvw.mongodb.net/revisebackend_db?retryWrites=true&w=majority&appName=Cluster0";
const mongoose = require('mongoose');
const Customer = require('./Models/user.model')
const userRouter = require('./Routes/user.route')
app.use('/user', userRouter)

// const nigerianPresidents = [
//     { name: 'Nnamdi Azikiwe', term: '1963-1966' },
//     { name: 'Major General Johnson Aguiyi-Ironsi', term: '1966' },
//     { name: 'General Yakubu Gowon', term: '1966-1975' }, 
// ]
// const christianSongs = [
//   { title: '10,000 Reasons (Bless the Lord)', artist: 'Matt Redman', link: 'https://www.youtube.com/watch?v=DXDGE_lRI0E' },
//   { title: 'The Blessing', artist: 'Kari Jobe, Cody Carnes & Elevation Worship', link: 'https://www.youtube.com/watch?v=Zp6aygmvzM4' },
//   { title: 'Way Maker', artist: 'Sinach', link: 'https://www.youtube.com/watch?v=n4XWfwLHeLM' },
//   { title: 'Same God', artist: 'Elevation Worship feat. Jonsal Barrientes', link: 'https://www.youtube.com/watch?v=HpNq_jwHdY8' },
//   { title: 'Living Hope', artist: 'Phil Wickham', link: 'https://www.youtube.com/watch?v=9f2FXxDVO6w' }
// ];



// Basic route
// app.get('/', (request, response) => {
//     console.log("Home Route");
//     response.send('Home is accessed!');
// });

// app.get('/users', (req, res) => {
//     console.log("Users accessed");
//     res.send(nigerianPresidents)
// })

// app.get('/songs', (req, res) => {
//     console.log("Song list");
//     res.send(christianSongs)
// })

let allCustomers = [];
// app.get('/html', (req, res) =>{
//     res.sendFile(`${__dirname}/test.html`)
//     console.log(_dirname);
// })





mongoose.connect(uri)
.then(() => {
  console.log("✅ Connected to MongoDB");
})
.catch((err) => {
  console.error("❌ Error connecting to MongoDB:", err);
});
// Start server
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});