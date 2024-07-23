import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req,res)=>{
   // get user details from frontend 
   // validation - not empty 
   // checkif user already exists : username nad email
   //check for image nad avatar 
   //uplosad them on cloudnary : avatar 
   //creat user object and entry in data
   //remove password and refresh token field from response 
   // check for user creation
   //return response

   const { fullName,email,username,password } = req.body
   console.log(`email: ${email}`);


} )

export {registerUser}