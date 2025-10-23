import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useMemo } from "react";
import { createRoot } from "react-dom/client";
import { Player } from "@websim/remotion/player";
import { useSegments } from "./useSegments.js";
import { Root } from "./Root.jsx";
import { AddSegmentForm } from "./AddSegmentForm.jsx";
import { useLoadingStore } from "./AddSegmentForm.jsx";
const App = () => {
  const segments = useSegments();
  const { isLoading, loadingMessage } = useLoadingStore();
  const compositionProps = useMemo(() => ({
    segments
  }), [segments]);
  const durationInFrames = segments.length > 0 ? segments.length * 90 : 90;
  return /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV("h1", { children: "The Longest Ad Ever" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 21,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("div", { className: "player-container", children: segments.length > 0 ? /* @__PURE__ */ jsxDEV(
      Player,
      {
        component: Root,
        inputProps: compositionProps,
        durationInFrames,
        compositionWidth: 540,
        compositionHeight: 960,
        fps: 30,
        style: { width: "100%", height: "100%" },
        controls: true,
        autoPlay: true,
        loop: true
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 24,
        columnNumber: 22
      }
    ) : /* @__PURE__ */ jsxDEV("div", { className: "loading-indicator", children: "Loading video..." }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 37,
      columnNumber: 21
    }) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 22,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV("h2", { children: "Add Your Clip!" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 41,
      columnNumber: 13
    }),
    isLoading ? /* @__PURE__ */ jsxDEV("div", { className: "loading-indicator", children: loadingMessage }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 43,
      columnNumber: 17
    }) : /* @__PURE__ */ jsxDEV(AddSegmentForm, {}, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 45,
      columnNumber: 17
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 20,
    columnNumber: 9
  });
};
const root = createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 52,
  columnNumber: 13
}));
