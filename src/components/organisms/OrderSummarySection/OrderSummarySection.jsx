import Button from "@/components/atoms/Button";
import PricingCard from "@/components/molecules/PricingCard/PricingCard";
import { IoChevronBack } from "react-icons/io5";
import PropTypes from "prop-types";
import classes from "./OrderSummarySection.module.css";
import Link from "next/link";
export default function OrderSummarySection({ data }) {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <p>Order Summary</p>
        <div>
          <Link href="/services">
            <Button
              leftIcon={<IoChevronBack size={24} color="white" />}
              label={"Back to Services"}
              variant="primary"
            />
          </Link>
          <Button label={"Checkout"} variant="primary" />
        </div>
      </div>

      <div className={classes.pricingCards}>
        {data?.map((card, index) => (
          <PricingCard key={card?.id || index} data={card} />
        ))}
      </div>
    </div>
  );
}

OrderSummarySection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      price: PropTypes.string,
      frequency: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};
