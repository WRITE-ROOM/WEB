import React from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./customToolbar.css";

const Editor = () => {
  var Font = Quill.import("attributors/class/font");
  Font.whitelist = ["pretendard", "nanum", "batang"];
  Quill.register(Font, true);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        [{ font: Font.whitelist }],
        [{ align: [] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ color: [] }, { background: [] }],
        ["image", "link"],
      ],
    },
  };

  const formats = [
    "font",
    "size",
    "header",
    "color",
    "background",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <>
      <ReactQuill theme="snow" modules={modules} formats={formats} />
    </>
  );
};

export default Editor;
