import Menu from "../components/menu";
import Footer from "../components/footer";

const ContactPage={
    async print(){
        return /*html*/ `
        <div class="banner">
                ${Menu.print()}
        </div>

        <div class="max-w-[1250px] mx-auto ">
            <h2 class=" text-[#664d42] text-[60px] font-serif mt-[30px] "> Liên hệ</h2>
            <p class=" text-[#664d42] " >Coffe House trân trọng, mong muốn trải nghiệm đi cà phê của bạn tốt hơn từng ngày. 
            Hãy để chúng tôi có cơ hội được cải thiện chất lượng phục vụ bằng góp ý của bạn tại đây!</p>
            <div class="flex justify-between items-center mx-[30px] mt-[40px] " >
                <div>
                    <ul>
                        <li class=" text-[40px] font-['Archaic_serif'] text-[#664d42] font-[600] mb-[5px] " ><i class="fa-solid fa-location-dot text-[#dc8068] text-[50px] leading-[70px] mr-[30px] mb-[60px] "></i> 26 / Quang Trung</li>
                        <li class=" text-[40px] font-['Archaic_serif'] text-[#664d42] font-[600] mb-[5px] " ><i class="fa-solid fa-phone text-[#dc8068] text-[50px] leading-[70px] mr-[30px] mb-[60px] "></i>0343290746</li>
                        <li class=" text-[40px] font-['Archaic_serif'] text-[#664d42] font-[600] " ><i class="fa-solid fa-envelope text-[#dc8068] text-[50px] leading-[70px] mr-[30px] mb-[60px] "></i>coffeehouse@gmail.com</li>
                    </ul>
                </div>
                <div class=" mb-[90px] " >
                    <h2 class=" text-[#664d42] text-[40px] font-serif mb-[20px] ">Liên hệ với chúng tôi</h2>
                    <div > 
                        <input type="text" class=" h-[40px] mt-[20px] mr-[10px] mb-[15px] border-red-600 " placeholder="Họ tên" value="" name="contact[Name]" required="">
                        <input type="email" class="form-control h-[40px]" placeholder="Địa chỉ Email" value="" name="contact[email]" required=""> <br>

                    </div>
                    <textarea placeholder="Nội dung liên hệ" class="textarea w-full h-[60px] border-red-600 " name="contact[Body]" required=""></textarea> <br>
                    <button type="submit" class="bg-[#dc8068] text-white px-[15px] py-[10px] border-[#dc8068] ">Gửi liên hệ</button>

                </div>
            </div>
        </div>

        <div class="banner">
                ${Footer.print()}
        </div>
        `;
    }
};
export default ContactPage;