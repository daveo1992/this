const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Port = 4000;
const cors =require('cors');
const mongoose = require('mongoose');


const mongoDB = 'mongodb+srv://dave1:dave1@cluster0-rivup.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser:true});
const Schema = mongoose.Schema;

const teamSchema =new Schema({
    name:String,
    points:String,
    stadium:String
});


const TeamModel = mongoose.model('team',teamSchema);

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use(function(req,res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acess-Control-Allow-Methods", "Get, Post, Put, Delete, Options");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-requested-With, Content-Type, Accept");
    next();
});


app.get('/api/teams', (req,res,next)=>{
    console.log("get request")
    TeamModel.find((err,data)=>{
        res.json({teams:data})
    })
})

app.delete('/api/teams/:id', (req,res)=>{
    console.log("get request")
    TeamModel.deleteOne({_id:req.params.id},(error,data)=>{
        if(error)
        res.json(error);
        res.json(data);
    })
})

app.post('/api/teams',(req,res)=>{
    console.log('successfull');
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.points);
    console.log(req.body.stadium);

    TeamModel.create({
        name: req.body.name,
        points: req.body.points,
        stadium: req.body.stadium
    });
    res.json('data uploaded')
})


app.get('/api/teams/:id',(req,res)=>
{
    console.log(req.params.id);

    TeamModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
})

app.put('/api/teams/:id',(req,res)=>{
    console.log(req.body);
    console.log("Edit " +req.params.id);

    TeamModel.findByIdAndUpdate(req.params.id,
        req.body, {new:true}, (error, data)=>{
            res.send(data);
        })
})

app.listen(Port, function (){
    console.log('Server is running on Port: ', Port);
});

