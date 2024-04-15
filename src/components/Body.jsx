import { TextGenerateEffect } from "./TextGenrate";
import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import { FaArrowCircleUp } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsStars } from "react-icons/bs";

export function Body() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  console.log(input);

  // const words = {text}

  async function handleSendData() {
    try {
      const API_KEY = "AIzaSyAYhghPB47muOGdbJ-p26A7AUxRSxQ94cw"; // Replace with your API key
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = input;
      // setText("");
      const result = await model.generateContent(prompt);
      console.log(result);
      const response = result.response;
      console.log(response);
      const generatedText = response.text();
      setText(generatedText);
    } catch (error) {
      console.error("Error while generating content:", error);
    }
  }

  return (
    <div className="w-full relative h-screen flex flex-col justify-center items-center">
      <div className="absolute top-2 left-4 flex p-2 justify-center items-center gap-2 cursor-pointer rounded-lg hover:bg-slate-100">
        <h1
          className="font-bold text-xl"
          onClick={() => setShowMessage(!showMessage)}
        >
          ChatGPT <span className="text-slate-500">3.5</span>
        </h1>
        <FaAngleDown className="text-slate-500" />
      </div>
      {showMessage ? (
        <div className="border border-gray-200 shadow-sm absolute top-14 left-4 p-4 rounded-xl flex flex-col gap-4">
          <div className="text-slate-500 flex justify-between items-center">
            <h1>Model</h1>
            <IoMdInformationCircleOutline className=" text-xl" />
          </div>

          <div className="flex justify-start items-center gap-3">
            <AiOutlineThunderbolt className="font-bold text-2xl" />
            <div>
              <h1 className="font-bold">GPT-3.5</h1>
              <p className="text-slate-500">Great for everyday task</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 w-80">
            <BsStars className="text-4xl" />
            <div>
              <h1 className="font-bold">GPT-4</h1>
              <p className="text-slate-500">
                Our smartest and most capable model. Inclues DALL.E,browsing and
                more.
              </p>
              <button className="w-full rounded-lg bg-violet-500 p-2 text-white font-bold text-xs mt-2">
                Upgrade to Plus
              </button>
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-[69%]" id="dataContainer">
        {
          <div className="h-[60vh] overflow-scroll overflow-x-hidden">
            {/* <div className="flex justify-center items-center gap-2">
              <img src={logo} alt="" className="w-10" />
              <h1>You</h1>
            </div> */}
            <div>
              <TextGenerateEffect words={text} />
            </div>
          </div>
        }
      </div>
      <div
        className={`justify-center items-center ${
          text.length > 0 ? "hidden" : "flex"
        }`}
        id="container"
      >
        <div className="flex flex-col justify-center items-center gap-4 absolute bottom-68">
          <img src={logo} alt="logo" className="w-10" />
          <h1 className="font-bold text-2xl">How can I help you today?</h1>
        </div>

        <div className="w-[69%] flex justify-center flex-wrap gap-4 absolute bottom-28">
          <div
            style={{ borderRadius: "12px" }}
            className="w-[44%] border border-gray-300 shadow-sm px-5 py-2 "
          >
            <h1 className="font-semibold">Brainstorm names</h1>
            <p className="text-gray-500">
              for my fantasy football team with a frog theme
            </p>
          </div>

          <div
            style={{ borderRadius: "12px" }}
            className="w-[44%] border border-gray-300 shadow-sm px-5 py-2 "
          >
            <h1 className="font-semibold">Give me ideas</h1>
            <p className="text-gray-500">
              about how to plan my New Years resolutions
            </p>
          </div>

          <div
            style={{ borderRadius: "12px" }}
            className="w-[44%] border border-gray-300 shadow-sm px-5 py-2 "
          >
            <h1 className="font-semibold">Write a letter to future me</h1>
            <p className="text-gray-500">reflectiong on my mental health</p>
          </div>

          <div
            style={{ borderRadius: "12px" }}
            className="w-[44%] border border-gray-300 shadow-sm px-5 py-2 "
          >
            <h1 className="font-semibold">Write an email</h1>
            <p className="text-gray-500">
              expressing your love for your parents
            </p>
          </div>
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

        <button
          className="text-2xl absolute bottom-14 right-64"
          onClick={handleSendData}
        >
          <FaArrowCircleUp />
        </button>

        <p className="text-center text-gray-500 text-sm py-3">
          ChatGPT can make mistakes. Consider checking important information
        </p>
      </div>
    </div>
  );
}
