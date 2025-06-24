const mongoose = require('mongoose');

const podcastSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    duration: String,
    audioURL: String,
    coverImageURL: String,
    authorName: String,
    uploadedOn: String
});


const podcastModel = mongoose.model("podcasts", podcastSchema)

module.exports = podcastModel