import axios from "axios";
import Menu from "../components/menu";
import { reRender } from "../utils/rerender";
import MenuAdmin from "../components/menuAdmin";
import $ from "jQuery";
import validate from "jquery-validation";
const AddNew = {
  
    async print() {
        return /*html*/ `
        ${Menu.print()}
        ${MenuAdmin.print()}
<div>
<div class="place-content-center">
<h2 class="text-center text-3xl">Add New</h2>
  <div class="mt-5 md:mt-0 md:col-span-2">
    <form action="#" method="POST" id="form_add">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="grid grid-cols-3 gap-6">
            <div class="col-span-3 sm:col-span-2">
              <label for="company-website" class="block text-sm font-medium text-gray-700">
                Title
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
               
                <input type="text" name="title" id="company-website" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Title...">
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-6">
          <div class="col-span-3 sm:col-span-2">
            <label for="company-website" class="block text-sm font-medium text-gray-700">
              Author
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
             
              <input type="text" name="author" id="author" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Price...">
            </div>
          </div>
          </div>
          <div>
            <label for="about" class="block text-sm font-medium text-gray-700">
              About
            </label>
            <div class="mt-1">
              <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Content..."></textarea>
            </div>
            
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Content
            </label>
            <div class="mt-1">
              <textarea id="content" name="content" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Ingredient..."></textarea>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">
              Cover photo
            </label>
            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div class="space-y-1 text-center">
                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" class="sr-only">
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" id="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
</div>
        `;
    },
    afterRender(){
        const formAdd= $("#form_add");
        const imgPost = document.querySelector("#file-upload");

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dy6hidp44/image/upload";
        const CLOUDINARY_PRESET = "dtx90hmv";
        
        formAdd.validate({
            rules:{
                "title":{
                    required:true,
                    minlength:5,
                    maxlength:30
                },
                "author":{
                    required:true
                },
                "about":{
                    required:true
                },
                "content":{
                    required:true
                }
            },
            messages:{
                "title":{
                    required: "Bạn cần nhập tiêu đề",
                    minlength: "Ngắn quá, nhiều chữ lên",
                    maxlength: "Dài quá, ít thôi"
                },
                "author":{
                    required:"Nhập tên tác giả đi"
                },
                "about":{
                    required:"Nhập phần này đi"
                },
                "content":{
                    required:"Nhập phần này đi"
                }
            },
            submitHandler:()=>{
                async function addNewHandler(){
                    const file = imgPost.files[0];
                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("upload_preset", CLOUDINARY_PRESET);
                    const response = await axios.post(CLOUDINARY_API,formData, {
                        headers: {
                            "Content-Type": "application/form-data"
                        }
                    });
                    const add={
                        title:document.querySelector("#company-website").value,
                        author:document.querySelector("#author").value,
                        desc:document.querySelector("#content").value,
                        about:document.querySelector("#about").value,
                        img:response.data.url
                    };
                    axios.post("http://localhost:3001/posts", add);
                    document.location.href="/#/admin/news";
                    await reRender(AddNew, "#app");
                }
                addNewHandler();
            }
        });
       
    }
};
export default AddNew;