'use client'
import { eventCard } from '@/Helpers/types'
import styles from '../../../../app/page.module.css'
import FeaturedCard from '../../../Shared/Cards/Featured'
import medical from '../../../../../public/images/sust-2.jpeg'
import hangout from '../../../../../public/images/summer-hangout.png'
import sustainablity from '../../../../../public/images/sustainability-1.0.jpeg'
import unveiling from '../../../../../public/images/greenhub_unveiling.jpeg'

const FundRaisers = () => {
    const content: eventCard[] = [
        {
            img: unveiling,
            title: "The Unveiling of UNILAG GREENHUB",
            content: "Short detail on the event of the unveiling of greenhub ",
            comingSoon: false,
            slug: 'greenhub-unveiling'
        },
        {
            img: sustainablity,
            title: "GreenHub Sustainability 1.0",
            content: "Short detail on the sustainablity 1.0 event. ",
            comingSoon: false,
            slug: 'greenhub-sustainability-1.0'
        },
        {
            img: medical,
            title: "GreenHub Sustainability 2.0",
            content: "Short detail on the sustainablity 2.0 event. ",
            comingSoon: false,
            slug: 'greenhub-sustainability-2.0'
        },
        {
            img: hangout,
            title: "2023 Children Summer Sustainability Hangout",
            content: "Short detail on the GreenHub Summer Hangout. ",
            comingSoon: false,
            slug: 'children-summer-sustainability-hangout'
        },
    ]
    return (
        <div className={`${styles.funds} mx-auto`}>
            <div className="container mb-10 mx-auto w-fit">
                <div className="row mb-3 justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2 className='text-3xl lg:text-[40px]'>Latest Events</h2>
                        <p className="lead text-xl">These are our latest events and projects</p>
                    </div>
                </div>
            </div>

            <div className={`md:pl-16 lg:pl-20 flex`}>
                <ul className="px-0 py-0 flex no-scrollbar relative overflow-scroll d-flex w-full mb-5">
                    {content.map((x, i) => (
                        <li
                            className="list-group-item mx-3 px-0 py-o border-0"
                            key={i}
                        >
                            <FeaturedCard title={x.title} comingSoon={x.comingSoon} img={x.img} slug={x.slug} content={x.content} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default FundRaisers