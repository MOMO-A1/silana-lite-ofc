module.exports = {
command: ["اوامر","القائمة"],

async execute(sock, m){

let text = `
╭─〔 بوت MARWAN - SOFT 〕─╮

📋 أوامر الإدارة
.طرد
.ترقية
.تنزيل
.تحذير

🛡️ أوامر الحماية
.قفل الروابط
.فتح الروابط
.منع سبام
.مسح

🤖 أوامر الذكاء
.ذكاء

🎨 أوامر إضافية
.ملصق
.صوره

────────────
© MARWAN - SOFT
رقم المطور: 967711262101
`

await sock.sendMessage(m.key.remoteJid,{text:text},{quoted:m})
}
}
