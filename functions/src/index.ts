import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import axios from 'axios'

export const anonymous = functions
  .region('asia-northeast1')
  .https.onRequest((request, response) => {
    if (request.body.token !== functions.config().anonymous.token) {
      response.status(403).send()
      return
    }

    axios.post('https://slack.com/api/chat.postMessage', {
      channel: functions.config().anonymous.channel,
      text: request.body.text,
      username: `以下、名無しにかわりましてつぶあんちゃんがお送りします ${getCurrentDateString()}`,
      icon_url: functions.config().anonymous.icon_url
    }, {
      headers: {
        'Authorization': `Bearer ${functions.config().anonymous.api_token}`,
        'Content-Type': 'application/json'
      }
    })
    response.status(200).send()
  })

function getCurrentDateString(): string {
  const date = new Date(admin.firestore.Timestamp.now().toMillis() + 32400000)
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.toTimeString().split(' ')[0]}`
}