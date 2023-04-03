const bcrypt = require("bcryptjs")
const saltRounds = 10;

exports.checkPassword = async (password, userPassword) => {
    let pwdCorrect = false;
    await bcrypt.compare(password, userPassword, function (err, res) {
        console.log('my res', res);
        pwdCorrect = res;
    });
    return pwdCorrect;
}

exports.hashPassword = async (password) => {
    await bcrypt.genSalt(saltRounds, async function (err, salt) {
        if (err) {
            console.log('Error while generating salt', err)
            return null;
        }
        await bcrypt.hash(password, salt, function (err, hash) {
            if (err) {
                console.log('Error while hashing password', err)
                return null;
            }
            return hash;
        });
    });
}
