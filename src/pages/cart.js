import { $ } from "../utils";
import { decreaseItemInCart, increaseItemInCart, removeItemInCart } from "../utils/cart";
import { reRender } from "../utils/rerender";
import Menu from "../components/menu";
import Footer from "../components/footer";

const CartPage = {
    print(){
        let cart=[];
        if(localStorage.getItem("cart")){
            cart=JSON.parse(localStorage.getItem("cart"));
            return  /*html*/  `
            <div class="banner">
                ${Menu.print()}
        </div>
        <div class="max-w-[980px] mx-auto " >
        
            <h3 class="text-[20px] text-black " >Sản phẩm bạn đã mua</h3>
            <table>
               <thead >
                <tr class="bg-slate-400 px-[10px] py-[35px] " >
                    <th>Tên sản phẩm</th>
                    
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                ${cart.map((item) => `
                    <tr>
                        <td>${item.name}</td>
                        
                        <td class="px-4">${item.price}
                            
                        
                        <td>
                            <button  data-id="${item.id}" class="btn increase border border-black p-2">+</button>
                            <span>${item.quantily}</span>
                            <button  data-id="${item.id}" class="btn decrease border border-black p-2">-</button>
                        </td>
                        <td>
                            <button data-id="${item.id}" class="btn remove border bg-red-400 px-4 py-3 text-white">Remove</button>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
            <tfoot>
                <tr><td colspan="2" class="text-right">Tổng là: <span id="total">null</span></td></tr>
            </tfoot>
        </table>
        </div>
        <div class="banner">
                ${Footer.print()}
        </div>
        `;
        }
        // const cart = JSON.parse(localStorage.getItem("cart"));
        return`
            
        `;
    },
    afterRender(){
        const btns = $(".btn");
        btns.forEach(btn => {
            btn.addEventListener("click", function(){
                const id = btn.dataset.id;
                if(btn.classList.contains("increase")){
                    increaseItemInCart(id);
                } else if (btn.classList.contains("decrease")){
                    decreaseItemInCart(id);
                } else {
                    removeItemInCart(id, function(){
                        reRender(CartPage, "#app");
                    });
                }
            });
        });
    }
};
export default CartPage;