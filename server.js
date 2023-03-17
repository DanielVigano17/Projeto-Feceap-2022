const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const path= require('path')
const router= express.Router()
const Tarefas= require('./models/tarefas')
let ids=5



//Body parser
app.use(bodyParser.urlencoded({exetended:false}))
app.use(bodyParser.json())

// Renderização de páginas
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', './views');

router.get('/',function(req,res){

    res.render('index3');
    
})
router.get('/home',function(req,res){

    res.render('index3');
    
})
router.get('/tarefas', function(req,res){

   
   const taf=Tarefas.findOne({
    where:{
        id:ids
    }
   }).then(function(posts){
    res.render('tarefas_menu', {posts: posts})
})


})

router.get('/procurar', function(req,res){

    res.render('procurar_tarefa')

   
   
 })

 router.post('/procurar2', function(req,res){


    Tarefas.findOne({
        where:{
            titulo:req.body.tarefa
        }
       }).then(function(posts){
        const teste= {posts: posts}
        if(teste.posts===null){
        res.render('erro')
    }else{
        console.log('Aqui: '+teste.posts)
        res.render('tarefas_menu', {posts: posts})
     
    }
    })

   
 })



router.post('/adicionar',function(req,res){
    Tarefas.create({
        titulo: req.body.titulo,
        descricao: req.body.desc,
        horario:req.body.horario
    }).then(function(){
        res.render('index3')
        ids+=1
    }).catch(function(err){
        res.send('Houve um erro: '+ err)
    })

   


    
})




app.use('/',router)

app.listen(3000)

