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


router.get('/delete/:id',async(req,res)=>{

          const  {id}= req.params
        await pool.query('DELETE FROM news WHERE id_news=?',[id])

        res.redirect('/')


})

router.get('/edit/:id', async (req,res)=>{

    const {id}= req.params
   


    const get_news= await pool.query('SELECT * FROM news WHERE id_news=?',[id])

    res.render('news/edit',{get_news: get_news[0]})




})

router.post('/edit/:id', async(req,res)=>{

    const {id}= req.params
    const {title,news}= req.body
    const update_news={
        title,
        news
    }

    await pool.query('UPDATE news SET ? WHERE id_news=?',[update_news, id])

    res.redirect('/')

})


module.exports= router