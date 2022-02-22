const Footer = {
    print() {
        return/*html*/ `
        <footer class="flex justify-between bg-gray-300  px-[30px] ">
        <div class="text-[24px] text-black mr-[50px] mt-[35px] ">
            <p class="text-[34px] font-['cursive'] font-bold " >Ghé thăm cửa hàng chúng tôi</p>
            <span class="text-[18px]" >Địa chỉ: 26 Quang Trung, Tiền Tiến, Hải Dương</span> <br>
            <span class="text-[18px]">Email: <a class="underline text-orange-600" href="">nghiaphamvan2002@gmail.com </a></span> <br>
            <span class="text-[18px]">Sđt: 0343290746</span>
        </div>
        <div >
            <img class="max-w-[250px] ml-[30px] mt-[25px] " src="https://res.cloudinary.com/dy6hidp44/image/upload/v1644604106/thank_cstkck.png" alt="">
        </div>
        <div>
            <iframe class="w-[340px] h-[280px] py-[35px] mr-[30px] " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29816.82713008579!2d106.34972036216577!3d20.908159595098173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31358520bfc84259%3A0xd45ebdbe577f4214!2zVOG7gW4gVGnhur9uLCBUaGFuaCBIw6AsIEjhuqNpIETGsMahbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1642643413194!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </footer>
            
        `;
    },
};
export default Footer;