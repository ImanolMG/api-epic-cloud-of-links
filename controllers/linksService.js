

const linksDAO = require('../models/linksDAO')


const add_link = (req, res) => {
    console.log('Agregar => in')

        const link = {
            idlink : req.body.idlink,
            title : req.body.title,
            body_link : req.body.body_link,
            category : req.body.category,

        }
        linksDAO.insertLink(link, (data) => {
            res.send({
                status: true,
                message: 'Enlace agregado exitosamente'
            })
        }, err => {
            res.send({
                status:false,
                message: 'Ha ocurrido un error al agregar el enlace',
                errorMessage: err
            })
        })

}


const getAllLinks = (req, res)=> {
    linksDAO.getAllLinks(data => {
        try{
            console.log('Data =>',data)
            if(!data) throw new Err(":)")
            res.send({
                status: true, data: data
            })
        }
        catch (Err){
            console.log('Data =>',data)
            res.send({
                status: false,
                message: 'Usuarios disponibles'
            })
        }
    })
}

const deleteLink = (req, res) => {
    linksDAO.deleteLink(req.params.idlink, data => {
        try {
            if (!data) throw new Err("Hubo un error en el proceso")
            if (data.affectedRows === 0) throw new Err(`Falló la eliminación del lugar :(: ${req.params.idlink}`)
            res.send({
                status: true,
                message: `Eliminación de lugar: ${req.params.idlink} fue exitosa`
            })
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'mensaje de error'
            })
        }
    })
}

const updateLink = (req, res) => {
    console.log('Editar => in')
        const link = {
            idlink : req.body.idlink,
            title : req.body.title,
            category : req.body.category,
            body_link : req.body.body_link
        }
        linksDAO.updateLink(link, (data) => {
            res.send({
                status: true,
                message: 'Lugar editado exitosamente'
            })
        }, err => {
            res.send({
                status:false,
                message: 'Ha ocurrido un error al editar el lugar',
                errorMessage: err
            })
        })
}

const getLink = (req, res)=> {
    linksDAO.getLink(req.params.idlink, (data) => {
        try{
            console.log('Data =>',data)
            if(!data) throw new Err("No hay lugar")
            res.send({
                status: true, data: data
            })
        }
        catch (Err){
            console.log('Data =>',data)
            res.send({
                status: false,
                message: 'Usuarios disponibles'
            })
        }
    })
}

module.exports = {
 add_link,
    getAllLinks,
    deleteLink,
    updateLink,
    getLink
}