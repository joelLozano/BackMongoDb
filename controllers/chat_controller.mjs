import { Configuration, OpenAIApi } from "openai";
import axios from "axios";
import 'dotenv/config'

const configuration = new Configuration({
    organization: "org-0YC7WZLhzP0Gva25eOWQoGhC",
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);
const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: "dme un auto mas barato"}],
  });

const startConversation = (req, res) => {
    try {
        axios.post('https://api.openai.com/v1/chat/completions',completion)
        .then( response => {
            console.log(response.data.choices[0].message)
        })
    } catch (error) {
       res.redirec('404error', {error}) 
    }
}

/*

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const startConversation = async (req, res) => {
  try {
    console.log('ok')
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: "Hello world" },
      ],
    });

    axios
      .post("https://api.openai.com/v1/chat/completions", completion)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    res.status(200).json({ message: "Conversation started successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};*/

export {startConversation}