import express from 'express';
import * as dotenv from 'dotenv';
import OpenAIApi from 'openai';
import Configuration from 'openai';
import OpenAi from 'openai'

dotenv.config();

require('dotenv').config();


const router = express.Router();

const config = new Configuration({
  organization: process.env.ORG_ID,
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello we are up and running!" })


})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    });

    const image = response.data[0].b64_json;
    res.status(200).json({ photo:image });
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: "something went wrong" })
  }
})


export default router;

