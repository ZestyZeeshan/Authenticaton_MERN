//this is only for learning purpose to learn about JWT token

const ensureAuth = require('../Middlewares/Auth');


const router = require('express').Router();

router.get('/',ensureAuth, (req, res) => {
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        },
        {
            name:"TV",
            price: 12000
        }
    ])
})

module.exports = router;