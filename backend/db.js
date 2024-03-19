
const mongoose = require("mongoose"); 

module.exports = () => {
    try {
        mongoose.connect(process.env.DB); 
        console.log("Backend Database Server Connected Successfully"); 
    } catch (error) {
        console.log(error);
        console.log("No Connection To Backend Database Server!");
    }
};
