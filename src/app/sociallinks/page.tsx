import { Inter } from "next/font/google"
import { Button } from "~/components/ui/button"
import { Card, CardContent } from "~/components/ui/card"
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    return (

        <main className="bg-[color:hsl(0,0%,8%)]">
            <h1 className="sr-only">Social Links</h1>
            <div className={`${inter.className} min-h-screen min-w-[360px] sm:min-w-full flex  flex-col items-center justify-center`}>

                <Card className="min-w-[360px] rounded-3xl bg-[color:hsl(0,0%,12%)] text-white border-none p-3">

                    <CardContent className="text-center items-center flex flex-col gap-3">

                        <div className="pt-5">
                            <Image className="rounded-full" src="/assets/images/sociallinks/avatar-jessica.jpeg" alt="alt" width={80} height={80} />
                        </div>
                        <div className="text-2xl" >Jessica Randall</div>
                        <div className="text-sm text-[color:hsl(75,94%,57%)]">London, United Kingdom</div>
                        <div className="text-xs py-3 ">&quot;Front-end developer and avid reader.&quot;</div>
                        <Button size="lg" className="w-full bg-[color:hsl(0,0%,20%)] hover:bg-[color:hsl(75,94%,57%)] hover:text-[color:hsl(0,0%,20%)]"><div className="p-4">GitHub</div></Button>
                        <Button size="lg" className="w-full bg-[color:hsl(0,0%,20%)] hover:bg-[color:hsl(75,94%,57%)] hover:text-[color:hsl(0,0%,20%)]">Frontend Mentor</Button>
                        <Button size="lg" className="w-full bg-[color:hsl(0,0%,20%)] hover:bg-[color:hsl(75,94%,57%)] hover:text-[color:hsl(0,0%,20%)]">LinkedIn</Button>
                        <Button size="lg" className="w-full bg-[color:hsl(0,0%,20%)] hover:bg-[color:hsl(75,94%,57%)] hover:text-[color:hsl(0,0%,20%)]">Twitter</Button>
                        <Button size="lg" className="w-full bg-[color:hsl(0,0%,20%)] hover:bg-[color:hsl(75,94%,57%)] hover:text-[color:hsl(0,0%,20%)]">Instagram</Button>
                    </CardContent>
                </Card>
            </div>

            <div className="text-sm text-center text-[color:hsl(228,45%,44%)]">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Sean Langley</a>.
            </div>
        </main>
    )
}