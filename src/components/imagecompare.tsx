"use client"

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface ImageComparisonSliderProps {
    first: any;
    second: any;
}

export function ImageComparisonSlider({ first, second }: ImageComparisonSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const handleMouseDown = () => setIsDragging(true)
        const handleMouseUp = () => setIsDragging(false)
        const handleMouseLeave = () => setIsDragging(false)

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return

            const rect = container.getBoundingClientRect()
            const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
            const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))

            setSliderPosition(percent)
        }

        container.addEventListener('mousedown', handleMouseDown)
        container.addEventListener('mouseup', handleMouseUp)
        container.addEventListener('mouseleave', handleMouseLeave)
        container.addEventListener('mousemove', handleMouseMove)

        return () => {
            container.removeEventListener('mousedown', handleMouseDown)
            container.removeEventListener('mouseup', handleMouseUp)
            container.removeEventListener('mouseleave', handleMouseLeave)
            container.removeEventListener('mousemove', handleMouseMove)
        }
    }, [isDragging])

    return (
        <div className="max-w-2xl mx-auto my-8">
            <div
                ref={containerRef}
                className="relative w-full h-[900px] overflow-hidden select-none"
            >

                {first}
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    {second}
                </div>
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{ left: `calc(${sliderPosition}% - 1px)` }}
                >
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-600"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-600"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
