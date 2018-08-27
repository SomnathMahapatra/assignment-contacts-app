var config = require('./dbenv')
var {
    Pool
} = require('pg')

const pool = new Pool(config.dbConfig)

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})


module.exports = pool;