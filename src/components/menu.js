const Menu = {
    print()  {
        return /*html*/`
         <div class="header">
      <div class="bg-[#272f54]">
        <a href=""><img class="mx-auto py-4" src="https://picsum.photos/100/100" alt=""></a>
      </div>
      <div class="bg-[#b27b34]">
        <ul class="flex">
          <li><a href="/" class="block py-2 px-3 text-white  hover:underline underline-offset-4 ">Trang chủ</a></li>
          <li><a href="" class="block py-2 px-3 text-white hover:underline underline-offset-4">Tuyển sinh</a></li>
          <li><a href="/admin/signIn" class="block py-2 px-3 text-white hover:underline underline-offset-4">Đăng kí</a></li>
          <li><a href="/admin/signUp" class="block py-2 px-3 text-white hover:underline underline-offset-4">Đăng nhập</a></li>
          <li><a href="/admin/dashboard" class="block py-2 px-3 text-white hover:underline underline-offset-4">Admin</a></li>
          <form action="" class="block py-3 px-4 text-white ">
            <input type="text">
            <button class="border-5 bg-cyan-900  px-[5px] text-white hover:bg-cyan-600">TÌM KIẾM</button>
          </form>
        </ul>

      </div>
    </div>
        `;
    },
};
export default Menu;