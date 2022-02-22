import Menu from "../components/menu";
import Footer from "../components/footer";
import { getAll } from "../api/products";

const ShopPage={
    async print(){
        const { data } = await getAll();
        return /*html*/ `
        <div class="banner">
                ${Menu.print()}
        </div>
        <h2 class="text-[40px] font-bold ml-[30px] text-[#664d42] " >Cửa hàng Coffee</h2>
        <div class="grid grid-cols-3 gap-10 max-w-[980px] mx-auto my-[20px]  ">
            ${data.map((post) => /* html */`
            
                <div class="border text-center">
                    <div class="relative " >
                        <a href="/products/${post.id}">
                            <img class="w-full " src="${post.img}" alt="" />
                        </a>
                        <div class="bg-[#3f3530]   pt-[15px] text-white ">
                            <span class="absolute  right-[160px] bottom-[120px] bg-[#d29484] text-[18px] text-white py-[10px] px-[10px] border-[#d29484] rounded-[5px] hover:text-[22px]  " >${post.price} </span>
                            <h5 class="my-[10px] text-[20px] font-bold ">${post.name}</h5>
                            <a href="/products/${post.id}">
                            <button class="bg-[#d07a64] mt-[25px] h-[50px] w-full hover:bg-[#c54d2f] text-[18px] hover:text-[22px]  " >Chi tiết</button>
                            </a>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
        <div class=" my-[30px]  " >
            <img class="max-w-[980px] mx-auto " src="https://res.cloudinary.com/dy6hidp44/image/upload/v1644983691/bannerShop_uomhts.png" alt="" />
        </div>
        <div class="">
                ${Footer.print()}
        </div>
        `;
    }
};
export default ShopPage;