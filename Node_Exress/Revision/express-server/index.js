const express=require('express')
const app=express()

const port=3005

app.use(express.json())

app.get('/',function(req,res){
    res.send('Welcome to home page')
})

app.get('/about',function(req,res){
    res.send('This is about us page')
})

let users=[{id:1,name:'soumya'},{id:2,name:'shukla'}]
app.get('/users',function(req,res){
    res.json(users)
})

app.get('/users/:id',function(req,res){
    const id=req.params.id
    user=users.find(function(user){
       return user.id==id
    })
    if(user)
    {
        res.json(user)
    }
    else{
        res.send({})
    }
})

app.post('/users',function(req,res){
    const body=req.body
    users.push(body)
    res.json(body)
})

app.put('/users/:id',function(req,res){
    const id=req.params.id
    const body=req.body
    let user=users.find(user=>user.id==id)
    if(user)
    {
        user=Object.assign(user,body)
        res.json(body)
    }
    else{
        res.json({})
    }
})

app.delete('/users/:id',function(req,res){
    const id=req.params.id
    let index=users.findIndex(function(user){
        user.id==id
    })

    if(!index)
    {
        res.json({})
    }
    else{
        users.splice(index,1)
        res.json({'notice':'successfully removed'})
    }
})

app.listen(port,function()
{
    console.log('server is listening on port no...'+port)
})