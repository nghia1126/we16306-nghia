
import { get } from "../api/posts";
import Menu from "../components/menu";
import Footer from "../components/footer";


const DetailNewsPage = {
    async print(id) {
        
        // const result = data.find((post) => post.id === id);
        const { data } = await get(id);
        return /*html*/`
        ${Menu.print()}
        <div class="max-w-[1200px] mx-auto text-black ">
            <div class=" gap-[0px] ">
            <h2 class="text-[44px] font-[400] mt-[15px] " >${data.title}</h2>
            <h5 class="text-[18px] text-red-400 " >Tác  giả: ${data.author}</h5>
            <img src="${data.img}" />
            <ul class="mt-[30px] " >  
                <span class="bg-blue-600 px-[10px] py-[4px] text-white hover:text-[18px] " ><i class="fa-brands fa-facebook-f"></i>Facebook</span>
                <span class="bg-sky-500 px-[10px] py-[4px] text-white hover:text-[18px] " ><i class="fa-brands fa-facebook-messenger"></i>Messenger</span>
                <span class="bg-sky-500 px-[10px] py-[4px] text-white hover:text-[18px] "><i class="fa-brands fa-twitter-square"></i>Twitter</span>
            </ul>   
                 <div class=" mt-[40px] ml-[0px] " >
                    
                    <p class="text-stone-600 font-bold text-[24px] " >${data.about}</p>
                    
                   
                    
                 </div>
            </div>
            <div class="my-[20px]  " >
            <p class="text-[#838c8c] text-[18px] " >${data.desc}</p>
            </div>
            
        </div>
        ${Footer.print()}
        `;
    },
    
};
export default DetailNewsPage;