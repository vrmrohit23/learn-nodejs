
const idgenerator = async (size) => {
    const { nanoid } = await import('nanoid');
    return nanoid(size);
};
const Model = require('../models/Schema and Model')

async function showcreationForm(req, res) {
    res.render('Home')
}

async function createShortURL(req, res) {
    const shortid = await idgenerator(8)
    await Model.create({
        shortId: shortid,
        Name: req.body.Name,
        imageURL: req.body.imageURL
    })
    return res.json({ result: 'successfully created', id: shortid })
}


async function handleVisit(req, res) {
    const shortId = req.params.shortid;
    const entry = await Model.findOne({ shortId })
    console.log('visited ',entry)
    visited = true;

    res.render(`Showpost`,{
        imageURL:entry?.imageURL
    })
}
async function getAlldocuments(req, res) {
    const data = await Model.find();
    console.log('start here\n',data)
    return res.render('ShowallPost',{objects:data})
}

async function deleteUser(req, res) {
    const userdata = await Model.findByIdAndDelete(req.params.id)
    if (!userdata) return res.status(400).json({ result: 'no such entry exist' })
    return res.json({ result: 'deleted successfully', user: userdata })
}

async function getAnalytics(req, res) {
    const shortId = req.params.shortid
    const data = await Model.findOne({ shortId })
    return res.json({ total_clicks: data.visitorHistory.length, Analytics: data.visitorHistory })
}

module.exports = {
    createShortURL,
    handleVisit,
    getAlldocuments,
    deleteUser,
    getAnalytics,
    showcreationForm
}