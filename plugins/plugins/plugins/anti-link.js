module.exports = {
command: ["قفل الروابط"],

async execute(sock, m){

await sock.sendMessage(
m.key.remoteJid,
{text:"تم تفعيل منع الروابط"},
{quoted:m}
)

}
}
