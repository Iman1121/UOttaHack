import React, { useState } from "react";
import axios from "axios";
const TextFormNotes = ({ lecId, url, updateNotes }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (url !== "" && url !== null && inputValue !== "") {
        console.log(url);
        await axios.post("http://127.0.0.1:5000/gpt-request", {
          lecId: lecId,
          url: url,
          msgId: "",
          prompt: inputValue,
        });
      }
      await axios.post("http://3.12.108.173:4000/api/notes/", {
        msgId: 2,
        lecId: lecId,
        response: inputValue,
        pictureURI: url,
      });
      updateNotes({ text: inputValue }); // Trigger message update in parent component
      setInputValue("");
    } catch (error) {
      console.error("Error submitting message:", error);
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder=""
        style={{
          marginRight: "10px",
          flex: 1,
          outlineColor: "rgb(137, 2, 62)",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "rgb(204,113,120)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "8px 16px",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default TextFormNotes;
