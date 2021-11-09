/*CMD
  command: 🩺Find My Ip
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let url = Libs.Webhooks.getUrlFor({
  command: "/onWebhook",
  user_id: user.id
})
let webPage =
  "https://api.rgbots.xyz/v1/ipTrack?webhookUrl=" + encodeURIComponent(url)
Bot.sendMessage(
  "Press On The Link To Get Your Ip In The Bot:\n[Get My Ip Now!!](" +
    webPage +
    ")",
  {
    disable_web_page_preview: true
  }
)

