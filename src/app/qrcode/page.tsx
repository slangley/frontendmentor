import { Card, CardContent, CardFooter } from "~/components/ui/card";
import Image from 'next/image';
import {Outfit} from 'next/font/google'

const outfit = Outfit({subsets: ['latin']})

export default function QRCode() {
  return (
  <div className="bg-slate-300 ">
        <div className={`${outfit.className} min-h-screen flex items-center justify-center `}>
            <Card className="max-w-xs rounded-3xl">
                <CardContent className="flex flex-col items-left justify-center p-4">
                        <Image className="rounded-xl w-full h-auto" src="/assets/images/qrcode/image-qr-code.png" alt="QR Code" width={290} height={290} />
                </CardContent>
                <CardFooter className="flex flex-col py-4 items-left justify-center text-center gap-2 m-2">
                <div className="text-slate-900 text-xl font-semibold">Improve your front-end skills by building projects</div>
                <div className="text-slate-400">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</div>
                </CardFooter>
            </Card>
        </div>
  </div>
  )
}