const createUserData=(data)=>{
  return {
    name:data.name,
    email:data.email,
    sub:data.sub,
    picture:data.picture,
    email_verified:data.email_verified
  }
}
module.exports={createUserData}