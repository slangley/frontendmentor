import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import Image from 'next/image';
import { Badge } from "~/components/ui/badge";

import { Figtree } from "next/font/google";

const f = Figtree({ subsets: ['latin'] })

export default function BlogPreview() {
    return (
        <main>
            <h1 className="sr-only">Blog Preview</h1>
            <div className={`${f.className} min-h-screen flex items-center justify-center  bg-yellow-400 text-gray-950 text-base`}>
                <Card className="max-w-md outline outline-2 outline-black shadow-[10px_10px_0px_0px_rgba(0,0,0)]">
                    <CardHeader>
                        <Image className="rounded-xl w-full h-auto" src="/assets/images/blogpreview/illustration-article.svg"
                            alt="Blog Preview" width={336} height={201} />

                    </CardHeader>
                    <CardContent className="flex flex-col justify-normal gap-2">
                        <Badge variant="outline" className="w-fit bg-yellow-400"><div className="p-1 font-bold">Learning</div></Badge>
                        <div className="text-sm">Published 21 Dec 2023</div>
                        <div className="text-lg font-extrabold"> HTML & CSS foundations</div>
                        <div className="text-gray-500">These languages are the backbone of every website, defining structure, content, and presentation.</div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex flex-row items-center justify-center gap-2">
                            <Image className="rounded-full" src="/assets/images/blogpreview/image-avatar.webp" alt="Greg Hooper" width={30} height={30} />
                            <div className="font-bold">Greg Hooper</div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </main>
    )
}

