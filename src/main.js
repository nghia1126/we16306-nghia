import Navigo from "navigo";
import AddNew from "./admin/addNews";
import AddProduct from "./admin/addProduct";
import Dashboard from "./admin/dashboard";
import editNew from "./admin/editNew";
import editProduct from "./admin/editProduct";
import News from "./admin/news";
import Products from "./admin/products";
import SignIn from "./admin/signIn";
import SignUp from "./admin/signUp";
import AboutPage from "./pages/about";
import CartPage from "./pages/cart";
import ContactPage from "./pages/contact";
import DetailProductPage from "./pages/detailProducts";
import DetailNewsPage from "./pages/detailPosts";
import HomePage from "./pages/home";
import PostPage from "./pages/posts";
import ProductsPage from "./pages/products";
import ShopPage from "./pages/shop";


const router = new Navigo("/", { linksSelector: "a", hash:true });

const render =  async (content, id) => {
    //document.getElementById("header").innerHTML = Menu.print();
    document.getElementById("main").innerHTML = await content.print(id);
    if(content.afterRender) content.afterRender(id);
};

router.on("/admin/*", () =>{}, {
    // Phương thức before được gọi trước khi render nội dung ra trình duyệt
    before: (done) => {
        if(localStorage.getItem("user")){
            // lấy id trong localStorage
            const userId = JSON.parse(localStorage.getItem("user")).id;
            // Nếu userid == 1 thì render
            if(userId === 1){
                done();
            } else {
                // ngược lại nếu ko phải admin quay về trang chủ
                document.location.href="/";
            }
        } else {
            document.location.href="/";
        }
        
    }
});

router.on({
    "/": () => {
        render(HomePage);
    },
    "/about": () => {
        render(AboutPage);
    },
    "/shop": () => {
        render(ShopPage);
    },
    "/post": () => {
        render(PostPage);
    },
    "/contact": () => {
        render(ContactPage);
    },
    "/products": () => {
        render(ProductsPage);
    },
    "/products/:id":({data})=>{
        render(DetailProductPage, data.id);
    },
    
    "/cart": ()=>{
        render(CartPage);
    },
    "/posts/:id":({data})=>{
        render(DetailNewsPage, data.id);
    },
    // "/news/:id":({data})=>{
    //     render(DetailNewsPage, data.id);
    // },
    "/admin/dashboard": ()=>{
        render(Dashboard);
    },
    "/signIn": ()=>{
        render(SignIn);
    },
    "/signUp": ()=>{
        render(SignUp);
    },
    "/admin/news": ()=> {
        render(News);
    },
    "/admin/products": ()=> {
        render(Products);
    },
    "/admin/addProduct": ()=> {
        render(AddProduct);
    },
    
    "/admin/products/editProduct/:id":({data})=>{
        // const {id}= data;
        render(editProduct, data.id);
    },
    "/admin/addNews": ()=> {
        render(AddNew);
    },
    // "/admin/news/editNews/:id":({data})=>{
    //     const {id}= data;
    //     render(EditNew.print(id));
    // }
    "/admin/news/editNew/:id":({data})=>{
        // const {id}= data;
        render(editNew, data.id);
    }
});
router.resolve();