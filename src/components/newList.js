
import { getAll } from "../api/products";

const NewsList = {
    async print() {
        const { data } = await getAll();


        return /* html */`
        <div class="text-center mb-7">
            <img class="max-w-[70px] mx-auto py-[25px] "  src="https://res.cloudinary.com/dy6hidp44/image/upload/v1644594523/logoNho_nfox76.png" alt="" />
            
                <p class="text-[70px] text-amber-800 font-['cursive'] ">Menu</p>
                <img class="max-w-[980px] mx-auto py-[25px] " src="https://res.cloudinary.com/dy6hidp44/image/upload/v1644595762/menuimg_vkynwm.png" alt="" />
                <div class="grid grid-cols-3 gap-10 max-w-[980px]  mx-auto">
                    <div class="px-[50px] py-[20px] " style="background-color: aqua;">
                        <img src="https://bizweb.dktcdn.net/100/159/843/themes/211392/assets/index_special_strong.png?1638342170883"
                            alt="">
                        <p class="text-[28px] font-mono "  >Sáng tạo <br> hương và vị</p>
                        <button class=" text-[18px] border-[1px] border-black mt-[10px] px-[10px] py-[3px] hover:text-white " style="background-color:aqua ;">CHI TIẾT</button>
                    </div>
                    <div class="px-[50px] py-[20px] " style="background-color: burlywood;">
                        <img src="https://bizweb.dktcdn.net/100/159/843/themes/211392/assets/index_special_strong.png?1638342170883"
                            alt="">
                        <p class="text-[28px] font-mono " >Bánh quy <br> & nhiều hơn</p>
                        <button class=" text-[18px] border-[1px] border-black mt-[10px] px-[10px] py-[3px] hover:text-white " style="background-color:burlywood ;">CHI TIẾT</button>
                    </div>
                    <div class="px-[50px] py-[20px] " style="background-color: darkseagreen;">
                        <img src="https://bizweb.dktcdn.net/100/159/843/themes/211392/assets/index_special_special.png?1638342170883"
                            alt="">
                        <p class="text-[28px] font-mono " >Đặc biệt <br> niềm vui</p>
                        <button class=" text-[18px] border-[1px] border-black mt-[10px] px-[10px] py-[3px] hover:text-white " style="background-color:darkseagreen ;">CHI TIẾT</button>
                    </div>
                </div>
                <img class="max-w-[980px] mx-auto py-[15px] " src="https://res.cloudinary.com/dy6hidp44/image/upload/v1644597081/G%E1%BB%8Di_%C4%91i%E1%BB%87n_giao_h%C3%A0ng_t%E1%BA%ADn_n%C6%A1i_g3qfsr.png" alt="">
                <div class="relative">
                    <div class="img">
                        <img style="max-width: 100%;" src="https://res.cloudinary.com/dy6hidp44/image/upload/v1644597272/Untitled_design_sik13i.png" alt="">
                    </div>
                    <div class="absolute text-right right-[120px] top-[150px] w-[850px] h-[850px] text-white ">
                        <h2 class="text-[40px] mb-[15px] ">"COFFEE HOUSE"<br>
                            CỬA HÀNG CÀ PHÊ PREMIUM</h2>
                        <p class="text-[18px] font-['oblique'] " >Cà phê không phải là thú thanh thản như trà, càng không mạnh mẽ bạo liệt như rượu. <br> Người thưởng
                            thức nhẹ nhàng cho rằng cà phê là gạch nối giữa niềm vui và nỗi buồn. <br> Với ai đang muộn phiền,
                            cà phê càng day dứt như một bản nhạc có nhiều dấu lặng. <br>
                            Còn với những kẻ là tín đồ cà phê thì cho đó là người đàn bà mang bùa ngải trong mình...</p>
                            <a href="/about">
                        <button type="button" class="bg-[#dc3545] px-[5px] py-[7px] mt-[5px] border-[#dc3545] rounded-[5px] hover:bg-red-600 ">TÌM HIỂU THÊM</button>
                        </a>
                        </div>
                </div>
                <img class="max-w-[70px] mx-auto py-[25px] "  src="https://res.cloudinary.com/dy6hidp44/image/upload/v1644594523/logoNho_nfox76.png" alt="" />
            
                <p class="text-[70px] text-amber-800 font-['cursive'] ">Shop Coffee</p>
        </div>
        <div class="grid grid-cols-3 gap-10 max-w-[980px] mx-auto ">
            ${data.map((post) => /* html */`
                <div class="border text-center">
                    <div class="relative " >
                        <a href="/news/${post.id}">
                            <img class="w-full " src="${post.img}" alt="" />
                        </a>
                        <div class="bg-[#3f3530]   pt-[15px] text-white ">
                            <span class="absolute  right-[160px] bottom-[120px] bg-[#d29484] text-[18px] text-white py-[10px] px-[10px] border-[#d29484] rounded-[5px] hover:text-[22px]  " >${post.price} </span>
                            <h5 class="my-[10px] text-[20px] font-bold ">${post.name}</h5>
                            <a href="/news/${post.id}">
                            <button class="bg-[#d07a64] mt-[25px] h-[50px] w-full hover:bg-[#c54d2f] text-[18px] hover:text-[22px]  " >Chi tiết</button>
                            </a>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
        </div class="" style="margin-top:15px"  >
            <a  href="/shop">
                <button style="margin-left:707px" class=" bg-[#e68484] border-[#e68484] rounded-[5px] mt-[10px] px-[15px] py-[8px] hover:bg-[#c54d2f] text-white " >XEM THÊM</button>
            </a>
        </div>
        <div class="flex items-center bg-[#3b3433] mt-[10px] px-[80px] py-[15px] ">
            <img src="https://res.cloudinary.com/dy6hidp44/image/upload/v1644602356/saleoff_g0j3jq.png" alt="">
            <p class="ml-[80px] text-white ">Trên tất cả các hương vị <br>

                <span class="text-[60px] font-['serif'] " >CHỈ THỨ SÁU</span></p>
        </div>
        <div class="text-center">
            <img class="max-w-[70px] mx-auto py-[25px] "  src="https://res.cloudinary.com/dy6hidp44/image/upload/v1644594523/logoNho_nfox76.png" alt="" />
                
            <p class="text-[70px] mx-auto text-amber-800 font-['cursive'] ">Khách hàng</p>
        </div>
        <div class="max-w-[980px] mx-auto my-[25px] ">
            <div class="flex items-center ">
                <div class="max-w-full flex items-center ">
                    <div>
                        <img src="https://res.cloudinary.com/dy6hidp44/image/upload/v1644603034/customer_f1dbfr.jpg" alt="">
                    </div>

                    <div style="margin-left: 10px;">
                        <h5>TÊN KHÁCH HÀNG</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
                            molestias mollitia corrupti excepturi, doloremque perspiciatis non sit

                        </p>
                    </div>
                </div>
                <div class="max-w-full flex items-center">
                    <div>
                        <img src="https://res.cloudinary.com/dy6hidp44/image/upload/v1644603294/nhan_vien1_t8vrkj.jpg" alt="">
                    </div>

                    <div style="margin-left: 10px;">
                        <h5>TÊN KHÁCH HÀNG</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
                            molestias mollitia corrupti excepturi, doloremque perspiciatis non sit
                        </p>
                    </div>

                </div>
            </div>
        </div>
        <div class="text-center">
            <img class="max-w-[70px] mx-auto py-[25px] "  src="https://res.cloudinary.com/dy6hidp44/image/upload/v1644594523/logoNho_nfox76.png" alt="" />
                
            <p class="text-[70px] mx-auto text-amber-800 font-['cursive'] ">Liên hệ</p>
        </div>

        `;
    },
};
export default NewsList;