import { getCate } from "../../api/posts";
// import { $ } from "../../utils";
// import { addToCart } from "../../utils/cart";
// import toastr from "toastr";
import "toastr/build/toastr.min.css";

const DetailCategoryPage = {
    async render(id) {
        const { data } = await getCate(id);
        console.log(data);
        return `
            <h1>${data.name}</h1>
            <div class="grid grid-cols-5 gap-8">${data.posts.map(post => `
                <div class="border border-black">
                    <h3>${post.title}</h3>
                </div>
            `).join("")}</div>
            <button id="btnAddToCart" class="border border-black bg-indigo-500 text-white px-4 py-3">Giỏ hàng</button>
        `;
    },
    
};
export default DetailCategoryPage;