import Menu from "../components/menu";
import Footer from "../components/footer";
const AboutPage = {
    async print() {
        return /*html*/`
        <div class="menu">
                ${Menu.print()}
        </div>
        <div class="mx-[180px] mt-[30px] mb-[15px]  " >
            <h2 class="text-[40px] font-bold " >Giới thiệu</h2>
            <p class="mb-[5px] " > <span class="font-bold" >“Đi cà phê”</span> từ lâu không đơn thuần chỉ là uống một tách cà phê mà còn là dịp gặp mặt và trò chuyện cùng bạn bè. 
            Tại Coffee House, chúng tôi trân trọng và đề cao giá trị kết nối giữa con người và trải nghiệm của khách hàng. <br>
            Chúng tôi được truyền cảm hứng từ những tách cà phê và thức uống mình tạo ra. Chúng tôi tin tưởng mạnh mẽ rằng thức uống với 
            chất lượng tốt nhất được phục vụ trong không gian thân thiện.</p>
            <p>Tại Coffee House, nguyên liệu làm ra cà phê và tất cả các loại thức uống đều được chọn lọc từ những nguồn cung ứng được kiểm định gắt gao, đáp ứng tiêu chuẩn chất lượng cao nhất.
             Và một “nguyên liệu” quan trọng hơn hết chúng tôi đưa vào từng sản phẩm
             là sự tâm huyết của cả đội ngũ nhân viên Coffee House. <br>
            Niềm đam mê với hương vị, sự nhiệt thành khi phục vụ, kĩ năng pha chế được đào tạo chuyên sâu là tất cả những gì Coffee House
             cam kết khi phục vụ bất kì sản phẩm nào cho khách hàng nhằm tạo ra trải nghiệm <span>“đi cà phê”</span> tốt nhất cho bạn.</p>
        </div>

        <div class="menu">
                 ${Footer.print()}
        </div>
        `;
    }
};
export default AboutPage;