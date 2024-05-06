function emailValidation(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}
function pwdValidation(password){
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password)
}
function validationFields(fields){
    return fields.every(field=>field)
}
function confirmPwd(password,confirmPwd){
    return password === confirmPwd
}

module.exports = {
    emailValidation,
    pwdValidation,
    validationFields,
    confirmPwd
}