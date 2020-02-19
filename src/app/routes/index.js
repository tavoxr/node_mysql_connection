const express = require('express')
const router = express.Router()

const pool =require('../../config/db_connection')



router.get('/',async(req,res)=>{

    const news =await pool.query('SELECT * FROM news') 



    res.render('news/news',{news:news })
    console.log(news)

    
})

router.post('/',async(req,res)=>{

    
    const {title, news}= req.body

    const new_news= {
        title,
        news
    }

     await pool.query('INSERT INTO news SET?',[new_news]) 

    res.redirect('/')

})


module.exports= router