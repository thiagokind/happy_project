const dataBase = require('./database/db')
const saveOrphanage = require('./database/saveOrphanage')

module.exports = {

    index(req, res) {
        //console.log('Servidor rodando...') // essa resposta é apresentada no terminal do servidor
        return res.render('index') // renderizar a template engine criada
    },

    async orphanage(req, res) {

        const id = req.query.id

        try {
            const db = await dataBase
            const results = await db.all(`SELECT * FROM orphanages WHERE id="${id}"`)
            const orphanage = results[0]

            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]
            
            orphanage.open_on_weekends == "0" ? orphanage.open_on_weekends = false : orphanage.open_on_weekends = true

            return res.render('orphanage', { orphanage })

        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    },

    async orphanages(req, res) {
        try {
            const db = await dataBase
            const orphanages = await db.all("SELECT * FROM orphanages")
            console.log(orphanages);
            return res.render('orphanages', { orphanages })

        } catch (error) {
            console.log(error);
            return res.send('Erro no banco de dados!')
        }
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage')
    },

    async saveOrphanage(req, res) {
        const fields = req.body

        // validar se todos os campos estão preenchidos
        if(Object.values(fields).includes('')) {
            return res.send('Todos os campos devem ser preenchidos')
        } 
        
        try {
            // Salvar um orfanato
            const db = await dataBase
            await saveOrphanage(db, {
                lat:fields.lat,
                lng:fields.lng,
                name:fields.name,
                about:fields.about,
                whatsapp:fields.whatsapp,
                images:fields.images.toString(),
                instructions:fields.instructions,
                opening_hours:fields.opening_hours,
                open_on_weekends:fields.open_on_weekends
            })
            
            // redirecionamento
            return res.redirect('/orphanages')
            
        } catch (error) {
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
        
    }

}