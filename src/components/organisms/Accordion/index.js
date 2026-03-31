"use client";
import PropTypes from "prop-types";
import React from "react";
import { Accordion } from "react-bootstrap";
import classes from "./Accordion.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import LinkLoader from "@/components/atoms/LinkLoader/LinkLoader";

export default function AccordionComponent({ data = [], onLinkClick }) {
  const pathname = usePathname();

  return (
    <>
      <style>
        {`
        .accordion-button{
        padding:0 !important;
        }
      `}
      </style>
      <div className={classes.accordionWrapper}>
        <Accordion className={classes.accordion} defaultActiveKey="">
          {data.map((item, index) => {
            const hasSubItems = item?.subItems && item.subItems.length > 0;

            // If item has no subItems, render as simple link
            if (!hasSubItems) {
              // Special handling for Home route - only active when pathname is exactly "/"
              const isHomeRoute = item.path === "/";
              const isActive = isHomeRoute
                ? pathname === "/"
                : item.path === pathname ||
                  pathname.startsWith(item.path + "/");
              return (
                <Link
                  key={item?.path || `nav-item-${index}`}
                  href={item.path}
                  className={clsx(
                    classes.simpleLink,
                    isActive && classes.activeLink
                  )}
                  onClick={onLinkClick}
                >
                  {item.title}
                  <LinkLoader />
                </Link>
              );
            }

            // If item has subItems, render as accordion item
            return (
              <Accordion.Item
                key={item?.path || `accordion-item-${index}`}
                className={classes.accordionItem}
                eventKey={item?.path || `accordion-item-${index}`}
              >
                <Accordion.Header className={classes.accordionHeader}>
                  {item.title}
                </Accordion.Header>
                <Accordion.Body className={classes.accordionBody}>
                  <Accordion
                    className={classes.nestedAccordion}
                    defaultActiveKey=""
                  >
                    {item.subItems.map((subItem, subIndex) => {
                      const hasNestedSubItems =
                        subItem?.subItems && subItem.subItems.length > 0;

                      if (hasNestedSubItems) {
                        return (
                          <Accordion.Item
                            key={
                              subItem?.path || `sub-item-${index}-${subIndex}`
                            }
                            eventKey={
                              subItem?.path || `sub-item-${index}-${subIndex}`
                            }
                            className={classes.nestedAccordionItem}
                          >
                            <Accordion.Header
                              className={classes.nestedAccordionHeader}
                            >
                              {subItem.title}
                            </Accordion.Header>
                            <Accordion.Body
                              className={classes.nestedAccordionBody}
                            >
                              {subItem.subItems.map(
                                (nestedItem, nestedIndex) => {
                                  const isNestedActive =
                                    nestedItem.path === pathname ||
                                    pathname.startsWith(nestedItem.path + "/");
                                  return (
                                    <Link
                                      key={
                                        nestedItem?.path ||
                                        `nested-item-${index}-${subIndex}-${nestedIndex}`
                                      }
                                      href={nestedItem.path}
                                      className={clsx(
                                        classes.nestedLink,
                                        isNestedActive && classes.activeLink
                                      )}
                                      onClick={onLinkClick}
                                    >
                                      {nestedItem.title}
                                      <LinkLoader />
                                    </Link>
                                  );
                                }
                              )}
                            </Accordion.Body>
                          </Accordion.Item>
                        );
                      }

                      const isSubActive =
                        subItem.path === pathname ||
                        pathname.startsWith(subItem.path + "/");
                      return (
                        <Link
                          key={subItem?.path || `sub-link-${index}-${subIndex}`}
                          href={subItem.path}
                          className={clsx(
                            classes.subItemLink,
                            isSubActive && classes.activeLink
                          )}
                          onClick={onLinkClick}
                        >
                          {subItem.title}
                          <LinkLoader />
                        </Link>
                      );
                    })}
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </>
  );
}

const navItemShape = PropTypes.shape({
  title: PropTypes.string,
  path: PropTypes.string,
  subItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          path: PropTypes.string,
        })
      ),
    })
  ),
});

AccordionComponent.propTypes = {
  data: PropTypes.arrayOf(navItemShape).isRequired,
  onLinkClick: PropTypes.func,
};
