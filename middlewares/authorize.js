const authorize = (req , res , next) => {
    console.log("Authorize middleware");
    next();
}

module.exports = {authorize};