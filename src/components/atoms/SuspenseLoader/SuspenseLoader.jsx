"use client";
import Image from "next/image";
import classes from "./SuspenseLoader.module.css";

export default function SuspenseLoader() {
  return (
    <div className={classes.overlay}>
      <Image
        priority
        src="/svgs/logo.svg"
        alt="logo"
        width={170}
        height={170}
      />
      <div className={classes.growBox}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

