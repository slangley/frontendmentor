"use client"

import { ImageComparisonSlider } from "~/components/imagecompare"
import Image from 'next/image'


export default function ComparisonPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Image Comparison</h1>
            <ImageComparisonSlider  first={  <Image
                        src="/assets/images/sociallinks/original/destkop-design.jpg"
                        alt="Before"
                        width={1440}
                        height={900}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />} second={ <iframe
                        src={"http://localhost:3000/sociallinks"}
                        title="Webpage to compare"
                        className="absolute top-0 left-0 w-full h-full border-0"
                      />}/>
        </div>
    )
}