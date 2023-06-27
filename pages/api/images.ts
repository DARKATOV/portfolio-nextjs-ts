import { MessageImage, ResponseError } from '@/interfaces'
import { NextApiResponse, NextApiRequest } from 'next'
import { Configuration, OpenAIApi } from 'openai'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

if (!OPENAI_API_KEY) {
  throw new Error(
    'Por favor declara la variable de entorno OPENAI_API_KEY en .env'
  )
}

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MessageImage | ResponseError>
) {
  try {
    const response = await openai.createImage({
      prompt: req.body.prompt,
    })

    res.status(200).json(response.data.data[0])
  } catch (error: any) {
    if (error.response) {
      res.status(400).json({message: error.response.data})
    } else {
      res.status(400).json({message: error.message})
    }
  }
}
