import { Message, ResponseError } from '@/interfaces'
import { NextApiResponse, NextApiRequest } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

if (!OPENAI_API_KEY) {
  throw new Error(
    'Por favor declara la variable de entorno OPENAI_API_KEY en .env.local'
  )
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Message | ResponseError>
) {
  try {
    const chatCompletion: any = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{role: 'user', content: req.body.prompt}],
    })

    res.status(200).json(chatCompletion.data.choices[0].message)
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
      res.status(400).json({message: error.response.data})
    } else {
      console.log(error.message)
      res.status(400).json({message: error.message})
    }
  }
}

