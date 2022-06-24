const bcrypt = require('bcrypt')
const userDAO = require('../models/usersDAO')

const usernameValidate = (req, res) => {
    userDAO.findByUsername(req.params.username, (data) =>{
        try {
            if (!data) throw new Err("Usuario disponible")

            res.send({
                status: true,
                message: 'Usuario ocupado'
            })
        }
        catch(Err) {
            res.send({
                status: false,
                message: 'Usuario disponible'
            })
        }
    })
}

const signup = (req, res) => {
    const user = {
    names : req.body.names,
    surnames : req.body.surnames,
    username : req.body.username,
    password : bcrypt.hashSync(req.body.password,10)
}
    userDAO.insertUser(user, (data) => {
        res.send({
            status: true,
            message: 'Usuario creado exitosamente'
        })
    }, err => {
        res.send({
            status:false,
            message: 'Ha ocurrido un error al crear la cuenta de usuario',
            errorMessage: err
        })
    })
}

/*

const login = (req,res) => {
    let username = req.body.username
    let password = req.body.password
    userDAO.findByUsername(username, (data) => {
        if (data) {
            console.log('Data =>',data)
            if (bcrypt.compareSync(password, data.password)){
                res.send({
                    status: true,
                    message: 'Contraseña correcta',
                })
            } else {
                res.send({
                    status: false,
                    message: 'Contraseña incorrecta'
                })
            }
        } else {
            res.send({
                status: false,
                message: 'La cuenta de usuario no existe'
            })
        }
    })
}
*/


/*
const deleteUser = (req, res) => {
    userDAO.deleteUser(req.params.iduser, data => {
        try {
            if (!data) throw new Err("Hubo un error en el proceso")
            if (data.affectedRows === 0) throw new Err(`Falló la eliminación del usuario :(: ${req.params.idUser}`)
            res.send({
                status: true,
                message: `Eliminación del usuario: ${req.params.idUser} fue exitosa`
            })
        }
        catch (Err) {
            res.send({
                status: false,
                message: 'error'
            })
        }
    })

}
*/


module.exports = {
    usernameValidate,
    signup,
/*    login,
    deleteUser*/
}