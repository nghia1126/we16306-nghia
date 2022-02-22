
import { get } from "../api/products";
import Menu from "../components/menu";
import Footer from "../components/footer";
import { addToCart } from "../utils/cart";
import { $ } from "../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const DetailProductPage = {
    async print(id) {
        
        // const result = data.find((post) => post.id === id);
        const { data } = await get(id);
        return /*html*/`
        ${Menu.print()}
        <div class="max-w-[980px] mx-auto ">
            <div class="grid grid-cols-2 gap-[0px] ">
                 <div>
                    <img src="${data.img}" />
                 </div>
                 <div class=" mt-[40px] ml-[0px] " >
                    <h1 class="text-[34px] font-[400] " >${data.name}</h1>
                    <p class="text-[#838c8c] " >${data.desc}</p>
                    <h1 class="text-[28px] text-red-400 " >Giá: ${data.price}</h1>
                    <button id="btnAddToCart" class="border border-black bg-indigo-500 text-white px-4 py-3">Giỏ hàng</button>
                    <p class="text-[20px] mt-[20px] font-[700] " >Liên hệ</p>
                    <ul class="mt-[30px] " >
                    
                        <span class="bg-blue-600 px-[10px] py-[4px] text-white hover:text-[18px] " ><i class="fa-brands fa-facebook-f"></i>Facebook</span>
                        <span class="bg-sky-500 px-[10px] py-[4px] text-white hover:text-[18px] " ><i class="fa-brands fa-facebook-messenger"></i>Messenger</span>
                        <span class="bg-sky-500 px-[10px] py-[4px] text-white hover:text-[18px] "><i class="fa-brands fa-twitter-square"></i>Twitter</span>
                    </ul>
                 </div>
            </div>
            <div class="my-[20px]  " >
                <h2 class="font-[800] mb-[8px] " >
                    Thành phần sản phẩm
                </h2> <hr class="max-w-[980px] my-[15px] " >
                <p class="text-[#838c8c] max-w-[450px] mb-[10px] " >${data.ingredient}</p>
            </div>
            
        </div>
        ${Footer.print()}
        `;
    },
    afterRender(id){
        $("#btnAddToCart").addEventListener("click", async () => {
            const { data } = await get(id);
            addToCart({...data, quantity: 1}, function(){
                toastr.success(`Thêm  ${data.name} vào giỏ hàng thành công!`);
            });
        });
    }
};
export default DetailProductPage;