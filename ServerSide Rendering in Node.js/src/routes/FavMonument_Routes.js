const express = require('express');
const { createShortURL,handleVisit, getAlldocuments,deleteUser, getAnalytics, showcreationForm } = require('../controllers/FavMonuments_methods');

const router = express.Router();

router
.route('/')
.get(showcreationForm)
.post(createShortURL);

router
.route('/all')
.get(getAlldocuments)


router
.route('/:shortid')
.get(handleVisit)
.delete(deleteUser);
router
.route('/analytics/:shortid')
.get(getAnalytics)




module.exports = router