import { reRender } from "../utils/rerender";
import toastr from "toastr";
const Menu = {
    print() {
        return /*html*/`
         <div class="max-h-[130px] bg-[#291505d0] flex">
            <div>
                  <a href=""><img class=" max-w-[180px] max-h-[130px] ml-10 py-4 px-3" src="https://seeklogo.com/images/C/coffee-house-design-logo-7E2E5E9D93-seeklogo.com.jpg" alt=""></a>
            </div>
            <div class="my-10 ml-20">
            
                <ul class="flex">
                      
                      <li><a href="/" class="block py-2 px-3 text-[18px] text-white  font-serif  hover:underline underline-offset-4  ">TRANG CHỦ</a></li>
                      <li><a href="/about" class="block py-2 px-3 text-[18px] text-white font-serif hover:underline underline-offset-4">GIỚI THIỆU</a></li>
                      <li><a href="/post" class="block py-2 px-3 text-[18px] text-white font-serif hover:underline  underline-offset-4">TIN TỨC</a></li>
                      <li><a href="/shop" class="block py-2 px-3 text-[18px] text-white font-serif hover:underline underline-offset-4">CỬA HÀNG</a></li>
                      <li><a href="/contact" class="block py-2 px-3 text-[18px] text-white font-serif hover:underline underline-offset-4">LIÊN HỆ</a></li>
                      <li><a href="/signIn" class="block py-2 px-3 text-[18px] text-white font-serif hover:underline underline-offset-4">ĐĂNG NHẬP</a></li>
                      <li class="text-white mt-[7px] ml-[230px] hover:underline " ><i class="fa-solid fa-cart-arrow-down"></i><a href="/cart">Giỏ hàng<a></li>
                </ul>
                ${localStorage.getItem("user") ? `
                <ul class="flex space-x-4 items-center pr-4">
                    <li class="flex items-center">Xin chào <span id="account-email" class="block px-4 py-3 text-white"></span></li>
                    <li id="logout" type = "submit" class="cursor-pointer">Logout</li>
                </ul>`: ""}
                
            </div>
        </div>
      
    
        `;
    },
    afteRender() {
        const accountEmail = document.querySelector("#account-email");
        if (accountEmail) {
            accountEmail.innerHTML = JSON.parse(localStorage.getItem("user")).email;
        }
        const logout = document.querySelector("#logout");
        if (logout) {
            logout.addEventListener("click",  ()=> {
                const confirm= window.confirm("Bạn chắc chắn chứ :)))?");
                if(confirm){
                    localStorage.removeItem("user");
                    toastr.success("Đăng xuất thành công.");
                    reRender(Menu, "#main");
                    
                }
                
            });
        }

    }

};
export default Menu;