/*****
WATERMARK BY RyuuZeyy

RyuuZeyy is The Real owner of RFK

Thanks To All Bot Creator
*****/

const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let marah = global.API('https://some-random-api.ml', '/canvas/triggered', {
    avatar: await conn.getProfilePicture(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  })
  let stiker = await sticker(null, marah, global.packname, global.author)
  if (stiker) return conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m, contextInfo:{externalAdReply: {title: run, body: 'WhatsApp Bot', sourceUrl: linkf, thumbnail: thumb3}}
    })
  
  //basi bro
  /*conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })*/
  throw stiker.toString()
}


handler.help = ['trigger']
handler.tags = ['fun']

handler.command = /^(trigger)$/i

module.exports = handler