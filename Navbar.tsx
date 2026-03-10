export default function Navbar(){

return(

<div className="flex justify-between p-6 bg-pink-200">

<h2 className="font-bold text-xl">

Trạm Văn

</h2>

<div className="flex gap-6">

<a href="/login">Đăng nhập</a>

<a href="/exam">Luyện đề</a>

<a href="/documents">Tài liệu</a>

</div>

</div>

)

}