const bcrypt = require('bcrypt-nodejs')
const passport = require('passport')

module.exports = app => {
    const getHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    const save = (req, res) => {
        const user = req.body
        console.log(user);

        getHash(user.password, hash => {
            const password = hash

            app.db('users')
                .insert({name: user.name, email: user.email.toLowerCase(), password})
                .then(_ => {
                    res.status(204).send()
                })
                .catch(err => {
                    res.status(400).send({error: err})
                })
        })
    }

    return { save }
}