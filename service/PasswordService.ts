const bcrypt = require("bcryptjs")
const saltRounds = 10;

//Why not using await async here ?? bc bcrpyt.compare is already an async function ?
exports.checkPassword = (password: string, userPassword: string) => {
    return bcrypt.compare(password, userPassword);
}

exports.hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
}
