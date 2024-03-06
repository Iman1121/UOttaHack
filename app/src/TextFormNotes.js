import React, { useState } from "react";
import axios from "axios";
const TextFormNotes = ({ lecId, url, updateNotes }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (url !== "" && url !== null && url !== undefined && inputValue !== "") {
        console.log(url);
        await axios.post("https://u-otta-hack.vercel.app/get", {
          lecId: lecId,
          url: url,
          msgId: "",
          prompt: inputValue,
        }, { timeout: 300000 });
      }
      await axios.post("https://academeetbackend.vercel.app/api/notes/", {
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
