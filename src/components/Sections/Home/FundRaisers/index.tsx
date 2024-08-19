"use client";
import { eventCard } from "@/Helpers/types";
import styles from "../../../../app/page.module.css";
import FeaturedCard from "../../../Shared/Cards/Featured";
import medical from "../../../../../public/images/sus2.jpeg";
import hangout from "../../../../../public/images/2024hangout.jpg";
import sustainablity from "../../../../../public/images/sustainability-1.0.jpeg";
import unveiling from "../../../../../public/images/IMG_6972.jpg";
import anniv from "../../../../../public/images/1st-anniversary.jpeg";

const FundRaisers = () => {
  const content: eventCard[] = [
    {
      img: anniv,
      title: "One Year of Environmental Sustainability Advocacy Campaign",
      content:
        "In celebration of the 1st Year Anniversary of its operations and of the Environmental Sustainability Challenge advocacy campaign, the University of Lagos (UNILAG) Green Hub, in collaboration with the Works and Physical Planning Unit, and the Students Affairs Division, held a “Recycling Bazaar” at the Indoor Sports Hall of the University of Lagos Sports Centre on Tuesday, June 25, 2024.",
      comingSoon: false,
      slug: "https://unilag.edu.ng/?p=39624",
    },
    {
      img: unveiling,
      title: "The Unveiling of UNILAG GREENHUB",
      content:
        "The Deputy Vice-Chancellor (Management Services) thereafter led the contingent to the University of Lagos Main Shopping Complex, where the Green Hub is located. <br /><br /> There, as the Vice-Chancellor's representative, Professor Lucian Chukwu formally unveiled the UNILAG Green Hub, a resource centre for the educational awareness of willing...",
      comingSoon: false,
      slug: "https://unilag.edu.ng/?p=23190",
    },
    {
      img: sustainablity,
      title: "GreenHub Sustainability 1.0",
      content:
        "UNILAG Environmental Sustainability Challenge & Recycling Bazar kicked off on Thursday, March 23, 2023 at the Tayo Aderinokun Hall with an Official Opening Ceremony. <br /><br /> Well-attended, the event was graced by hundreds of students and staff of the University of Lagos who found an outlet to express their love for the environment. <br /><br /> The Deputy Vice-Chancellor (Management Services), Professor Lucian Chukwu, represented the Vice-Chancellor at the event. He commended the organisers of the programme for coming up with the idea and for demonstrating that the Future-Ready vision of the Vice-Chancellor for the University of Lagos is a very feasible one. ",
      comingSoon: false,
      slug: "https://www.youtube.com/watch?v=CxVqnVaOB0o",
    },
    {
      img: medical,
      title: "GreenHub Sustainability 2.0",
      content:
        "The second edition of the University of Lagos Environmental Sustainability Challenge formally kicked off on Wednesday, December 13, 2023 with a campus-wide sensitisation campaign. <br /><br /> Composed of volunteers at the UNILAG Green Hub and some members of the University of Lagos Green Club, the campaign train took off from the Faculty of Science, informing students and passers-by of the commencement of the challenge and the benefits that await them when they sign up for participation. ",
      comingSoon: false,
      slug: "https://unilag.edu.ng/?p=31147",
    },
    // {
    //   img: hangout,
    //   title: "2023 Children Summer Sustainability Hangout",
    //   content:
    //     "The hangout, organised for children who are currently on holiday, is targeted at teaching them about circularity and waste recycling on campus ",
    //   comingSoon: false,
    //   slug: "https://unilag.edu.ng/?p=25304",
    // },
    {
      img: hangout,
      title: "2024 Children Summer Sustainability Hangout",
      content:
        "The University of Lagos Green Hub is set to commence its 2024 Children Summer Sustainability Hangout. <br /><br />The University of Lagos Green Hub is set to commence its 2024 Children Summer Sustainability Hangout. ",
      comingSoon: false,
      slug: "https://unilag.edu.ng/?p=40602",
    },
  ];
  return (
    <div className={`${styles.funds} mx-auto`}>
      <div className="container mb-10 mx-auto w-fit">
        <div className="row mb-3 justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="text-3xl lg:text-[40px]">Latest Events</h2>
            <p className="lead text-xl">
              These are our latest events and projects
            </p>
          </div>
        </div>
      </div>

      <div className={`md:pl-5 lg:pl-16 flex`}>
        <ul className="px-0 py-0 flex no-scrollbar relative overflow-scroll d-flex w-full mb-5">
          {content.map((x, i) => (
            <li className="list-group-item mx-3 px-0 py-o border-0" key={i}>
              <FeaturedCard
                title={x.title}
                comingSoon={x.comingSoon}
                img={x.img}
                slug={x.slug}
                content={x.content}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FundRaisers;
