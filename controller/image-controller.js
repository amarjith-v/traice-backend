var imageModel = require('../models/image-model');

exports.displayImage = async (req, res) => {
    imageModel.displayImage(function (data) {
        return res.status(200).json({
            status: true,
            message: 'Fetch Successfully',
            data: data,
        })
    })
}

exports.displayOneImage = async (req, res) => {
    imageModel.displayOneImage(function (data) {
        return res.status(200).json({
            status: true,
            message: 'Fetch Successfully',
            data: data,
        })
    },req)
}