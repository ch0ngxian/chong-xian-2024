"use client";
import ReactCurvedText from "react-curved-text";
import "./CurvedText.css";

export default function CurvedText({ text, className }) {
  return (
    <ReactCurvedText
      width={400}
      height={400}
      cx={200}
      cy={200}
      rx={100}
      ry={100}
      reversed={true}
      text={text}
      textProps={{ style: { fontSize: 20 } }}
      textPathProps={{ fill: "#D1D5DB" }}
      ellipseProps={null}
      tspanProps={{ dy: "-50" }}
      svgProps={{
        className: `rotating-curved-text curved-text-position ${className}`,
      }}
    />
  );
}
