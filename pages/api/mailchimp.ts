
import { addToMailingList } from '@/utils/mailchimp';
import type { NextApiRequest, NextApiResponse } from 'next'

type RequestData = {
  email: string;
  firstName?: string;
  lastName?: string;
}

type Data = {
  status: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, firstName, lastName } = req.body as RequestData;
    const { status, message } = await addToMailingList(email, {
      firstName,
      lastName,
    });
    res.status(200).json({ status, message })
  } else {
    res.status(405).json({ status: false, message: 'Method not allowed' })
  }
}
