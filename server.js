let express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser')
;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var data = [
    {name: "Darshan", location: "Piscataway"},
    {name: "User2", location: "Location2"},
    {name: "User3", location: "Location3"},
    {name: "User4", location: "Location4"}
];

app.get('/getUsers', function(req, res) {
    res.send(data);
});

app.post('/addUser', function(req, res) {
    if(req.body) {
        data.push(req.body);
        res.send(req.body);
    }
});

app.listen('3001', () => console.log('Server is up'));