const authHeader=()=>{
    const token = localStorage.getItem('token');
  if (token) {
    return { token: token };
  } else {
    return {};
  }
}

export default authHeader
