module.exports = {
command: ["طرد"],
async execute(sock, m){

await sock.sendMessage(
m.key.remoteJid,
{text:"تم تنفيذ أمر الطرد (نسخة تجريبية)"},
{quoted:m}
)

}
}
