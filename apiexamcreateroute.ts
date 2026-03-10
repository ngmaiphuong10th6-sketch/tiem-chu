import {connectDB} from "@/lib/mongodb"
import {generateRoomCode} from "@/utils/securitySystem"

export async function POST(req){

const {title,questions,time} = await req.json()

const db = await connectDB()

const roomCode = generateRoomCode()

await db.collection("exams").insertOne({

title,
questions,
time,
roomCode

})

return Response.json({
roomCode
})

}