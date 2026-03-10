import {connectDB} from "@/lib/mongodb"
import bcrypt from "bcryptjs"

export async function POST(req){

const {name,email,password} = await req.json()

const db = await connectDB()

const hash = await bcrypt.hash(password,10)

await db.collection("users").insertOne({

name,
email,
password:hash,
role:"student"

})

return Response.json({
message:"Đăng ký thành công"
})

}