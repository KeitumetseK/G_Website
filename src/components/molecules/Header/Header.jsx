"use client";
import Button from "@/components/atoms/Button";
import {
  headerData,
  headerDataMobile,
  navTopRightData,
} from "@/resources/utils/headerFooterData";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";
import { PiShoppingCartLight } from "react-icons/pi";
import classes from "./styles.module.css";
import { Container, Offcanvas } from "react-bootstrap";
import { FaFacebook, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import useDimensions from "@/resources/hooks/useDimensions";
import { FiMenu } from "react-icons/fi";
import AccordionComponent from "@/components/organisms/Accordion";
import LinkLoader from "@/components/atoms/LinkLoader/LinkLoader";

// Social links data
const socialLinks = [
  { href: "https://x.com/goletech", Icon: BsTwitterX },
  { href: "https://www.facebook.com/goletech", Icon: FaFacebook },
  { href: "https://www.youtube.com/@goletech", Icon: FaYoutube },
  { href: "https://www.instagram.com/goletech", Icon: SlSocialInstagram },
  { href: "https://wa.me/27798118825", Icon: FaWhatsapp },
];

// Helper functions
const isPathActive = (path, pathname, isHome = false) => {
  if (isHome) return pathname === "/";
  return path === pathname || pathname.startsWith(path + "/");
};

const findActiveSubItemIndex = (subItems, pathname) => {
  return subItems.findIndex(
    (subItem) =>
      subItem.path === pathname ||
      pathname.startsWith(subItem.path) ||
      subItem.subItems?.some(
        (nested) => nested.path === pathname || pathname.startsWith(nested.path)
      )
  );
};

const SocialLinks = () => (
  <div className={classes.topRight}>
    {socialLinks.map(({ href, Icon }) => (
      <Link key={href} href={href}>
        <Icon size={18} color="#fff" />
      </Link>
    ))}
  </div>
);

const TopNavLinks = () => (
  <div className={classes.rightNavs}>
    {navTopRightData?.map((item, index) => (
      <div key={item?.path} className={classes.navTopRightItem}>
        <Link href={item.path}>
          {item?.label}
          <LinkLoader />
        </Link>
        {index < navTopRightData.length - 1 && (
          <span className={classes.separator}> | </span>
        )}
      </div>
    ))}
  </div>
);

const NestedSubMenu = ({ subItems, pathname, onClose, clearHoverTimeout }) => (
  <div className={classes.subMenu}>
    {subItems.map((nestedItem) => {
      const isActive =
        nestedItem.path === pathname || pathname.startsWith(nestedItem.path);
      return (
        <Link
          key={nestedItem.path}
          href={nestedItem.path}
          className={clsx(
            classes.subMenuItem,
            isActive && classes.subMenuItemActive
          )}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            clearHoverTimeout();
            onClose();
          }}
        >
          {nestedItem.title}
          <LinkLoader />
        </Link>
      );
    })}
  </div>
);

NestedSubMenu.propTypes = {
  subItems: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  clearHoverTimeout: PropTypes.func.isRequired,
};

const DropdownMenu = ({
  item,
  index,
  currentSelectedIndex,
  pathname,
  onSelectSection,
  onClose,
  clearHoverTimeout,
}) => {
  const selectedSubItem = item.subItems[currentSelectedIndex];

  return (
    <div className={classes.dropdown}>
      <div className={classes.dropdownContainer}>
        <div className={classes.sectionMenu}>
          {item.subItems.map((subItem, subIndex) => {
            const hasNested = subItem.subItems?.length > 0;
            // Check if this subItem is active
            // For exact "/services" path, only match exactly to avoid matching all service sub-pages
            const isExactMatch = subItem.path === pathname;
            const isPathPrefix =
              subItem.path &&
              subItem.path !== "/services" &&
              pathname.startsWith(subItem.path + "/");
            const isNestedActive = subItem.subItems?.some(
              (n) => n.path === pathname || pathname.startsWith(n.path + "/")
            );
            const isActive = isExactMatch || isPathPrefix || isNestedActive;
            const isSelected = currentSelectedIndex === subIndex;

            const content = (
              <>
                {subItem.title}
                {hasNested && (
                  <span>
                    <HiChevronRight size={20} />
                  </span>
                )}
              </>
            );

            if (hasNested) {
              // If subItem has a path, make it clickable while still showing nested menu on hover
              if (subItem.path) {
                return (
                  <Link
                    key={subItem.path}
                    href={subItem.path}
                    className={clsx(
                      classes.sectionMenuItem,
                      (isActive || isSelected) && classes.sectionMenuItemSelected
                    )}
                    onMouseEnter={() => onSelectSection(index, subIndex)}
                    onClick={() => setTimeout(onClose, 1000)}
                    aria-expanded={isSelected}
                    aria-haspopup="true"
                  >
                    {content}
                    <LinkLoader />
                  </Link>
                );
              }
              return (
                <button
                  key={`sub-${index}-${subIndex}`}
                  type="button"
                  className={clsx(
                    classes.sectionMenuItem,
                    (isActive || isSelected) && classes.sectionMenuItemSelected
                  )}
                  onMouseEnter={() => onSelectSection(index, subIndex)}
                  onClick={() => onSelectSection(index, subIndex)}
                  aria-expanded={isSelected}
                  aria-haspopup="true"
                >
                  {content}
                </button>
              );
            }

            return (
              <Link
                key={subItem.path}
                href={subItem.path}
                className={clsx(
                  classes.sectionMenuItem,
                  isActive && classes.sectionMenuItemSelected
                )}
                onMouseEnter={() => onSelectSection(index, subIndex)}
                onClick={() => setTimeout(onClose, 1000)}
              >
                {content}
                <LinkLoader />
              </Link>
            );
          })}
        </div>
        {selectedSubItem?.subItems?.length > 0 && (
          <NestedSubMenu
            subItems={selectedSubItem.subItems}
            pathname={pathname}
            onClose={onClose}
            clearHoverTimeout={clearHoverTimeout}
          />
        )}
      </div>
    </div>
  );
};

DropdownMenu.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    subItems: PropTypes.array,
  }).isRequired,
  index: PropTypes.number.isRequired,
  currentSelectedIndex: PropTypes.number.isRequired,
  pathname: PropTypes.string.isRequired,
  onSelectSection: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  clearHoverTimeout: PropTypes.func.isRequired,
};

const NavItemWithDropdown = ({
  item,
  index,
  isActive,
  isOpen,
  currentSelectedIndex,
  pathname,
  dropdownRef,
  onOpen,
  onClose,
  onSelectSection,
  clearHoverTimeout,
}) => (
  <div
    className={classes.navItemWithDropdown}
    ref={dropdownRef}
    role="menuitem"
    tabIndex={-1}
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
    onFocus={onOpen}
    onBlur={onClose}
  >
    <div
      className={clsx(
        classes.navLinkWithDropdown,
        isActive && classes.navLinkWithDropdownActive
      )}
    >
      <span
        className={clsx(classes.navLink, isActive && classes.selectedNav)}
      >
        {item.title}
      </span>
      <button
        className={clsx(
          classes.dropdownToggleButton,
          isOpen && classes.dropdownToggleButtonOpen
        )}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (isOpen) {
            onClose();
          } else {
            onOpen();
          }
        }}
        aria-label="Toggle dropdown menu"
      >
        <HiChevronDown
          className={clsx(
            classes.chevronIcon,
            isOpen && classes.chevronIconOpen
          )}
        />
      </button>
    </div>
    {isOpen && (
      <DropdownMenu
        item={item}
        index={index}
        currentSelectedIndex={currentSelectedIndex}
        pathname={pathname}
        onSelectSection={onSelectSection}
        onClose={onClose}
        clearHoverTimeout={clearHoverTimeout}
      />
    )}
  </div>
);

NavItemWithDropdown.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    subItems: PropTypes.array,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  currentSelectedIndex: PropTypes.number.isRequired,
  pathname: PropTypes.string.isRequired,
  dropdownRef: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelectSection: PropTypes.func.isRequired,
  clearHoverTimeout: PropTypes.func.isRequired,
};

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState({});
  const dropdownRefs = useRef({});
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useDimensions();
  const isMobile = width <= 991;
  const hoverTimeoutRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutside = Object.values(dropdownRefs.current).every(
        (ref) => ref && !ref.contains(event.target)
      );
      if (clickedOutside) setOpenDropdown(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on desktop
  useEffect(() => {
    if (width > 991) setIsOpen(false);
  }, [width]);

  // Cleanup hover timeout
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // Handle body scroll lock for mobile menu
  useEffect(() => {
    document.body.classList.toggle("fixedPosition", isOpen);
    return () => document.body.classList.remove("fixedPosition");
  }, [isOpen]);

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleDropdownOpen = (index, subItems) => {
    clearHoverTimeout();
    setOpenDropdown(index);
    const activeIndex = findActiveSubItemIndex(subItems, pathname);
    setSelectedSectionIndex((prev) => ({
      ...prev,
      [index]: Math.max(activeIndex, 0),
    }));
  };

  const handleDropdownClose = () => {
    hoverTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const handleSelectSection = (dropdownIndex, sectionIndex) => {
    setSelectedSectionIndex((prev) => ({
      ...prev,
      [dropdownIndex]: sectionIndex,
    }));
  };

  return (
    <Container className={classes.container}>
      <div className={classes.topHeader}>
        {/* Top bar with social links */}
        <div className={clsx(classes.header, classes.headerInner)}>
          <SocialLinks />
          <TopNavLinks />
        </div>

        {/* Main header */}
        <header className={classes.header}>
          <div className={classes.logoMain}>
            <Link href="/">
              <div className={classes.logo}>
                <Image src="/svgs/logo.svg" alt="Logo" fill />
              </div>
              <LinkLoader />
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className={classes.nav}>
              {headerData?.map((item, index) => {
                const hasSubItems = item?.subItems?.length > 0;
                const isHome = item?.path === "/";
                const isDropdownOpen = openDropdown === index;

                // Calculate if nav item is active
                let isActive;
                if (hasSubItems) {
                  const hasActiveSubItem = item.subItems.some((sub) =>
                    isPathActive(sub.path, pathname)
                  );
                  isActive =
                    hasActiveSubItem ||
                    isPathActive(item.path, pathname, isHome);
                } else {
                  isActive = isPathActive(item.path, pathname, isHome);
                }

                // Calculate current selected section index
                let currentSelectedIndex = 0;
                if (
                  isDropdownOpen &&
                  selectedSectionIndex[index] !== undefined
                ) {
                  currentSelectedIndex = selectedSectionIndex[index];
                } else if (hasSubItems) {
                  const activeIdx = findActiveSubItemIndex(
                    item.subItems,
                    pathname
                  );
                  if (activeIdx >= 0) currentSelectedIndex = activeIdx;
                }

                if (hasSubItems) {
                  return (
                    <NavItemWithDropdown
                      key={item.path || `nav-${index}`}
                      item={item}
                      index={index}
                      isActive={isActive}
                      isOpen={isDropdownOpen}
                      currentSelectedIndex={currentSelectedIndex}
                      pathname={pathname}
                      dropdownRef={(el) => (dropdownRefs.current[index] = el)}
                      onOpen={() => handleDropdownOpen(index, item.subItems)}
                      onClose={handleDropdownClose}
                      onSelectSection={handleSelectSection}
                      clearHoverTimeout={clearHoverTimeout}
                    />
                  );
                }

                return (
                  <Link
                    key={item.path || `nav-${index}`}
                    href={item.path}
                    className={clsx(
                      classes.navLink,
                      isActive && classes.selectedNav
                    )}
                  >
                    {item.title}
                    <LinkLoader />
                  </Link>
                );
              })}
            </div>
          )}

          {/* Desktop Right Actions */}
          {!isMobile && (
            <div className={classes.rightNavs}>
              <Link href="/order-summary" className={classes.cartIcon}>
                <PiShoppingCartLight size={24} color="white" />
                <LinkLoader />
              </Link>
              <Button variant="secondary" className={classes.button} label="Login" />
                
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className={classes.mobileMenuToggle}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FiMenu size={24} color="white" />
          </button>
        </header>
      </div>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas
        show={isOpen}
        onHide={() => setIsOpen(false)}
        placement="end"
        className={classes.mobileOffcanvas}
        backdrop
      >
        <Offcanvas.Header closeButton className={classes.mobileOffcanvasHeader}>
          <div className={classes.logoMain}>
            <Link href="/">
              <div className={classes.logo}>
                <Image src="/svgs/logo.svg" alt="Logo" fill />
              </div>
              <LinkLoader />
            </Link>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className={classes.mobileOffcanvasBody}>
          <div>
            <AccordionComponent
              data={headerDataMobile}
              onLinkClick={() => setIsOpen(false)}
            />
          </div>
          <div className={classes.rightNavsMobile}>
            <Button variant="secondary" fullWidth className={classes.button}>
              Login
            </Button>
            <Link href="/order-summary" className={classes.cartIcon} onClick={() => setIsOpen(false)}>
              <PiShoppingCartLight size={24} color="white" />
              <LinkLoader />
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
}
