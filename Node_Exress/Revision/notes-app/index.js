const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port=3005

app.use(express.json())

//db configurations
mongoose.Promise=global.Promise

mongoose.connect('mongodb://localhost:27017/notes-app-april',{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log('connection to db is successfull')
})
.catch(()=>{
    console.log('error in connecting to db '+err)
})

//createting schema for notes
const Schema=mongoose.Schema

const noteSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

//create note module
const Note=mongoose.model('Note',noteSchema)

//controllers for notes

app.get('/notes',(req,res)=>{
    Note.find()
        .then((notes)=>{
            res.json(notes)
        })
})

app.post('/notes',(req,res)=>{
    const data=req.body
    const note=new Note({title:data.title,body:data.body})
    note.save()
        .then((note)=>{
            res.json(note)
        })
})

app.get('/notes/:id',(req,res)=>{
    const id=req.params.id
    Note.findById(id)
        .then((note)=>{
            res.json(note)
        })
})


app.listen(port,()=>{
    console.log('server is listening on port no...'+port)
})

