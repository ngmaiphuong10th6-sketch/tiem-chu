import jwt from "jsonwebtoken"
import crypto from "crypto"

/* tạo token download tài liệu */

export const createDownloadToken = (fileId,userId)=>{

return jwt.sign(
{
fileId,
userId
},
process.env.FILE_SECRET,
{
expiresIn:"10m"
}
)

}

/* kiểm tra link download */

export const verifyDownloadToken = (token)=>{

try{

return jwt.verify(
token,
process.env.FILE_SECRET
)

}catch{

throw new Error("Link download hết hạn")

}

}

/* tạo mã phòng luyện đề */

export const generateRoomCode = ()=>{

return crypto
.randomBytes(4)
.toString("hex")
.toUpperCase()

}

/* token phòng luyện đề */

export const createRoomToken = (examId,userId)=>{

return jwt.sign(

{
examId,
userId
},

process.env.JWT_SECRET,

{
expiresIn:"3h"
}

)

}

/* xác minh phòng */

export const verifyRoomToken = (token)=>{

return jwt.verify(
token,
process.env.JWT_SECRET
)

}

/* watermark chống leak */

export const generateWatermark = (student)=>{

return `Sinh viên: ${student.name} | ID: ${student.studentId}`

}