const checkValidateData = (email, password,username)=> {
    console.log("name",username)
    console.log("pass",password)
    console.log("email",email)
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isUserNameValid = /^[0-9A-Za-z]{6,16}$/.test(username);
    if(!isEmailValid) return "Email not valid"
    if(!isPasswordValid) return "Password not valid"
    console.log("name2",username)
    console.log("valid?",isUserNameValid)
    if(!isUserNameValid) return "Name is not valid"

}
export default checkValidateData;