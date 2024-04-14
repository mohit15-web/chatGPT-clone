import { GoogleGenerativeAI } from "@google/generative-ai";
import React from 'react'

function RunChat() {
    async function run({input}) {
        // For text-only input, use the gemini-pro model
        // let apikey = "";
        const API_KEY = "AIzaSyAYhghPB47muOGdbJ-p26A7AUxRSxQ94cw";
        const md = window.markdownit();
        const genAI = new GoogleGenerativeAI(API_KEY);

        let text = input;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = text;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        text = response.text();

        console.log(text);
        return text;
    }

  return (
    <div>RunChat</div>
  )
}

export default RunChat