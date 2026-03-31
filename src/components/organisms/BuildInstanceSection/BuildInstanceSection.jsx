import Counter from "@/components/atoms/Counter/Counter";
import DropDown from "@/components/molecules/DropDown";
import HeadingSection from "@/components/molecules/HeadingSection/HeadingSection";
import InstancePricingCard from "@/components/molecules/InstancePricingCard/InstancePricingCard";
import Tabs from "@/components/molecules/Tabs/Tabs";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import { Form } from "react-bootstrap";
import classes from "./BuildInstanceSection.module.css";

export default function BuildInstanceSection({ data, id }) {
  // Static values
  const activeTab = data?.billingCycle?.tabs?.[0]?.value;
  const region = data?.region?.options?.[0]?.value || null;
  const instanceType = data?.instanceType?.options?.[0]?.value || null;
  const billingPeriod = activeTab === "monthly" ? "monthly" : "yearly";

  // Resource min/max values
  const cpuMin = data?.resources?.cpuCores?.min || 1;
  const cpuMax = data?.resources?.cpuCores?.max || 16;
  const memoryMin = data?.resources?.memoryRam?.min || 1;
  const memoryMax = data?.resources?.memoryRam?.max || 32;
  const ssdMin = data?.resources?.ssdStorage?.min || 1;
  const ssdMax = data?.resources?.ssdStorage?.max || 1000;

  // Separate states for counters (independent from sliders)
  const [cpuCoresCounter, setCpuCoresCounter] = useState(
    data?.resources?.cpuCores?.min || 1
  );
  const [memoryRamCounter, setMemoryRamCounter] = useState(
    data?.resources?.memoryRam?.min || 1
  );
  const [ssdStorageCounter, setSsdStorageCounter] = useState(
    data?.resources?.ssdStorage?.min || 1
  );

  // Separate states for sliders (independent from counters)
  const [cpuCoresSlider, setCpuCoresSlider] = useState(
    data?.resources?.cpuCores?.min || 1
  );
  const [memoryRamSlider, setMemoryRamSlider] = useState(
    data?.resources?.memoryRam?.min || 1
  );
  const [ssdStorageSlider, setSsdStorageSlider] = useState(
    data?.resources?.ssdStorage?.min || 1
  );

  // Additional services state
  const [enabledServices, setEnabledServices] = useState({});

  const handleServiceToggle = (serviceId) => {
    setEnabledServices((prev) => ({
      ...prev,
      [serviceId]: !prev[serviceId],
    }));
  };

  // Counter handlers (independent - only update counter state)
  const handleCpuCoresCounterChange = (newValue) => {
    const clampedValue = Math.max(cpuMin, Math.min(cpuMax, newValue));
    setCpuCoresCounter(clampedValue);
  };

  const handleMemoryRamCounterChange = (newValue) => {
    const clampedValue = Math.max(memoryMin, Math.min(memoryMax, newValue));
    setMemoryRamCounter(clampedValue);
  };

  const handleSsdStorageCounterChange = (newValue) => {
    const clampedValue = Math.max(ssdMin, Math.min(ssdMax, newValue));
    setSsdStorageCounter(clampedValue);
  };

  // Slider handlers (independent - only update slider state)
  const handleCpuCoresSliderChange = (newValue) => {
    const clampedValue = Math.max(cpuMin, Math.min(cpuMax, newValue));
    setCpuCoresSlider(clampedValue);
  };

  const handleMemoryRamSliderChange = (newValue) => {
    const clampedValue = Math.max(memoryMin, Math.min(memoryMax, newValue));
    setMemoryRamSlider(clampedValue);
  };

  const handleSsdStorageSliderChange = (newValue) => {
    const clampedValue = Math.max(ssdMin, Math.min(ssdMax, newValue));
    setSsdStorageSlider(clampedValue);
  };

  // Instance pricing card data
  const instancePricingCard = {
    title: data?.instancePricingCard?.title,
    totalPrice: data?.instancePricingCard?.totalPrice,
    billingPeriod: billingPeriod,
    description: data?.instancePricingCard?.description,
    costBreakdown: data?.instancePricingCard?.costBreakdown,
    disclaimer: data?.instancePricingCard?.disclaimer,
  };

  // Calculate gradient percentage helper
  const calculateGradientPercentage = (value, min, max) => {
    if (value <= min) return 0;
    if (value >= max) return 100;
    return ((value - min) / (max - min)) * 100;
  };

  const resourceConfigs = [
    {
      key: "cpuCores",
      counterValue: cpuCoresCounter,
      counterOnChange: handleCpuCoresCounterChange,
      sliderValue: cpuCoresSlider,
      sliderOnChange: handleCpuCoresSliderChange,
      min: cpuMin,
      max: cpuMax,
      label: data?.resources?.cpuCores?.label,
      basePrice: data?.resources?.cpuCores?.basePrice || 11.84,
    },
    {
      key: "memoryRam",
      counterValue: memoryRamCounter,
      counterOnChange: handleMemoryRamCounterChange,
      sliderValue: memoryRamSlider,
      sliderOnChange: handleMemoryRamSliderChange,
      min: memoryMin,
      max: memoryMax,
      label: data?.resources?.memoryRam?.label,
      basePrice: data?.resources?.memoryRam?.basePrice || 11.84,
    },
    {
      key: "ssdStorage",
      counterValue: ssdStorageCounter,
      counterOnChange: handleSsdStorageCounterChange,
      sliderValue: ssdStorageSlider,
      sliderOnChange: handleSsdStorageSliderChange,
      min: ssdMin,
      max: ssdMax,
      label: data?.resources?.ssdStorage?.label,
      basePrice: data?.resources?.ssdStorage?.basePrice || 11.84,
    },
  ];

  return (
    <>
      <style>
        {`
          .form-switch .form-check-input {
            width: 36px !important;
            height: 20px !important;
            cursor: pointer;
          }
        `}
      </style>
      <div className={classes.main} id={id}>
        <HeadingSection
          className={classes.headingSection}
          title={data?.headingSection?.title || "Build Your Perfect Instance"}
          description={
            data?.headingSection?.description ||
            "Configure your specifications and watch the pricing update in real-time"
          }
        />

        <div className={classes.contentSection}>
          <div className={classes.left}>
            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <p>
                  {data?.contentHeader?.title ||
                    "Configure Your Specifications"}
                </p>
                <p>
                  {data?.contentHeader?.description ||
                    "Adjust each component to match your requirements"}
                </p>
              </div>
              <div className={classes.contentBody}>
                <div className={classes.billingCycleContainer}>
                  <div className={classes.billingCycle}>
                    <p>{data?.billingCycle?.label || "Billing Cycle"}</p>
                    <Tabs
                      tabs={
                        data?.billingCycle?.tabs || [
                          { label: "Monthly", value: "monthly" },
                          { label: "Yearly", value: "yearly" },
                        ]
                      }
                      activeTab={activeTab}
                      onTabChange={() => {}}
                      className={classes.billingCycleTabs}
                    />
                  </div>

                  <div className={classes.dropdownsContainer}>
                    <DropDown
                      label={data?.region?.label || "Region"}
                      options={data?.region?.options || []}
                      value={region}
                      setValue={() => {}}
                      className={classes.dropdown}
                    />
                    <DropDown
                      label={data?.instanceType?.label || "Instance Type"}
                      className={classes.dropdown}
                      options={data?.instanceType?.options || []}
                      value={instanceType}
                      setValue={() => {}}
                    />
                  </div>
                </div>

                <div className={classes.specificationsContainer}>
                  {resourceConfigs.map((config) => {
                    // Use static default value for price display (not dependent on counter/slider)
                    const staticValue = config.min;
                    const gradientPercent = calculateGradientPercentage(
                      config.sliderValue,
                      config.min,
                      config.max
                    );
                    const price = (staticValue * config.basePrice).toFixed(2);
                    return (
                      <div key={config.key} className={classes.resourceConfig}>
                        <div className={classes.resourceConfigHeader}>
                          <p className={classes.resourceLabel}>
                            {config.label}
                          </p>
                          <Counter
                            value={config.counterValue}
                            setValue={config.counterOnChange}
                          />
                        </div>
                        <div className={classes.sliderWrapper}>
                          <input
                            type="range"
                            min={config.min}
                            max={config.max}
                            value={config.sliderValue}
                            onChange={(e) =>
                              config.sliderOnChange(Number(e.target.value))
                            }
                            className={classes.slider}
                            style={{
                              background: `linear-gradient(90deg, #03D9CC 0%, #4BA6FF ${gradientPercent}%, #F1F5F9 ${gradientPercent}%, #F1F5F9 100%)`,
                            }}
                          />
                        </div>
                        <div className={classes.resourceFooter}>
                          <span className={classes.resourcePrice}>
                            R{price}/{billingPeriod}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {data?.additionalServices && (
              <div className={classes.content}>
                <div className={classes.contentHeader}>
                  <p className={classes.contentHeaderTitle}>
                    {data.additionalServices.title || "Additional services"}
                  </p>
                </div>
                <div
                  className={clsx(
                    classes.contentBody,
                    classes.additionalServicesBody
                  )}
                >
                  {data.additionalServices.services?.map((service) => (
                    <div key={service.id} className={classes.serviceCard}>
                      <div className={classes.cardLeft}>
                        <p>{service.title}</p>
                        <p>{service.description}</p>
                        <p>
                          +R{service.price.toFixed(2)}/{billingPeriod}
                        </p>
                      </div>
                      <Form.Check
                        type="switch"
                        id={`${service.id}-switch`}
                        checked={enabledServices[service.id] || false}
                        onChange={() => handleServiceToggle(service.id)}
                        className={classes.switchToggle}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className={classes.right}>
            <InstancePricingCard
              title={instancePricingCard.title}
              totalPrice={instancePricingCard.totalPrice}
              billingPeriod={instancePricingCard.billingPeriod}
              description={instancePricingCard.description}
              costBreakdown={instancePricingCard.costBreakdown}
              onAddToCart={() => {}}
              onGetAssistance={() => {}}
              disclaimer={instancePricingCard.disclaimer}
            />
          </div>
        </div>
      </div>
    </>
  );
}

BuildInstanceSection.propTypes = {
  data: PropTypes.shape({
    headingSection: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
    contentHeader: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
    billingCycle: PropTypes.shape({
      label: PropTypes.string,
      tabs: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.string,
        })
      ),
    }),
    region: PropTypes.shape({
      label: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.string,
        })
      ),
    }),
    instanceType: PropTypes.shape({
      label: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          value: PropTypes.string,
        })
      ),
    }),
    resources: PropTypes.shape({
      cpuCores: PropTypes.shape({
        label: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number,
        basePrice: PropTypes.number,
      }),
      memoryRam: PropTypes.shape({
        label: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number,
        basePrice: PropTypes.number,
      }),
      ssdStorage: PropTypes.shape({
        label: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number,
        basePrice: PropTypes.number,
      }),
    }),
    additionalServices: PropTypes.shape({
      title: PropTypes.string,
      services: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          description: PropTypes.string,
          price: PropTypes.number,
        })
      ),
    }),
    pricingCard: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      disclaimer: PropTypes.string,
      baseInstancePrice: PropTypes.number,
    }),
    instancePricingCard: PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      totalPrice: PropTypes.number,
      description: PropTypes.string,
      costBreakdown: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          price: PropTypes.number,
        })
      ),
      disclaimer: PropTypes.string,
    }),
  }),
};
