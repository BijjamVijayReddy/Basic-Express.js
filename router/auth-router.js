
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-control");

router.route("/").get(authControllers.home);
router.route("/registartion").get(authControllers.registration)


// router.route("/").get((res,req) => {
//     req.status(200).send("Express Router is working fine.Conguations")
// });

// router.get("/" , (req,res) => {
//     res.status(200).send("Server is Running Sucessfully by using express Router.Conguations Vijay :).");
// });

module.exports = router;

