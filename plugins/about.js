













































const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "binfo",
    react: "💰",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let about = `*╭┈───────────────•*

*👋 HELLO ${pushname}*

*╰┈───────────────•*
*╭┈───────────────•*
*│  ☆ *𝚝𝚑𝚒𝚜 𝚒𝚜 ASH 𝙼𝙳     
*│  ☆ *𝚌𝚛𝚎𝚊𝚝𝚎𝚍 𝚋𝚢 ASH𝚃𝙴𝙲𝙷
*│  ✩ *𝚕𝚘𝚌𝚊𝚝𝚒𝚘𝚗 𝙰𝙵𝚁𝙸𝙲𝙰/𝚃𝙰𝙽𝚉𝙰𝙽𝙸𝙰🇹🇿
*│  ☆ *𝚌𝚒𝚝𝚢 𝙳𝙰𝚁 𝙴𝚂 𝚂𝙰𝙻𝙰𝙰𝙼
*╰┈───────────────•*
> *☆☆☆☆☆☆☆☆☆*

*[ ★ ASH 𝙼𝙳 𝙳𝙴𝚅𝚂★ ]*
*╭┈───────────────•*
*│  ༄ ASH𝚃𝙴𝙲𝙷
*│  ༄ 𝙳𝙴𝚅 𝙸𝙱𝚁𝙰𝙷𝙸𝙼
*│  ༄ 𝙵𝚁𝙴𝙳𝙸𝙴 𝚃𝙴𝙲𝙷
*│  ༄ 𝙱𝙾𝙽𝙸𝙿𝙷𝙰𝙲𝙴 𝚃𝙴𝙲𝙷
*│  ༄ 𝙷𝙰𝙽𝚂𝚃𝚉 𝚃𝙴𝙲𝙷
*╰┈───────────────•*
*•────────────•★*
> © 𝚌𝚘𝚍𝚎 𝚋𝚢 ash𝚝𝚎𝚌𝚑
*•────────────•★*
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:about},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
