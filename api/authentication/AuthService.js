import axios from"axios"
const CLIENT_URL ="http://localhost:8080/client"



const login=async (username, password)=>{
  const response = await axios.post(CLIENT_URL + "/customer-login", {
      username,
      password
    });
  if (response.data.detail.token) {
    localStorage.setItem("token", response.data.detail.token);
  }
  return response
}
//   log out
const logout=()=> {
  localStorage.removeItem("token");
  location.reload();
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

const signInGoogle=async(email, id, name)=>{
  const response = await axios.post(CLIENT_URL+ "/login-with-google",{
    "email": email,
    "password": id,
    "name": name
  })
  if (response.data.detail.token) {
    localStorage.setItem("token", response.data.detail.token);
  }
  return response
}

const AuthService={
  login,
  logout,
  register,
  verify,
  resendOtp,
  signInGoogle
}
export default  AuthService;