const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end("welcome home page")
}

if(req.url==='/about')
{res.end('our histoyr  page')
}


}
)  

 
server.listen(3000)