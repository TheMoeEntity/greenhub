import { title } from "process";
import styles from "./cards.module.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const FeaturedCard = ({
  img,
  title,
  comingSoon,
  content,
  slug,
}: {
  title: string;
  comingSoon: boolean;
  img: StaticImageData;
  content: string;
  slug?: string;
}) => {
  return (
    <div className={styles.featured}>
      <div className={styles.img}>
        <Image
          alt="Image of our event and initiatives"
          style={{ objectFit: "cover" }}
          src={img}
          fill
          quality={100}
          priority={true}
        />
      </div>
      <div className={styles.deets}>
        <h5 className="font-semibold text-2xl">{title}</h5>
        <div>
          <p
            className="text-xs leading-normal my-5"
            dangerouslySetInnerHTML={{ __html: content }}
          ></p>
        </div>
        <div style={{ color: "gray" }}>
          {/* $23,000 raised */}
          <button disabled={comingSoon}>
            <Link href={slug ?? ""}>
              {comingSoon ? "Coming soon.." : "View event"}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
