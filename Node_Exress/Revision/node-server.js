const http=require('http')
const port=3005

const server=http.createServer(function(req,res){
        if(req.url=='/')
        {
            res.end('Welcome to the home page')
        }
        else if(req.url=='/about')
        {
            res.end('this is about us page')
        }
        else if(req.url=='/users')
        {
            const users=[{id:1,name:'soumya'},{id:2,name:'shukla'}]
            res.setHeader('Content-Type','application/json')
            res.end(JSON.stringify(users))

        }
        else if(req.url=='/services')
        {
            const html='<h1>Services</h1><ul><li>Service 1</li><li>Service 2</li></ul>'
            res.setHeader('Content-Type','text/html')
            res.end(html)
        }
})

server.listen(port,function(){
    console.log('server is listening on port no ...'+port)
})