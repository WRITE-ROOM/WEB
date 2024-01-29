import React, { useState } from "react";
import { TagContainer, Tag } from "../../pages/Note.style";
import { IoClose } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import * as F from "./WriteFooter.style";

const WriteFooter = () => {
  const [showTagInput, setShowTagInput] = useState(false);
  const [tags, setTags] = useState(["음악", "음악2", "음악"]);
  const [newTag, setNewTag] = useState("");

  const handleTagInput = (e) => {
    setNewTag(e.target.value);
  };

  const CreateNewTag = (e) => {
    if (e.key === "Enter" && newTag.trim() !== "") {
      setTags([...tags, newTag]);
      setNewTag("");
      e.target.value = "";
    }
  };

  const DeleteTag = (index) => {
    const updatedTags = [...tags];
    updatedTags.splice(index, 1);
    setTags(updatedTags);
  };

  return (
    <F.Container>
      {/* 태그 추가 */}
      <F.AddTag onClick={() => setShowTagInput(true)}>
        <FiPlus size={20} />
      </F.AddTag>

      {/* 태그 리스트 */}
      <TagContainer>
        <ul>
          {tags.map((tag, index) => (
            <Tag X={true}>
              {tag}
              <F.DeleteTag onClick={() => DeleteTag(index)}>
                <IoClose size={16} />
              </F.DeleteTag>
            </Tag>
          ))}
        </ul>
      </TagContainer>

      {/* 태그 입력칸 */}
      {showTagInput && (
        <label htmlFor="tagInput">
          <input
            type="text"
            id="tagInput"
            placeholder="새 태그를 입력하세요"
            onChange={(e) => handleTagInput(e)}
            onKeyUp={(e) => CreateNewTag(e)}
          />
        </label>
      )}
    </F.Container>
  );
};

export default WriteFooter;