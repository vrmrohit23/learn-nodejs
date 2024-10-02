const express = require('express');
const { createShortURL,handleVisit, getAlldocuments,deleteUser, getAnalytics } = require('../controller/URLmethods');

const router = express.Router();

router
.route('/')
.get(getAlldocuments)
.post(createShortURL);
router
.route('/:shortid')
.get(handleVisit)
.delete(deleteUser);
router
.route('/analytics/:shortid')
.get(getAnalytics)




module.exports = router