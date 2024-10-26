"use client"

import { ImageComparisonSlider } from "~/components/imagecompare"
import Image from 'next/image'


export default function ComparisonPage() {
    return (
            <div className="w-[1440px] h-[900px]">
                <ImageComparisonSlider  first={  <Image
                            src="/images/featureselection/desktop-design.jpg"
                            alt="Before"
                            width={1440}
                            height={900}
                            className="absolute top-0 left-0 w-full h-full object-cover  bg-white"
                        />} second={ <iframe
                            src={"http://localhost:3000/featureselection"}
                            title="Webpage to compare"
                            className="absolute top-0 left-0 w-full h-full border-0 bg-white"
                          />}/>
            </div>
    );
}