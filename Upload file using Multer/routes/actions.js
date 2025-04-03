const router = require("express").Router();
const multer = require('multer');

const diskStorage = multer.diskStorage({
    destination: (req,file,cb) => {
        return cb(null,'./uploads')
    },
    filename: (req,file,cb) => {
        return cb(null,Date.now() + '-' + file.originalname)
    }
})
const upload = multer({storage: diskStorage})

router
.post('/upload',upload.single('profile'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    return res.render('image uploading'); 
})
.get('/', (req, res) => {
    res.render('image uploading');
})

module.exports = router;

