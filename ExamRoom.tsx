import {useState} from "react"

export default function ExamRoom(){

const [answers,setAnswers] = useState({})

const submitExam = ()=>{

console.log("submit",answers)

}

return(

<div>

<h2>Phòng luyện đề</h2>

<textarea

onChange={(e)=>setAnswers({
...answers,
q1:e.target.value
})}

/>

<button onClick={submitExam}>

Nộp bài

</button>

</div>

)

}