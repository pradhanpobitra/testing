const express = require('express');
const fileupload = require('express-fileupload');

const app = express();
app.use(fileupload({
    useTempFiles:true
}))
app.set('view engine' , 'ejs');

app.get('/' , (req,res)=>{
    res.render('main');
})
app.post('/' , (req,res) => {
    req.files.image.name = req.files.image.name.toLowerCase();
    console.log(req.files);
})
app.listen(3000);