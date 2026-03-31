import clsx from "clsx";
import PropTypes from "prop-types";
import classes from "./HeadingSection.module.css";

export default function HeadingSection({ title, description, className }) {
  return (
    <div className={clsx(classes.headingSection, className)}>
     {title && <p className={classes.title}>{title}</p>}
      {description && <p className={classes.description}>{description}</p>}
    </div>
  );
}
HeadingSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};
