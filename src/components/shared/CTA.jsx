import Link from "next/link";
import React from "react";

const CTA = (props) => {
  return (
    <Link href="/contacto" className="gradient-btn btn text-white hover:brightness-75">
      {props.message}
    </Link>
  );
};

export default CTA;
