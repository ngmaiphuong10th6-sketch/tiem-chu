export default function DocumentStore(){

const documents = [
{
title:"Bộ đề Văn 2026",
price:49000
}
]

return(

<div>

<h2>Tài liệu</h2>

{documents.map(d=>(

<div key={d.title}>

<h3>{d.title}</h3>

<p>{d.price} VNĐ</p>

<button>Mua</button>

</div>

))}

</div>

)

}