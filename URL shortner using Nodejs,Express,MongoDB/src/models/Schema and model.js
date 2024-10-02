const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
    shortId: {
        type: String,
        required: true,
        
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitorHistory: [{time:{type: Number}}]

},
{timestamps: true}
)

const UrlObject = mongoose.model('Url',schema)

module.exports = UrlObject;