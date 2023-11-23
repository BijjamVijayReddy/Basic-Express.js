
//    Controllers in Express.js.


const home = async (req, res) => {

    try {
        res.status(200).send("Welcome to Home Page by Using Controllers")
    } catch (error) {
        console.log("Error in Home Page " + error)
    }
};

const registration = async (req,res) => {

    try {
          res.status(200).send("Welcome to Registration Page")
    } catch (error) {
        res.status(400).send({msg:"Page not Found"})
        console.log("Error in Registration Page " + error);
    }

}

module.exports = { home, registration }