const bd = require('../configMysql')

module.exports = {

    insertLink : (link, callback)=>{
        let sql = 'INSERT INTO links SET ?'
        bd.query(sql,link,(err,data) => {
            if(err)
                return callback(null)
            else
                return callback (data)
        })
    },
    updateLink : (link, idlink, callback)=>{
        console.log('Llega a actualizar')
        let sql = 'UPDATE links SET ? WHERE idlink = ?'
        bd.query(sql,link, idlink,(err,data) => {
            if(err)
                return callback(null)
            else
                return callback (data)
        })
    },
    getAllLinks: (callback) =>{
        let sql = 'SELECT * FROM links'
        bd.query(sql, (err, data) => {
            if (err) throw err

            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },

    getLink: (idlink, callback) =>{
        let sql = 'SELECT * FROM links WHERE idlink = ?'
        bd.query(sql, idlink, (err, data) => {
            if (err) throw err

            if (data.length>0)
                callback(data)
            else
                callback(null)
        })
    },
    deleteLink: (idlink, callback) => {
        let sql = 'DELETE FROM links WHERE idlink = ?'
        bd.query(sql,idlink, (err, data) => {
            console.log("err =>",err)
            console.log("data =>",data)
            try {
                if (err) throw new Err('Error en la eliminación')
                return callback(data)
            }
            catch (Err) {
                return callback(null)
            }
        })
    }



}
