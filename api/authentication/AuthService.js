import axios from"axios"



const login=async (username, password)=>{
  // const response = await axios.post(API_URL + "login", {
  //     username,
  //     password
  //   });
  const response ={
    data:{
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
  }
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response
  
}
//   log out
const logout=()=> {
  localStorage.removeItem("user");
}
// Sign up
const register=async(username, password)=>{
  const response = await axios.post(API_URL + "signup", {
    username,
    password
  });
  return response.data;
}

const verify=(username, password, OTP)=>{
  return axios.post(API_URL+"two-factor-auth",{
    username,
    password,
    OTP
  })
}

const resendOtp=(username)=>{
  return axios.get(API_URL+'resend-otp/'+username)
}
const AuthService={
  login,
  logout,
  register,
  verify,
  resendOtp,
}
export default  AuthService;