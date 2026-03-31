"use client";
import PropTypes from "prop-types";
import HeadingSection from "@/components/molecules/HeadingSection/HeadingSection";
import PricingCard from "@/components/molecules/PricingCard/PricingCard";
import Tabs from "@/components/molecules/Tabs/Tabs";
import { useState, useMemo } from "react";
import classes from "./OptimizePerformanceSection.module.css";

// Map tab values to service dropdown values
const getServiceFromTab = (tabValue) => {
  const serviceMap = {
    "fully-managed-hosted-virtual-servers": "managed-hosted-vm",
    "gole-unmanaged-hosted-virtual-servers": "unmanaged-hosted-vm",
  };
  return serviceMap[tabValue] || null;
};

export default function OptimizePerformanceSection({
  showTabs = true,
  data: externalData,
  pageName = "Services",
}) {
  const data = externalData;

  const [activeTab, setActiveTab] = useState(
    showTabs && data.tabs && data.tabs.length > 0 ? data.tabs[0].value : null
  );

  const getCurrentPricingCards = () => {
    if (Array.isArray(data.pricingCards)) {
      return data.pricingCards;
    }
    if (showTabs && activeTab && data.pricingCards[activeTab]) {
      return data.pricingCards[activeTab];
    }
    const firstKey = Object.keys(data.pricingCards || {})[0];
    return firstKey ? data.pricingCards[firstKey] : [];
  };

  const currentPricingCards = getCurrentPricingCards();

  // Get service type based on active tab
  const serviceType = useMemo(() => getServiceFromTab(activeTab), [activeTab]);

  return (
    <div className={classes.main}>
      <HeadingSection
        className={classes.headingSection}
        title={data?.headingSection?.title}
        description={data?.headingSection?.description}
      />

      {showTabs && data?.tabs && data?.tabs?.length > 0 && (
        <div className={classes.tabs}>
          <Tabs
            tabs={data?.tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className={classes.tabsContainer}
          />
        </div>
      )}
      <div className={classes.pricingCards}>
        {currentPricingCards.map((card, index) => (
          <PricingCard 
            key={card?.id || index} 
            data={card} 
            pageName={pageName}
            serviceType={serviceType}
          />
        ))}
      </div>
    </div>
  );
}

const pricingCardShape = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.string,
  frequency: PropTypes.string,
  description: PropTypes.string,
});

OptimizePerformanceSection.propTypes = {
  showTabs: PropTypes.bool,
  data: PropTypes.shape({
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
      })
    ),
    pricingCards: PropTypes.oneOfType([
      PropTypes.arrayOf(pricingCardShape),
      PropTypes.objectOf(PropTypes.arrayOf(pricingCardShape)),
    ]),
    headingSection: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  }),
  pageName: PropTypes.string,
};
