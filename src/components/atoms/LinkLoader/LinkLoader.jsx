"use client";
import Image from "next/image";
import { useLinkStatus } from "next/link";
import { createPortal } from "react-dom";
import classes from "./LinkLoader.module.css";

export default function LinkLoader() {
  const { pending } = useLinkStatus();

  if (pending) {
    return createPortal(
      <div className={classes.overlay} pointerEvents="auto">
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
      </div>,
      document.body
    );
  }
}
