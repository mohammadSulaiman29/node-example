const authorize = (req , res , next) => {
    console.log("Authorize middleware");
    const {user} = req.query;
    if(user === 'Mohammad'){
        req.query.user = {name : "Mohammad" , id : 12 };
        console.log( req.query.user);
        next();
    }
    else{
        res.status(401).send('Unauthorize');
    }
    next();
}

module.exports = {authorize};