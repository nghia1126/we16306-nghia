import Menu from "../components/menu";
import Footer from "../components/footer";
import { getAll } from "../api/posts";


const PostPage={
    async print(){
        const { data } = await getAll();
        return /*html*/ `
        <div class="banner">
                ${Menu.print()}
        </div>
        <div class=" mt-[10px] ">
            <img class="max-w-[1200px] mx-auto " src="https://www.ncausa.org/portals/56/Images/AboutCoffee/NCA_Web_Large_coffee-beans-history.png?ver=2018-02-28-115401-897" alt="" />
        </div>
        <div class="max-w-[1200px] mx-auto ">
            <h4 class="text-[38px] font-bold  text-[#664d42] " >Tin tức</h4>
            <p class="text-[18px]">Giữa Sài Gòn đô thị phồn hoa luôn sống nhanh và hối hả, đôi khi chúng ta cần tìm lại một nơi để có một khoảng lặng cho riêng mình, hay cùng với người bạn đời của mình ngồi với nhau trong một khu vườn cổ tích đầy mộng mơ.
             Mình biết một nơi sẽ cho bạn lại một cảm giác này đó, hãy cùng mình tới đây xem thử nhé!</p>
        </div>
        
        <div class=" max-w-[1200px] mx-auto my-[20px]  ">
            ${data.map((post) => /* html */`
            
                <div class="border mb-[10px]  flex">
                    <div class="relative " >
                        <a href="/posts/${post.id}">
                            <img class="w-[90%] mt-[10px] ml-[10px] " src="${post.img}" alt="" />
                        </a>
                    </div>
                    <div class="text-black ml-auto text-left ">
                        <a href="/posts/${post.id}">
                            <h5 class="my-[10px] text-[28px] font-bold hover:text-red-500	 ">${post.title}</h5>
                        </a>
                            <p class="text-slate-600 text-[18px]  " >${post.about}</p>
                            <span class="text-slate-600  " >Tác giả,</span><span class="ml-[5px] text-[14px] font-bold " >${post.author}</span> <br>
                            <a href="/posts/${post.id}">
                            <button class="border-[2px] mb-[10px] mr-[10px]  hover:bg-[#c54d2f] text-[18px] hover:text-[#FFF]  " >Đọc thêm</button>
                        </a>
                    </div>
                    
                       
                    
                </div>
                
                    
                
            `).join("")}
        </div>
        
        <div class="">
                ${Footer.print()}
        </div>
        `;
    }
};
export default PostPage;