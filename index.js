const path = require('path');
require('dotenv').config()

const express = require('express');
const studentRoute = require('./routes/student')

const sequelize = require('./utils/database').sequelize

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json()) 

// API Routes 
app.use(studentRoute)

app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

//  Database
sequelize.sync().then(result => {
    console.log("[+] >> DATABASE Connected");
}).catch(err => {
    console.log(err);
})

app.listen(PORT, () => console.log(`[-] >> Listening on PORT ${PORT}`));