
import Menu from "../components/menu";
import MenuAdmin from "../components/menuAdmin";


import TablePost from "../admin/deleteProduct";
const Products = {
    async print() {
        const response = await fetch("http://localhost:3001/products");

        const data= await response.json();
        return/*html*/ `
        ${Menu.print()}
        ${MenuAdmin.print()}

        <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      
        <table class="min-w-full divide-y divide-gray-200 text-center ">
          <thead class="bg-gray-50">
            <tr class="  " >
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Id
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th scope="col" class="px-6 text-center py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Content
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ingredient
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
              <th scope="col" >
              
              </th>
            </tr>
          </thead>
          
          <tbody class="bg-white divide-y divide-gray-200">
          ${data.map((post) => /*html*/`
            <tr>
              <td class="px-3 py-4 ">
                <div class="">${post.id}</div>
              </td>
              <td class="px-3 py-2 ">
                <div class="text-m text-gray-900">${post.name}</div>
                
              </td>
              <td class="px-3 py-2 ">
              <img src="${post.img}" alt="" />
              </td>
              <td class="px-3 py-2 ">
              <p>${post.price}</p>
              </td>
              <td class="px-3 py-2   text-sm text-gray-500">
              <p>${post.desc}</p>
              </td>
              <td class="px-3 py-2 text-sm text-gray-500">
              <p>${post.ingredient}</p>
              </td>
              <td class="px-3 py-2 whitespace-nowrap text-right text-sm font-medium">
                <a href="/admin/products/editProduct/${post.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button data-id="${post.id}" class="btn bg-red-500 p-3 rounded text-white inline-block">Delete</button>
              </td>
            </tr>`
    )
        .join("")
}
    
            </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        
     
            
        `;
    },
    afterRender(){
        TablePost.afterRender();
    }
};
export default Products;