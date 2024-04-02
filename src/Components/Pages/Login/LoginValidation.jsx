function Validation(value) {
 let error = {}
const email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const password_pattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

if (value.email === "") {
 error.email = "Name should be empty"
}
else if (!email_pattern.test(value.email)) {
 error.email = "Email is not valid"
} else {
 error.email = ""
}
if (value.password === "") {
 error.password = "Password should be empty"
} else {
 error.password = ""
}
return error
}

export default Validation