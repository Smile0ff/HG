var pathJoin = require("path").join;

module.exports = {
    "js": pathJoin(__dirname, "assets/js"),
    "css": pathJoin(__dirname, "assets/css"),
    "images": pathJoin(__dirname, "assets/images"),
    "vendors": pathJoin(__dirname, "assets/js/vendors"),
    "build": pathJoin(__dirname, "build")
}