import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import { AbsoluteFill, Series } from "remotion";
import { Segment } from "./Segment.jsx";
const Root = ({ segments }) => {
  const orderedSegments = [...segments].reverse();
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: { backgroundColor: "#1c1e21" }, children: /* @__PURE__ */ jsxDEV(Series, { children: orderedSegments.map((segment) => /* @__PURE__ */ jsxDEV(Series.Sequence, { durationInFrames: segment.durationInFrames || 90, children: /* @__PURE__ */ jsxDEV(
    Segment,
    {
      generatedImageUrl: segment.generatedImageUrl,
      audioUrl: segment.audioUrl,
      text: segment.textPrompt,
      username: segment.username
    },
    void 0,
    false,
    {
      fileName: "<stdin>",
      lineNumber: 14,
      columnNumber: 25
    }
  ) }, segment.id, false, {
    fileName: "<stdin>",
    lineNumber: 13,
    columnNumber: 21
  })) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 11,
    columnNumber: 13
  }) }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 10,
    columnNumber: 9
  });
};
export {
  Root
};
