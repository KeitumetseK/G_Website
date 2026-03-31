import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import classes from "./ServicesCard.module.css";
import Link from "next/link";
import LinkLoader from "@/components/atoms/LinkLoader/LinkLoader";

export default function ServicesCard({ data, className }) {
  return (
    <Link href={`/services/${data?.slug}`}>
    <div className={clsx(classes.main, className)}>
      <div className={classes.image}>
        <Image src={data.image} alt="services-icon" fill />
      </div>
      <div className={classes.content}>
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>
    </div>
    <LinkLoader />
    </Link>
  );
}

ServicesCard.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
  }),
  className: PropTypes.string,
};
