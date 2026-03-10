import {connectDB} from "@/lib/mongodb"
import {createToken} from "@/lib/auth"
import bcrypt from "bcryptjs"

export async function POST(req){

const {email,password} = await req.json()

const db = await connectDB()

const user = await db.collection("users").findOne({email})

if(!user){

return Response.json({
message:"Email không tồn tại"
})

}

const valid = await bcrypt.compare(password,user.password)

if(!valid){

return Response.json({
message:"Sai mật khẩu"
})

}

const token = createToken(user)

return Response.json({
token,
user
})

}