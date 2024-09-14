 const config = require('../config')
const {cmd , commands} = require('../command')
const fg = require(`api-dylux`)
const fg = require(`yt-search`)


cmd({
    pattern: "song",
    desc: "download songs.",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please  Give  Me Url  or   Title")
const search = await yts(q)
const  data = search.videos[0];
const url = data.url 

let desc  =  `
~ABDUL MD SONG DOWNLOAD🎶~


*Title: ${data.title}*
*Descriptoin: ${data.descriptoin}*
*Time: ${data.timetemp}*
*Ago: ${data.ago}*
*Views: ${data.viwes}*

> POWERED BY ABDUL MD 2.0
`
await conn.sendMessage(from,{image:{url. data.thumnail},captoin: desc},{quoted:mek});

//download audio

let down = fg.yta(url)
let downloadUrl = down.dl_url

// send audio+document message 
await.conn.sendMessage(from,{audio: {url:downloadUrl },mimetype:"audio/mpeg"},{qutoed:mek})
await.conn.sendMessage(from,{document: {url:downloadUrl },mimetype:"audio/mpeg,fileName:data.title + ".mp3" ,caption:"> POWERED BY ABDUL MD 2.0"},{qutoed:mek})


}catch(e){
 console.log(e)
reply(`${e}`)    
}
})
