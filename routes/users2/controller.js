//version 2


function create(req, res, next) {
    res
        .status(200)
        .json({
            create: "v2"
        })
}


function list(req, res, next) {
    res
        .status(200)
        .json({
            list: "v2"
        })
}


module.exports = {
    create,
    list,
};