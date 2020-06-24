const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());


mongoose.connect('mongodb://localhost:27017/boemDB', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});

const blogSchema = new mongoose.Schema({
  title: {type: String, required: true},
  text:{type: String, required: true},
  date:{type: String,},

});
const Post = mongoose.model('Post', blogSchema);


app.get('/', (req, res) => {
 
  
    res.send('hello');
  });


app.post('/post', function(req, res) {
  console.log(req.body)
  const Post = new Post({ 
    title: req.body.title,
    text:req.body.text,
    date:req.body.date,
    
   });
   Post.save()
});

app.get('/posting', (req, res) => {
 res.json({title:'First post',text:'This is a wider card with supporting text below as a natural lead-in to additional content.', topic:'workout'})
 
});


app.listen(5000,function(req,res){
    console.log("server run at port 5000")
})