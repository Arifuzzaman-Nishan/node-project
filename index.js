const express = require('express'); //for import
const cors = require('cors');
const bodyParser = require('body-parser');



const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ['nishan','shathi','anvi','babusona'];

app.get('/',(req,res) => {
    res.send("Arifuzzaman nishan");
})

app.get('/users/:id',(req,res) => {
    const id = req.params.id;
    // console.log(req.query);
    const name = users[id];
    res.send({id,name});
})

app.post('/addUser',(req,res) => {
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(3000, () => console.log('Listening to port 3000'));