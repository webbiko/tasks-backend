const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        const user = req.body

        if (!user.email || !user.password) {
            return res.status(400).send({ error: 'User data is invalid'})
        }

        const loadedUser = await app.db('users')
            .whereRaw("LOWER(email) = LOWER(?)", user.email)
            .first()

        if (loadedUser) {
            bcrypt.compare(user.password, loadedUser.password, (err, isMatch) => {
                if (err || !isMatch) {
                    return res.status(401).send({error: 'Password must be valid!'})
                }

                const payload = {
                    id: loadedUser.id,
                    name: loadedUser.name,
                    email: loadedUser.email
                }

                res.send({
                    name: loadedUser.name,
                    email: loadedUser.email,
                    token: jwt.encode(payload, authSecret),
                })
            })
        } else {
            res.status(400).send({error: 'User not found!'})
        }
    }

    return { signin }
}