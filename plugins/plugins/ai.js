module.exports = {
command: ["ذكاء"],
async execute(sock, m, args){

let q = args.join(" ")

if(!q) return sock.sendMessage(
m.key.remoteJid,
{text:"اكتب سؤال بعد الأمر"},
{quoted:m}
)

await sock.sendMessage(
m.key.remoteJid,
{text:"سيتم ربط الذكاء قريباً"},
{quoted:m}
)

}
}
