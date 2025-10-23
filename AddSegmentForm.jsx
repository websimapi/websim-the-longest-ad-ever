import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useCallback } from "react";
import { useLoadingStore } from "./loadingStore.js";
import { addSegment } from "./useSegments.js";
const AddSegmentForm = () => {
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const { setLoading } = useLoadingStore();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    if (!text || !imageFile) {
      alert("Please provide both text and an image.");
      return;
    }
    setLoading(true, "Uploading your image...");
    try {
      const imageUrl = await websim.upload(imageFile);
      setLoading(true, "Generating AI voice...");
      const ttsResult = await websim.textToSpeech({
        text,
        voice: "en-male"
      });
      const audioUrl = ttsResult.url;
      setLoading(true, "Generating AI scene...");
      const imageGenResult = await websim.imageGen({
        prompt: `Create a cinematic, visually stunning scene based on this concept: "${text}"`,
        aspect_ratio: "9:16"
      });
      const generatedImageUrl = imageGenResult.url;
      setLoading(true, "Adding your segment to the video...");
      await addSegment({
        textPrompt: text,
        originalImageUrl: imageUrl,
        generatedImageUrl,
        audioUrl,
        durationInFrames: 90
        // 3 seconds at 30fps
      });
      setText("");
      setImageFile(null);
      setPreviewUrl("");
    } catch (error) {
      console.error("Failed to add segment:", error);
      alert("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [text, imageFile, setLoading]);
  return /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "form-container", children: [
    /* @__PURE__ */ jsxDEV(
      "input",
      {
        type: "text",
        value: text,
        onChange: (e) => setText(e.target.value),
        placeholder: "What should your ad be about?",
        className: "form-input",
        maxLength: "100"
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 67,
        columnNumber: 13
      }
    ),
    /* @__PURE__ */ jsxDEV("label", { htmlFor: "image-upload", className: "file-label", children: previewUrl ? "Change Image" : "Select an Image" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 75,
      columnNumber: 13
    }),
    /* @__PURE__ */ jsxDEV(
      "input",
      {
        id: "image-upload",
        type: "file",
        accept: "image/*",
        onChange: handleImageChange
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 78,
        columnNumber: 13
      }
    ),
    previewUrl && /* @__PURE__ */ jsxDEV("img", { src: previewUrl, alt: "Preview", className: "image-preview" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 84,
      columnNumber: 28
    }),
    /* @__PURE__ */ jsxDEV("button", { type: "submit", disabled: !text || !imageFile, className: "form-button", children: "Add to Ad" }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 85,
      columnNumber: 13
    })
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 66,
    columnNumber: 9
  });
};
export {
  AddSegmentForm
};
