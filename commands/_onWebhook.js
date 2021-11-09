/*CMD
  command: /onWebhook
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!content) {
  return
}
var result = JSON.parse(content)
Bot.sendMessage(
  "*You've Just Visited The Site!!\n\nYour Ip :* `" +
    result.ip +
    "`\n\n\n🔗Our Social\nTelegram: " +
    result.CodedBy.telegram +
    "\nInstagram: " +
    result.CodedBy.instagram +
    "\nTwitter: " +
    result.CodedBy.twitter +
    ""
)

