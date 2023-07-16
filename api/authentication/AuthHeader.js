const authHeader=()=>{
    const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
    return { token: token };
  } else {
    return {};
  }
}

export default authHeader
