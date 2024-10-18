import { Button } from "~/components/ui/button";
import Image from "next/image";

import { Fraunces, Montserrat } from "next/font/google";


const fraunces = Fraunces({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function ProductDetails() {
    return (
        <div className={`${montserrat.className}  sm:flex items-center justify-center p-6 bg-yellow-400 min-h-screen `}>


            <div className="bg-white  sm: m-auto sm:rounded-tl-xl sm:rounded-bl-xl  rounded-bl-none rounded-tl-xl  rounded-tr-xl sm:rounded-tr-none flex flex-col flex-0 sm:flex-row   sm:max-w-xl items-center object-center">

                <Image className="rounded-t-xl sm:hidden block object-fill w-full" src="/assets/images/product-details/image-product-mobile.jpg" alt="alt" width={343} height={240}/>
                <Image className="rounded-l-xl sm:block hidden" src="/assets/images/product-details/image-product-desktop.jpg" alt="alt" width={343} height={240}   />
                <div className="p-6 flex flex-col gap-3">

                    <h1 className={`tracking-[0.3em] uppercase ${montserrat.className} text-[12px] text-[#6C7289]`}>Perfume</h1>
                    <h2 className={`${fraunces.className} font-bold text-3xl`}>Gabrielle Essence Eau De Parfum</h2>
                    <p className={`font-normal text-[14px]  text-[#6C7289]`}>
                        A floral, solar and voluptuous interpretation composed by Olivier Polge,
                        Perfumer-Creator for the House of CHANEL.
                    </p>
                    <div className="flex flex-row gap-2 justify-start">
                        <div className={`${fraunces.className} font-bold text-3xl text-[#3D8168] `}>$149.99</div>
                        <div className="line-through py-3 text-[13px]">$169.99</div>
                    </div>
                    <Button size="lg" className="rounded-none flex flex-row text-white bg-[#3D8168] hover:bg-[#1A4032]"><Image src="/assets/images/product-details/icon-cart.svg" alt="Cart Icon" width={15} height={15} /><div >Add to Cart</div></Button>
                </div>
            </div>

        </div>
    )
}