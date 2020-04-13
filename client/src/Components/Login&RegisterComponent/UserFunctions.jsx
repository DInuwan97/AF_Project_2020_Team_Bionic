import axios from 'axios';
import swal from 'sweetalert';

import VerifySecureCode from './VerifySecureCode';

export const register = newUser =>{
    return axios
    .post('api/users/register',{
      firstName:newUser.firstName,
      lastName:newUser.lastName,
      email:newUser.email,
      mobile:newUser.mobile,
      company:newUser.company,
      package:newUser.package,
      userType:newUser.userType,
      password:newUser.password
    })
    .then(res =>{
         if(res.data != null){

            localStorage.setItem('usertoken',res.data.token); //create the session
            console.log("Data :" +res.data.token);
            return res.data.token
        }
    })
    .catch(err =>{
        console.log(err)
    });
}


export const login = loggedUser =>{
    return axios
    .post('api/users/login',{
        email:loggedUser.email,
        password:loggedUser.password
    })
    .then(res =>{
        
        localStorage.setItem('userLoginToken',res.data.token); //create the login session
        localStorage.setItem('loggedUserFirstName',res.data.firstName);

        console.log("Fisrt Name :" +res.data.firstName)
        console.log("Login Token :" +res.data.token);
        console.log("SecurtyKeyStatus :" +res.data.secureKeyVerifyStatus);

        return res.data.token
    })
    .catch(err =>{
        if(err.response.status === 400){
            swal({
                title: "Oops!!!",
                text: "Your Password is Incorrect",
                icon: "error",
                button: "Back to Login",
            })
        }
        else if(err.response.status === 403){
            swal({
                title: "Oops!!!",
                text: "Verify your Security Key First",
                icon: "error",
                button: "Back to Login",
            })
        }
        else if(err.response.status === 404){
            swal({
                title: "Oops!!!",
                text: "User Does not Exist in the System",
                icon: "error",
                button: "Back to Login",
            })
        }
    })
}


// export const verify = userVerification =>{
//     return axios
//     .post('/api/users/verify',{
//         securecode:userVerification.securecode
//     })
//     .then(res=>{
//         swal({
//             title: "Congratulations!",
//             text: "Verified Successfully!",
//             icon: "success",
//             button: "Back to Login",
//         })
//     })
// }




