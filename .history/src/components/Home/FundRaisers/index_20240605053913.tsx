'use client'
import { eventCard } from '@/Helpers/types'
import styles from '../../../app/page.module.css'
import FeaturedCard from '../../Shared/Cards/Featured'
import Link from 'next/link'
import essay from '../../public/images/Picture1.png'
import medical from '../../../public/images/Picture2.png'
import sustainablity from '../../../public/images/greenhub.jpg'

const FundRaisers = () => {
    const content: eventCard[] = [
        {
            img: sustainablity,
            title: "GreenHub Sustainability 1.0",
            content: "Short detail on the sustainablity 1.0 event. ",
            comingSoon: false,
            slug: 'greencal-essay-competition'
        },
        {
            img: medical,
            title: "GreenHub Sustainability 2.0",
            content: "Short detail on the sustainablity 2.0 event. ",
            comingSoon: true
        },
    ]
    return (
        <div className={styles.funds}>
            <div className="container">
                <div className="row mb-3 justify-content-center">
                    <div className="col-md-8 text-center">
                        <h2>Latest Events</h2>
                        <p className="lead">These are our latest events and projects</p>
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                <ul className="px-0 py-0 list-group list-group-horizontal position-relative overflow-scroll d-flex w-100 mb-5">
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