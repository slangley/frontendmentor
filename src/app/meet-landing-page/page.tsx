import { Red_Hat_Display } from "next/font/google"

import Image from 'next/image';
import { Button } from "~/components/ui/button";

const font = Red_Hat_Display({ subsets: ['latin'] });








const MeetLandingPage = () => {
    return (
        <div className={`${font.className} min-w-screen`}>
            <h1 className="text-4xl sr-only">Meet Landing Page</h1>

            <div className="flex flex-col items-center justify-center min-h-screen  bg-[hsl(0,0%,98%)] gap-8 p-4">
                <Image className="m-4" src="/images/meet-landing-page/logo.svg" alt="alt" width={102} height={28} />
                <div className="flex flex-row w-full relative">
                    <Image className="absolute -left-10" src="/images/meet-landing-page/desktop/image-hero-left.png" alt="alt" width={350} height={350} />
                        <div className="p-4 max-w-lg flex flex-col text-center m-auto">
                            <p className="text-6xl font-black ">Group Chat for Everyone</p>
                            <p className="text-slate-600 text-lg font-medium leading-7">Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
                            <div className="flex-inline p-4 text-white space-x-3 text-base">
                                <Button className="rounded-full bg-cyan-600">Download <span className="text-cyan-300">v1.3</span></Button>
                                <Button className="rounded-full bg-purple-600">What is it?</Button>
                            </div>
                    </div>
                    <Image className="absolute -right-10" src="/images/meet-landing-page/desktop/image-hero-right.png" alt="alt" width={350} height={350} />

                </div>
                <div className="flex align-middle justify-center flex-col items-center">
                    <div className="w-[2px] h-[50px] bg-slate-600"></div>
                    <p className="text-slate-600 rounded-full w-[50px] h-[50px] bg-white border-2 border-slate-500 text-center align-middle p-3">01</p>
                </div>

                <div className="flex flex-row gap-2">
                    <div >
                        <Image className="rounded-md" src="/images/meet-landing-page/desktop/image-man-texting.jpg" alt="alt" width={256} height={256} />
                    </div>
                    <div className="rounded-md">
                        <Image className="rounded-md"  src="/images/meet-landing-page/desktop/image-men-in-meeting.jpg" alt="alt" width={256} height={256} />
                    </div>
                    <div className="rounded-md">
                        <Image className="rounded-md"  src="/images/meet-landing-page/desktop/image-woman-in-videocall.jpg" alt="alt"  width={256} height={256} />
                    </div>
                    <div className="rounded-md">
                        <Image className="rounded-md"  src="/images/meet-landing-page/desktop/image-women-videochatting.jpg" alt="alt"  width={256} height={256} />
                    </div>
                </div>




                <p className="text-cyan-600 uppercase tracking-widest">Built for modern use</p>

                <p className="font-black text-4xl">Smarter meetings, all in one place</p>

                <p className="font-medium text-lg leading-7 text-slate-600">
                    Send messages, share files, show your screen, and record your meetings — all in one
                    workspace. Control who can join with invite-only team access, data encryption, and data export.
                </p>

                <div className="flex align-middle justify-center flex-col items-center">
                    <div className="w-[2px] h-[50px] bg-slate-600"></div>
                    <p className="text-slate-600 rounded-full w-[50px] h-[50px] bg-white border-2 border-slate-500 text-center align-middle p-3">02</p>
                </div>


            </div>
            <footer className="relative">
                    <Image className="bottom-0 w-full h-auto" src="/images/meet-landing-page/desktop/image-footer.jpg" alt="alt" width={500} height={200} />
                    <div className="absolute bottom-0 left-0 z-50 w-full h-full grid grid-cols-3 align-center items-center">
                        <div>Experience more together</div>
                        <div>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</div>
                        <Button>Download v1.3</Button>
                    </div>

                </footer>
        </div>
    )
}

export default MeetLandingPage