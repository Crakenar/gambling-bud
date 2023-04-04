const bcrypt = require("bcryptjs")
const saltRounds = 10;

//Why not using await async here ?? bc bcrpyt.compare is already an async function ?
exports.checkPassword = (password, userPassword) => {
    return bcrypt.compare(password, userPassword);
}

exports.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    console.log(salt, password)
    return bcrypt.hash(password, salt);
}
