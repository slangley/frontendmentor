"use client"

import { ImageComparisonSlider } from "~/components/imagecompare"
import Image from 'next/image'


export default function ComparisonPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Image Comparison</h1>
            <ImageComparisonSlider  first={  <Image
                        src="/assets/images/recipe/image-omelette.jpeg"
                        alt="Before"
                        width={600}
                        height={400}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />} second={ <iframe
                        src={"http://localhost:3000/blogpreview"}
                        title="Webpage to compare"
                        className="absolute top-0 left-0 w-full h-full border-0"
                      />}/>
        </div>
    )
}