import { StaticImageData } from "next/image"

export type eventCard = {
    img: StaticImageData,
    title: string
    content: string
    comingSoon: boolean
    slug?: string
}