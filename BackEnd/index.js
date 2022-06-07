const express = require('express');
const db = require('./db/conn');
const authRoutes = require('./routes/auth')

const app =express();
const PORT=process.env.PORT || 8000;

app.get('/',(req,res)=>{
    res.send("hello there")
})
app.use('/api',authRoutes)
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))