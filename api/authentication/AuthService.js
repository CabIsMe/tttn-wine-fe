import axios from"axios"
const CLIENT_URL ="http://localhost:8080/client"



const login=async (username, password)=>{
  const response = await axios.post(CLIENT_URL + "/customer-login", {
      username,
      password
    });
  if (response.data.detail.token) {
    localStorage.setItem("access_token", JSON.stringify(response.data));
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