// Importar dependências
const express = require ('express')
const server = express()
const path = require ('path')
const pages = require('./pages')

// Configurando o servidor
server
    // Utilizar body do req
    .use(express.urlencoded({ extended: true }))

    // Cria rotas para os arquivos estáticos dessa pasta
    .use(express.static('public'))

    // Configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    // Rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)
        //console.log('Servidor rodando...') // essa resposta é apresentada no terminal do servidor
        //return res.send('Servidor rodando...') // essa resposta é apresentada no browser do cliente
        //return res.render('index') 

// Ligar servidor (deve ser a última linha de código do arquivo)
server.listen(5500)