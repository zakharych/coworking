import React from "react";

export default function Section(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`${props.className}`}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {props.children}
    </section>
  );
}
