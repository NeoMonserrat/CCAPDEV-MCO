const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    res.render('Admin/Admin')
});

router.get('/UpdateForums', async (req, res) => {
   res.render('Admin/UpdateForums')
});

router.get('/UpdateMovies', async (req, res) => {
    res.render('Admin/UpdateMovies')
 });

 router.get('/UpdateAccounts', async (req, res) => {
    res.render('Admin/UpdateAccounts')
 });



module.exports = router;