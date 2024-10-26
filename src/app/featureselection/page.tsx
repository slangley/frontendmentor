import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import Image from 'next/image';

import { Poppins } from "next/font/google";

const cardData = [
    { title: "Supervisor", content: "Monitors activity to identify project roadblocks", image: "/images/featureselection/icon-supervisor.svg", styles: "border-t-[hsl(180,62%,55%)] lg:row-span-2 lg:m-auto" },
    { title: "Team Builder", content: "Scans our talent network to create the optimal team for your project", image: "/images/featureselection/icon-team-builder.svg", styles: "border-t-[hsl(0,78%,62%)]" },
    { title: "Karma", content: "Regularly evaluates our talent to ensure quality", image: "/images/featureselection/icon-karma.svg", styles: "border-t-[hsl(34,97%,64%)]" },
    { title: "Calculator", content: "Uses data from past projects to provide better delivery estimates", image: "/images/featureselection/icon-calculator.svg", styles: "border-t-[hsl(212,86%,64%)] lg:row-span-2 lg:m-auto" },
]

interface FeatureCardProps {
    title: string;
    content: string;
    image: string;
    styles: string;
}

function FeatureCard({ title, content, image, styles: color }: FeatureCardProps) {
    return <Card key={title} className={`w-[350px] h-[250px] ${color} border-t-[5px] p-2 rounded-md drop-shadow-xl`}>
                <CardHeader className="text-2xl font-semibold ">{title}</CardHeader>
                <CardContent className="text-[hsl(229,6%,66%)]">{content}</CardContent>
                <CardFooter className="flex-inline justify-end"><Image src={image} alt="alt" width={64} height={64} /></CardFooter>
            </Card>;
}
const poppins = Poppins({ subsets: ['latin'], weight: ["200","400", "600"] })

export default function FeatureSelection() {
    return (
        <main className={`${poppins.className} text-[hsl(234,12%,34%)] flex flex-col  items-center justify-center m-16`}>
                <div className="p-3 text-center lg:w-[50%]">
                    <div className="text-2xl font-extralight tracking-wide">Reliable, efficient delivery</div>
                    <div className="text-2xl font-semibold tracking-wide">Powered by Technology</div>
                    <p className="text-base font-regular text-[hsl(229,6%,66%)] text-center m-3">
                        Our Artificial Intelligence powered tools use millions of project data points
                        to ensure that your project is successful
                    </p>
                </div>
            <div className="flex items-center justify-center">
                <div className="grid lg:grid-flow-col grid-flow-row align-middle lg:grid-cols-3 lg:grid-rows-2 grid-cols-1 :first-child gap-5">
                    {cardData.map((card) => FeatureCard(card))}
                </div>
            </div>
        </main>
    )


}