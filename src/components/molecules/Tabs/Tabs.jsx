"use client";

import React, { useState, useEffect } from "react";
import styles from "./Tabs.module.css";
import PropTypes from "prop-types";

const Tabs = ({
  tabs = [],
  activeTab,
  onTabChange,
  variant = "pill",
  className = "",
  disabled = false,
  animated = true,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(
    activeTab || tabs[0]?.value
  );

  // Sync internal state with external activeTab prop
  useEffect(() => {
    if (activeTab !== undefined) {
      setInternalActiveTab(activeTab);
    }
  }, [activeTab]);

  const handleTabClick = (tabValue, tabDisabled) => {
    if (disabled || tabDisabled) return;

    setInternalActiveTab(tabValue);
    onTabChange?.(tabValue);
  };

  const handleKeyDown = (event, tabValue, tabDisabled) => {
    if (disabled || tabDisabled) return;

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleTabClick(tabValue, tabDisabled);
    }
  };

  if (!tabs.length) {
    return null;
  }

  const containerClasses = [
    styles.tabsContainer,
    styles[variant],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={containerClasses}
      role="tablist"
      aria-orientation="horizontal"
    >
      <div className={styles.tabList}>
        {tabs.map((tab) => {
          const isActive = tab.value === internalActiveTab;
          const isDisabled = disabled || tab.disabled;

          const tabClasses = [
            styles.tab,
            styles[variant],
            isActive && styles.active,
            isDisabled && styles.disabled,
            animated && styles.animated,
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              key={tab.value}
              className={tabClasses}
              onClick={() => handleTabClick(tab.value, tab.disabled)}
              onKeyDown={(e) => handleKeyDown(e, tab.value, tab.disabled)}
              role="tab"
              aria-selected={isActive}
              aria-disabled={isDisabled}
              tabIndex={isActive ? 0 : -1}
              disabled={isDisabled}
              type="button"
            >
              {tab.icon && (
                <span className={styles.tabIcon} aria-hidden="true">
                  {tab.icon}
                </span>
              )}
              <span className={styles.tabLabel}>{tab.label}</span>
              {tab.badge && (
                <span
                  className={styles.tabBadge}
                  aria-label={`${tab.badge} notifications`}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  animated: PropTypes.bool,
};
