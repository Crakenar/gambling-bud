const bcrypt = require("bcryptjs")
const saltRounds = 10;

exports.checkPassword = (password, userPassword) => {
    //wrong i do not want that C'EST BLOQUANT ENCULE
    return bcrypt.compareSync(password, userPassword);
}

exports.hashPassword = async (password) => {
    // await bcrypt.genSalt(saltRounds, async function (err, salt) {
    //     if (err) {
    //         console.log('Error while generating salt', err)
    //         return null;
    //     }
    //     await bcrypt.hash(password, salt, function (err, hash) {
    //         if (err) {
    //             console.log('Error while hashing password', err)
    //             return null;
    //         }
    //         return hash;
    //     });
    // });
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}
