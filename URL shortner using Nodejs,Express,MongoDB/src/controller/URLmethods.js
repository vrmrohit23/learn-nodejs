const express = require('express')
const idgenerator = async (size) => {
    const { nanoid } = await import('nanoid');
    return nanoid(size);
};
const UrlObject = require('../models/Schema and model')


async function createShortURL(req, res) {
    const shortid = await idgenerator(8)
    await UrlObject.create({
        shortId: shortid,
        visitorHistory: [],
        redirectURL: req.body.redirectURL
    })
    return res.json({ result: 'successfully created', id: shortid })
}

async function handleVisit(req, res) {
    const shortId = req.params.shortid;
    const entry = await UrlObject.findOneAndUpdate({ shortId },
        {
            $push: {
                visitorHistory: { time: Date.now() }
            }
        })

    res.redirect(entry?.redirectURL)
}


async function getAlldocuments(req, res) {
    const data = await UrlObject.find();
    return res.json(data)
}

async function deleteUser(req, res) {
    const userdata = await UrlObject.findByIdAndDelete(req.params.id)
    if (!userdata) return res.status(400).json({ result: 'no such entry exist' })
    return res.json({ result: 'deleted successfully', user: userdata })
}

async function getAnalytics(req, res) {
    const shortId = req.params.shortid
    const data = await UrlObject.findOne({ shortId })
    return res.json({total_clicks:data.visitorHistory.length, Analytics: data.visitorHistory})
}

module.exports = {
    createShortURL,
    handleVisit,
    getAlldocuments,
    deleteUser,
    getAnalytics
}