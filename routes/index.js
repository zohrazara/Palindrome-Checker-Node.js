const palindromeCalculationsRoutes = require('./palindromeCalculations');
const constructorMethod = (app) => {
    app.use("/", palindromeCalculationsRoutes);

    app.use("*", (req, res) => {
        res.redirect("/");
    })
};
module.exports = constructorMethod;