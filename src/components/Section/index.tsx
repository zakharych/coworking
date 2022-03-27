import React from "react";

export default function Section(props: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={`${props.className}`}
      style={{ display: "flex", justifyContent: "center" }}
      id={props.id ? props.id : undefined}
    >
      {props.children}
    </section>
  );
}
