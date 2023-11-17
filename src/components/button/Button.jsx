import React from "react";
import Link from "next/link";

const Button = ({ text, url, id }) => {
  return (
    <Link href={url}>
      <button
        className={
          id === "1" ? "btnPrimary" : id === "2" ? "btnSecondary" : "btnTernary"
        }
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
