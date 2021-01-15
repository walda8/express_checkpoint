const express= require('express');
const app= express();


const MyMiddelware = (req,res,next)=> {
    var date= new Date();
    var day = date.getDay();
    var hours = date.getHours();
    if (day != 6 && day != 0 && hours > 8 && hours < 17) {
        next()
    }   
    else {next(res.sendFile(__dirname+'/public/closed.html'))}
}

app.use(MyMiddelware);

app.use( express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/home.html')
});

app.get('/services',(req,res)=>{
    res.sendFile(__dirname+'/public/OurServices.html')
});

app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/public/Contact.html')
});

const PORT = process.env.PORT || 8080 

app.listen(PORT, ()=> console.log(`we are on port ${PORT}`));