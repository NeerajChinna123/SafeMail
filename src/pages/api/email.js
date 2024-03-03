import moment from 'moment';
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error if the middleware is not successful
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

let emails = []; // This should ideally be a database in a real app

function generateTimeAndTimeStamp() {
  const now = moment();
  const time = now.format('HH.mm');
  const timeStamp = now.format('ddd, DD MMM, HH.mm') + ` (${now.fromNow()})`;
  return { time, timeStamp };
}

export default async function email(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    const { time, timeStamp } = generateTimeAndTimeStamp();
    const firstReply = {
      id: req.body.id || Date.now(),
      fullName: req.body.fullName,
      body: req.body.body,
      time,
      timeStamp,
      toEmail: req.body.toEmail,
      fromEmail: req.body.fromEmail,
    };

    const newEmail = {
      id: Date.now(),
      fullName: req.body.fullName,
      subject: req.body.subject,
      body: req.body.body,
      time,
      timeStamp,
      toEmail: req.body.toEmail,
      fromEmail: req.body.fromEmail,
      emailReplies: [firstReply].concat(req.body.emailReplies ? req.body.emailReplies.map(reply => ({
        id: reply.id || Date.now() + 1,
        fullName: reply.fullName,
        subject: req.body.subject,
        body: reply.body,
        time,
        timeStamp,
        toEmail: reply.toEmail,
        fromEmail: reply.fromEmail,
      })) : []),
    };

    emails.push(newEmail);
    return res.status(201).json(newEmail);
  } else if (req.method === 'GET') {
    const sortedEmails = emails.sort((a, b) => b.id - a.id);
    return res.status(200).json(sortedEmails);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
