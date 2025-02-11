import { assets } from "../assets/assets";

function Navbar() {
    return (

        <div class="flex items-center justify-between">
            <div class="flex cursor-pointer items-center gap-[19px]">
                <img src={assets.logo} alt="" />
                <span class="text-[24px] font-[600]">Fudo</span>
            </div>

            <div class="hidden items-center gap-[44px] text-[14px] font-[500] md:flex lg:gap-15">
                <a href="">Why Fudo?</a>
                <a href="">Services</a>
                <a href="">Menu</a>
                <a href="">Contact</a>
            </div>

            <div class="flex items-center gap-[22px]">
                <img src={assets.search_icon} alt="" />
                <img src={assets.cart_icon} alt="" />
                <button class="h-[49px] w-[120px] cursor-pointer rounded-[50px] bg-[#EB5757] text-[14px] font-[500] text-[#F2F2F2] transition-all duration-300 hover:bg-[#FF6B6B] hover:shadow-lg">Login</button>
            </div>
        </div>


    );
}

export default Navbar;