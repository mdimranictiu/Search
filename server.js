const express= require('express') ;
const app= express();
const PORT= 3002;
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('home');
})
app.use("/",(req,res)=>{
res.send("404");
});
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT} `)
})