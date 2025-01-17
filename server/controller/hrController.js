const db = require("../models/db");
const bcrypt = require('bcryptjs')

const {createTokens, validateToken,salesmanagerValidation} = require('../jwt')

module.exports = {
    admin: async(req, res) => {
    const result = await db.query("SELECT givenNames FROM employee");
    res.status(200).json({
        message: "USER ADDED",
        data: result.rows
    })

    },

    //WHEN ADDING USER THE DEPARTMENT THEY ARE JOINING WILL BE LISTED FOR THE ADMIN

    departmentList: async (req, res)=> {
        try {
            const result = await db.query("select * from department");
            await res.status(200).json({
                departmentList: result.rows
            })
        } catch (error) {
            res.status(400).json({
                error: "failed"
            })
        }
    }
}