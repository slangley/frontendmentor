import { Barlow_Semi_Condensed } from "next/font/google"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Image from "next/image";


const font = Barlow_Semi_Condensed({ subsets: ['latin'], weight: ["500", "600"] });

interface AvatarProps {
    image: string;
    name: string;
    title: string;
    className?: string;
}
function AnAvatar({ image, name, title, className }: AvatarProps): React.ReactElement {
    return <div className={`flex flex-row my-2 space-x-3 align-middle ${className}`}>
        <Avatar>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.split(' ').map(function (item) { return item[0] }).join('').toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
            <div className="text-sm">{name}</div>
            <div className="opacity-50 text-xs">{title}</div>
        </div>
    </div>;
}


function page() {
    return (
        <div className={`bg-[hsl(210,46%,95%)] ${font.className} flex min-h-screen justify-center items-center`}>
            <main className={`max-w-[1110px] grid md:grid-flow-row-dense sm:grid-cols-2 md:grid-rows-2 md:grid-cols-4 gap-[30px] p-4 m-auto  `}>
                <section className="md:col-span-2 bg-[hsl(263,55%,52%)] text-white rounded-xl flex flex-col p-8 gap-4
                            bg-[url('/images/testimonials/bg-pattern-quotation.svg')] bg-no-repeat bg-[right_4em_top_0]  shadow-xl">
                    <AnAvatar image="/images/testimonials/image-daniel.jpg" name="Daniel Clifford" title="Verified Graduate" className="text-white" />
                    <p className="text-xl  font-semibold leading-6">
                        I received a job offer mid-course, and the subjects I learned were current, if not more so,
                        in the company I joined. I honestly feel I got every penny’s worth.
                    </p>
                    <p className="opacity-70 text-[13px] font-medium leading-[18px]">
                        “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
                        transition and have heard some people who had an amazing experience here. I signed up
                        for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
                        The next 12 weeks was the best - and most grueling - time of my life. Since completing
                        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
                    </p>
                </section>
                <section className="md:col-span-1 bg-[hsl(217,19%,35%)] text-white rounded-xl flex  flex-col p-8 gap-4  shadow-xl">
                    <AnAvatar image="/images/testimonials/image-jonathan.jpg" name="Jonathan Walters" title="Verified Graduate" />
                    <p className="text-xl font-semibold  leading-6">The team was very supportive and kept me motivated</p>
                    <p className="opacity-70 font-medium text-[13px]  leading-[18px]">
                        “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
                        for a big company. This was one of the best investments I’ve made in myself. ”
                    </p>
                </section>
                <section className=" md:col-span-1 md:row-start-2 bg-white rounded-xl  flex  flex-col p-8 gap-4  shadow-xl">
                    <AnAvatar image="/images/testimonials/image-jeanette.jpg" name="Jeanette Harmon" title="Verified Graduate" />
                    <p className="text-xl font-semibold leading-6">An overall wonderful and rewarding experience</p>
                    <p className="opacity-70 text-[13px] font-medium leading-[18px]">
                        “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
                        while doing something I love. ”
                    </p>
                </section>
                <section className="md:col-span-2  bg-[hsl(219,29%,14%)] text-white rounded-xl  flex  flex-col p-8 gap-4 shadow-xl">
                    <AnAvatar image="/images/testimonials/image-patrick.jpg" name="Patrick Abrams" title="Verified Graduate" />
                    <p className="text-xl font-semibold leading-6">
                        Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
                        learning from their experiences was easy.
                    </p>
                    <p className="opacity-70 text-[13px] font-medium leading-[18px]">
                        “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
                        gave me the confidence necessary to be able to go out in the world and present myself as a capable
                        junior developer. The standard is above the rest. You will get the personal attention you need from
                        an incredible community of smart and amazing people. ”
                    </p>
                </section>
                <section className="md:row-span-2 md:col-start-4 bg-white rounded-xl flex  flex-col p-8 gap-4  shadow-xl">
                    <AnAvatar image="/images/testimonials/image-kira.jpg" name="Kira Whittle" title="Verified Graduate" />
                    <p className="font-semibold text-xl leading-6">Such a life-changing experience. Highly recommended!</p>
                    <p className="font-medium text-[13px] opacity-70 leading-[18px]">
                        “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
                        professionals who can help me learn programming step by step. I was encouraged to enroll by a former
                        student of theirs who can only say wonderful things about the program. The entire curriculum and staff
                        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
                        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
                        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
                        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
                        100% recommend! ”
                    </p>
                </section>
            </main>
        </div>
    )
}
export default page;

