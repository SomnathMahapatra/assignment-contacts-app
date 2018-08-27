var boom = require('boom');
var pool = require('../../config/db')


function create(req, res, next) {


    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.emailid;
    let phone = req.body.Phone;
    let companyname = req.body.companyname;
    let companyemail = req.body.companyemail;
    let accounttype = req.body.accounttype;

    //  //generate salt
    //  let salt = crypto.randomBytes(16).toString('hex');
    // // genrate hash
    //  let hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512').toString('hex');
    if (firstname && lastname && email && phone && companyemail && companyname && accounttype) {

        pool.query(`insert into contacts(firstname,lastname,email,phone,companyname,companyemail,accounttype)VALUES('${firstname}','${lastname}','${email}','${phone}','${companyname}','${companyemail}','${accounttype}')`, (err, result) => {

            if (err) {
                res
                    .status(500)
                    .json(boom.badImplementation(" db commnication failed "));
            }

            res
                .status(200)
                .json({
                    message: "User created successfully"
                })

        })
    } else {
        console.log("[err] occured -- Req params missing")
        res
            .status(422)
            .json(boom.badData('required request parameters missing'))
    }
}


function list(req, res, next) {

    pool.query(`SELECT * FROM contacts`, (err, result) => {
        if (err) {

            res
                .status(500)
                .json(boom.badImplementation(" db commnication failed "));
        }

        res
            .status(200)
            .json({
                userlist: result.rows
            })
    })
}


function update(req, res) {
    //get the user by id
    let uid = req.params.uid;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.emailid;
    let phone = req.body.Phone;
    let companyname = req.body.companyname;
    let companyemail = req.body.companyemail;
    let accounttype = req.body.accounttype;
    //query
        if (firstname && lastname && email && phone && companyemail && companyname && accounttype) {
            var sql = "UPDATE contacts SET firstname = 'Canyon 123' WHERE id = 6";
        pool.query(sql, (err, result) => {

            if (err) {
                res
                    .status(500)
                    .json(boom.badImplementation(" db commnication failed "));
            }

            res
                .status(200)
                .json({
                    message: "User created successfully"
                })

        })
    } else {
        console.log("[err] occured -- Req params missing")
        res
            .status(422)
            .json(boom.badData('required request parameters missing'))
    }
    console.log("###########",req.body)
    // pool.query(`UPDATE CONTACTS SET FIRSTNAME = ${firstname},LASTNAME = ${lastname},EMAIL = ${email},PHONE = ${phone},COMPANYNAME = ${companyname},COMPANYEMAIL = ${companyemail},ACCOUNTTYPE = ${accounttype} WHERE ID = ${uid}`, (err, result) => {
    //   console.log(err||result)
    //     if (err) {

    //         res
    //             .status(500)
    //             .json(boom.badImplementation(" db commnication failed "));                
    //     }

    //     res
    //         .status(200)
    //         .json({
    //             message: result
    //         })
    // })


}



function remove(req, res, next) {
    let uid = req.params.uid;

    pool.query(`DELETE FROM CONTACTS WHERE ID = ${uid}`, (err, result) => {

        if (err) {

            res
                .status(500)
                .json(boom.badImplementation(" db commnication failed "));
        }

        if (result.rowCount) {
            res
                .status(200)
                .json({
                    message: 'user deleted successfully'
                })
        } else {
            res.sendStatus(204)
        }

    })
}


module.exports = {
    create,
    list,
    remove,
    update
};