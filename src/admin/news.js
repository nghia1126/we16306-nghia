
import Menu from "../components/menu";
import data from "../data";

const News = {
    print() {
        return/*html*/ `
        ${Menu.print()}
        ${data.map((post) => `

        <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
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
                Content
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-3 py-4 whitespace-nowrap">
                <div class="">
                 
                  
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-m text-gray-900">${post.title}</div>
                
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
              <img src="${post.img}" alt="" />
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <p>${post.desc}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="/admin/news/edit/${post.id}" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr>

          
        </table>
      </div>
    </div>
  </div>
</div>
        
        `

    )}
            
        


        `;
    },
};
export default News;