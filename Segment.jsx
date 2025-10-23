import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import {
  AbsoluteFill,
  Img,
  Audio,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing
} from "remotion";
const container = {
  backgroundColor: "black"
};
const imageStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover"
};
const overlay = {
  ...container,
  background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 50%)"
};
const textContainer = {
  position: "absolute",
  bottom: "10%",
  width: "100%",
  textAlign: "center",
  padding: "0 40px",
  boxSizing: "border-box"
};
const textStyle = {
  fontFamily: "Helvetica, Arial, sans-serif",
  fontSize: "52px",
  fontWeight: "bold",
  color: "white",
  textShadow: "2px 2px 8px rgba(0,0,0,0.8)"
};
const usernameStyle = {
  ...textStyle,
  fontSize: "32px",
  fontWeight: "normal",
  color: "#ccc",
  marginTop: "10px"
};
const Segment = ({ generatedImageUrl, audioUrl, text, username }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const imageScale = spring({
    frame,
    fps,
    from: 1.1,
    to: 1,
    durationInFrames
  });
  const textOpacity = interpolate(frame, [0, 15, durationInFrames - 15, durationInFrames], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });
  const textTransform = interpolate(frame, [0, 15], [20, 0], {
    easing: Easing.out(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  });
  return /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: container, children: [
    generatedImageUrl && /* @__PURE__ */ jsxDEV(
      Img,
      {
        src: generatedImageUrl,
        style: {
          ...imageStyle,
          transform: `scale(${imageScale})`
        }
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 81,
        columnNumber: 17
      }
    ),
    /* @__PURE__ */ jsxDEV(AbsoluteFill, { style: overlay }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 89,
      columnNumber: 14
    }),
    audioUrl && /* @__PURE__ */ jsxDEV(Audio, { src: audioUrl }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 90,
      columnNumber: 26
    }),
    /* @__PURE__ */ jsxDEV("div", { style: textContainer, children: [
      /* @__PURE__ */ jsxDEV("p", { style: {
        ...textStyle,
        opacity: textOpacity,
        transform: `translateY(${textTransform}px)`
      }, children: text }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 92,
        columnNumber: 17
      }),
      /* @__PURE__ */ jsxDEV("p", { style: {
        ...usernameStyle,
        opacity: textOpacity,
        transform: `translateY(${textTransform}px)`
      }, children: [
        "- ",
        username
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 99,
        columnNumber: 17
      })
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 91,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 79,
    columnNumber: 9
  });
};
export {
  Segment
};
