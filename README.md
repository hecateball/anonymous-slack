# anonymous-slack
Inspired by https://qiita.com/peisuke/items/80984db8b47cd8243019

## How to work
 - Create Slack Bot and Slash Command integration.
 - Upload Slack icon wherever you want, and get its URL.
 - Set up your firebase project:

```
firebase use <your project ID>
```

 - Set following firebase functions configurations:

```
firebase functions:config:set anonymous.channel=<Your Slack channel>
firebase.functions:config:set anonymous.access_token=<Your Slack bot api token>
firebase.functions:config:set anonymous.icon_url=<Your Slack bot icon URL>
```