var db = require('../database');

module.exports = {
    displayImage: function (callback) {
        var sql = 'SELECT id,imageUrl,image_name FROM images';
        db.query(sql, function (err, data, fields) {
            if (err) throw err
            return callback(data);
        })
    },
    displayOneImage: function (callback, req) {
        var sql = 'SELECT * FROM images WHERE id='+ req.params.id;
        db.query(sql, function (err, data, fields) {
            if (err) throw err
            return callback(data);
        })
    }
}