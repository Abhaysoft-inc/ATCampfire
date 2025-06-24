const express = require('express')
const router = express.Router()
const podcastModel = require('../model/podcast.model');



router.post('/create-podcast', async (req, res) => {

    const { title, description, authorName } = req.body;

    if (!title || !description || !authorName) {
        return res.status(400).json({ message: "Please fill all the details before uploading the podcast" });

    }
    const date = new Date();
    const localeDate = date.toLocaleDateString();

    const newPodcast = new podcastModel({
        title,
        description,
        authorName,
        duration: "5",
        audioURL: "url",
        coverImageURL: "url",
        uploadedOn: localeDate
    });

    await newPodcast.save().then((podcast) => {
        res.status(201).json({
            message: "Podcast uploaded successfully",
            podcastId: podcast._id
        });
    }).catch((err) => {
        console.log(err);


    })



})

module.exports = router;