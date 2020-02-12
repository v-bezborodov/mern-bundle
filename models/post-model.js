const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema(
    {
        user_id: { type: String, required: true },
        title: { type: String, required: true },
        body: { type: String, required: true },
        category: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('posts', Post)