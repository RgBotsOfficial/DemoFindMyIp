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

let url2 = Libs.Webhooks.getUrlFor({
  command: "/onWebhook",
  user_id: user.id
})
let webPage =
  "https://api.rgbots.xyz/v1/ipTrack?webhookUrl=" + encodeURIComponent(url2)
Bot.sendMessage("Verify urself from this site : [Verify](" + webPage + ")", {
  disable_web_page_preview: true
})

