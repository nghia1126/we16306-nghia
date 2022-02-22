import { signup } from "../api/user";
import Menu from "../components/menu";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const SignUp={
    print(){
        return /*html*/ `
        ${Menu.print()}
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Đăng  kí tài khoản
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Or
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              start your 14-day free trial
            </a>
          </p>
      </div>
     
        <form action="" id="formSignup">
            <div class="mt-4">
                <div>
                    <label class="block" for="Name">Name<label>
                            <input id="name" type="text" placeholder="Name"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="mt-4">
                    <label class="block" for="email">Email<label>
                            <input id="email" type="text" placeholder="Email"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                <div class="mt-4">
                    <label class="block">Password<label>
                            <input id="password" type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                </div>
                
                <div class="flex">
                    <button class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                        Account</button>
                </div>
                <div class="mt-6 text-grey-dark">
                    Already have an account?
                    <a class="text-blue-600 hover:underline" href="#">
                        Log in
                    </a>
                </div>
            </div>
        </form>
    
    </div>
  </div>
        `;
    },
    afterRender(){
        const formSignup = document.querySelector("#formSignup");
        formSignup.addEventListener("submit", async e=>{
            e.preventDefault();
            try {
                const { data } = await signup({
                    name: document.querySelector("#name").value,
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });    
                if(data){
                    localStorage.setItem("user", JSON.stringify(data.user));
                    
                    setTimeout(()=>{

                        toastr.success("Bạn đã đăng kí thành công");
                        document.location.href="/";
                        
                    }, 2000);
                }
            }catch (error) {
                toastr.error(error.response.data);
            }
            
        });

    }
};
export default SignUp;