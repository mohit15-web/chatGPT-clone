import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import { FaArrowCircleUp } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Body() {
  const [input, setInput] = useState("");
  const [text, setText] = useState(""); // State for storing the generated text
  console.log(input);

  async function handleSendData() {
    try {
      const API_KEY = "AIzaSyAYhghPB47muOGdbJ-p26A7AUxRSxQ94cw"; // Replace with your API key
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = input;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const generatedText = response.text();

      console.log(generatedText);
      setText(generatedText); // Update the state with the generated text
    } catch (error) {
      console.error("Error while generating content:", error);
    }
  }

  return (
    <div className="w-full relative h-screen flex flex-col justify-center items-center">
      <div className="dataContainer flex justify-center items-center">
        {/* Show generated text here */}
        <p>{text}</p>

        <div className="flex flex-col justify-center items-center gap-4 absolute bottom-68">
          <img src={logo} alt="logo" className="w-10" />
          <h1 className="font-bold text-2xl">How can I help you today?</h1>
        </div>

        <div className="w-[69%] flex justify-center flex-wrap gap-4 absolute bottom-28">
          {/* Your existing content */}
        </div>
      </div>

      <div className="absolute bottom-0 w-full flex flex-col items-center">
        <input
          type="text"
          placeholder="Message ChatGPT...."
          className="lg:w-[63%] sm:w-[460px] md:w-[740px] px-4 py-2 border border-gray-300 shadow-sm focus:outline-none text-xl"
          style={{ borderRadius: "12px" }}
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <button className="text-2xl absolute bottom-14 right-64" onClick={handleSendData}>
          <FaArrowCircleUp />
        </button>

        <p className="text-center text-gray-500 text-sm py-3">
          ChatGPT can make mistakes. Consider checking important information
        </p>
      </div>
    </div>
  );
}

export default Body;
