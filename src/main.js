import Navigo from "navigo";
import AddNew from "./admin/addNews";
import Dashboard from "./admin/dashboard";
import News from "./admin/news";
import SignIn from "./admin/signIn";
import SignUp from "./admin/signUp";


import DetailNewsPage from "./pages/detailNews";
import HomePage from "./pages/home";


const router = new Navigo("/");
const render = (content) => {
    //document.getElementById("header").innerHTML = Menu.print();
    document.getElementById("main").innerHTML = content;
};

router.on({
    "/": () => {
        render(HomePage.print());
    },
    
    
    "/news/:id":({data})=>{
        const {id}=data;
        render(DetailNewsPage.render(id));
    },
    "/admin/dashboard": ()=>{
        render(Dashboard.print());
    },
    "/admin/signIn": ()=>{
        render(SignIn.print());
    },
    "/admin/signUp": ()=>{
        render(SignUp.print());
    },
    "/admin/news": ()=> {
        render(News.print());
    },
    "/admin/addNews": ()=> {
        render(AddNew.print());
    },
    "/admin/news/:id/edit":({data})=>{
        const {id}= data;
        render(DetailNewsPage.render(id));
    }
});
router.resolve();