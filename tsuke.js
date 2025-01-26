const removeAccents = require("remove-Accents")
const chalk = require('chalk')
const moment = require('moment-timezone')
moment.tz.setDefault('America/Sao_Paulo').locale('br')
const { packSticker, authorSticker } = require('./config.json')
const { MessageMedia, List, Buttons, Location } = require("whatsapp-web.js");
const fs = require('fs-extra');
const GroupChat = require('whatsapp-web.js')
const { default: axios, Axios } = require("axios");
const util = require("./index.js")
const { ownerNumber } = require('./config.json')
const os = require('os');
const cron = require('node-cron')
const toMs = require('ms')
const { match } = require("assert")
const { linkSync } = require("fs")
const puppeteer = require('puppeteer')
const { URL } = require('url');
const { fromFilePath } = require("whatsapp-web.js/src/structures/MessageMedia")
const { InterfaceController } = require("whatsapp-web.js/src/util/InterfaceController")
const phin = require('phin')
const FormData = require('form-data')
const fetch = require('node-fetch')
const { setMaxIdleHTTPParsers } = require("http")
const { google } = require('googleapis')
const { group } = require("console")
const ffmpeg = require('fluent-ffmpeg')
const { title } = require("process")
const path = require("path")
const { Client } = require('whatsapp-web.js');
const rTime = (seconds) => {
    const pad = (s) => { return (s < 10 ? '0' : '') + s }
    var hours = Math.floor(seconds / (60 * 60)); var minutes = Math.floor(seconds % (60 * 60) / 60); var seconds = Math.floor(seconds % 60)
    return `${pad(hours)} horas | ${pad(minutes)} minutos | ${pad(seconds)} segundos`
}
module.exports = msgHandler = async (tsuke = new Client(), message) => {

    try {
         
        const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) }
       const { from, type, time, selectedButtonId, hasMedia, mimetype, sender, cum, timestamp, isMedia, isGif, mentionedIds: mentionedJidList, mentionedIds, hasQuotedMsg, quotedMsgObj } = message
        let { body } = message
        const cmd = body || ''
        const comma = cmd.toLowerCase().split(' ')[0] || ''
        const command = removeAccents(comma)
        const quotedfun = async () => { try { return await message.getQuotedMessage() } catch { return [] } }
        const quotedMsg = await quotedfun()
        const contact = await message.getContact();
        const chatInfo = await message.getChat();
        const alBlocks = await tsuke.getBlockedContacts()
        let allChats
        const { wid } = tsuke.info

        const { name: groupName, isGroup: isGroupMsg, id: id2, participants } = chatInfo
        const { _serialized: groupId } = id2
        let { pushname, name, isBlocked, os_version, number: usuario, id } = contact
        const formatName = await contact.getFormattedNumber()
        pushname = pushname || name || formatName
        const { server, _serialized: user } = id
        const arg = body.trim().substring(body.indexOf(' ') + 1)
        const args = body.trim().split(/ +/).slice(1)
        const ar = args.map((v) => v.toLowerCase())
        const q = args.join(' ')
        const arqs = body.trim().split(' ')
        var me = moment.tz.setDefault('America/Sao_Paulo').locale('pt_BR')
        const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/gi)) }
        const prefix = /^[-°•π÷×¶∆£¢€¥®™✓√=><*Z,z+|~!#$%^&./\\©^]/.test(command) ? command.match(/^[-°•π÷×¶∆£¢€¥®™✓√=><*Z,z+|~!#$%^&./\\©^]/gi) : '/'
        const isCmd = body.startsWith(prefix)
        const color = (text, color) => { return !color ?(text) : chalk.keyword(color)(text) }
        const processTime = (timestamp, now) => { return moment.duration(now - moment(timestamp * 1000)).asSeconds() }
        const sendExternalyt = async (boby, url, title, description, options, type, thumbnail) => {
            const allObjects = Object.assign({
                extra: {
                    type: 2,
                    ctwaContext: {
                        sourceUrl: url,
                        description: description,
                        title: title,
                        mediaType: type,
                        thumbnail: thumbnail,
                        mediaUrl: url
                    }
                }
            }, options);
            komi.sendMessage(from, boby, allObjects)
        }
        /******SEXO******/
        const isOwner = user === ownerNumber
        const isBlocke = alBlocks.includes(sender)
        const idMsg = hasQuotedMsg ? quotedMsg.author : false
        const encryptMedia = hasQuotedMsg ? quotedMsg : message
        const adminsGroup = (userNumber, participants) => {
            const user = participants.find((participant) => participant.id._serialized == userNumber)
            if (user === undefined) return false
            return user.isAdmin
            
        }
        const usedCommandRecently = new Set()
        const botNumber = '5511944361658@c.us'
        const isFiltered = (from) => !!usedCommandRecently.has(from)
        const isBotGroupAdmins = () => isGroupMsg ? adminsGroup(botNumber, participants) : false
        const isGroupAdmins = () => isGroupMsg ? adminsGroup(user, participants) : false
       /***Mensagens type****/
        const isPtt = type === 'ptt'
        const isImage = type === 'image'
        const isVideo = type === 'video'
        const isAudio = type === 'audio'
        const isSticker = type === 'sticker'
        const isViewOnce = message._data.isViewOnce
        const buttonId = type === 'buttons_response'
        const groupEnvite = type === 'groups_v4_invite'
        const mek = buttonId ? false : message.id._serialized
        const isTrava = type === 'oversized' || body.length >= 40000
        const milSort = Math.floor(Math.random() * 1000) + 1
        const side = Math.floor(Math.random() * 2) + 1
        const isQuotedPtt = hasQuotedMsg && quotedMsg.type === 'ptt'
        const isQuotedImage = hasQuotedMsg && quotedMsg.type === 'image'
        const isQuotedVideo = hasQuotedMsg && quotedMsg.type === 'video'
        const isQuotedAudio = hasQuotedMsg && quotedMsg.type === 'audio'
        const isQuotedSticker = hasQuotedMsg && quotedMsg.type === 'sticker'
        const isQuotedStickerAnimated = hasQuotedMsg && quotedMsg.type === 'Sticker'
        const util = require("./index.js")
        const ur = args.length !== 0 ? args[0] : ''
        const verificado = { quotedParticipant: "0@c.us", quotedMsg: { type: 'chat', body: 'MISATO-BOT' } }
        const separar = body.trim().split(/ +/).slice(1)
        const sendMentions = async (txt, options) => {
          const allObjects = await Object.assign({ mentions: await stringToMentions(txt) }, options);
          await komi.sendMessage(from, txt, allObjects)
      }



        /**fazer o if dos bloqueados */
        if (!isCmd && !isGroupMsg) { return console.log('> MENSAGEM', 'DE', color(`"${pushname} - [${user.replace('@c.us', '')}]" NO PV`, 'pink'), 'AS', color(moment(timestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'magenta')) }
        if (!isCmd && isGroupMsg) { return console.log('> MENSAGEM', 'DE', color(`"${pushname} - [${user.replace('@c.us', '')}]"`, "pink"), 'NO GP', color(groupName, 'cyan'), 'AS', color(moment(timestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'magenta')) }
        // cmd
        if (isCmd && !isGroupMsg) console.log(color('>[PRIVADO]', 'purple'), color(`${command} [${args.length}]`, 'indigo'), 'de', color(`"${pushname} - [${user.replace('@c.us', '')}]"`), 'AS', color(moment(timestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'magenta'))
        if (isCmd && isGroupMsg) console.log(color('>[GPUPO]', 'purple'), color(`${command} [${args.length}]`, 'indigo'), 'de', color(pushname), color(`=> +${usuario}`), 'no grupo', color(groupName), 'AS', color(moment(timestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'magenta'))
        


        switch (buttonId ? selectedButtonId : command) {
            // COMANDOS DO DONO      
            case prefix + 'tela':
                if (!isOwner) return message.react(`🖥️`)
                try {
                    const GetTela = await tsuke.pupPage.screenshot()
                    const telaBase64 = GetTela.toString('base64')
                    const media = new MessageMedia('image', telaBase64)
                    tsuke.sendMessage(from, media, { caption: `☣☣` })
                } catch (error) {
                    console.log(error)
                }
                break

                
            
            case prefix + 'ping':
            case prefix + 'pinh':
                const timeBot = rTime(process.uptime())
                const mping = processTime(timestamp, moment())
                const ramMemory = () => {
                    var allRam = os.totalmem(); var kbRam = allRam / 1024; var mbRam = kbRam / 1024; var gbRam = mbRam / 1024; kbRam = Math.floor(kbRam); mbRam = Math.floor(mbRam); gbRam = Math.floor(gbRam); mbRam = mbRam % 1024; kbRam = kbRam % 1024; allRam = allRam % 1024;
                    return `${gbRam}GB | ${mbRam}MB | ${kbRam}KB | ${allRam} Bytes`
                }
                message.reply(`\nReiniciou a: ${timeBot}\nPing → ${mping} _segundos \nCPU → "${os.cpus()[0].model}\nRAM - ${ramMemory()}`); message.react(`⏱️`)
                break

                case prefix + 'stickertoimg': case prefix + 'stikertoimg': case prefix + 'toimg': case prefix + 'sticker':
                    case prefix + 'stiker': case prefix + 'stickergif': case prefix + 'stikergif': case prefix + 's': case prefix + 's1': case prefix + 'g':
                  

                        if (!hasQuotedMsg && !hasMedia) return message.reply(`Marque a foto/Sticker!`)
                        try {
                            const mediaType = hasQuotedMsg ? quotedMsg : message
                            if (isQuotedSticker) {
                                const msgMedia = await mediaType.downloadMedia()
                                tsuke.sendMessage(from, msgMedia, { media: true, caption: `*Massã Bot*` })
                            }
                            else if (hasMedia && isImage || isQuotedImage) {
                                const msgMedia = await encryptMedia.downloadMedia()
                                await tsuke.sendMessage(from, msgMedia, { sendMediaAsSticker: true, stickerName: packSticker, stickerAuthor: authorSticker });
                                message.react(`✅`)
                                console.log(color('[FIGURINHA]', 'cyan'), color(`figurinha feita em ${processTime(timestamp, moment())} segundos!`, 'magenta'))
                            }
                            else if (hasMedia && isVideo || isQuotedVideo) {
                                const msgMedia = await encryptMedia.downloadMedia()
                                await tsuke.sendMessage(from, msgMedia, { sendMediaAsSticker: true, stickerName: packSticker, stickerAuthor: authorSticker });
                                message.react(`✅`)
                                console.log(color('[FIGURINHA]', 'cyan'), color(`figurinha feita em ${processTime(timestamp, moment())} segundos!`, 'magenta'))
                            }
                        } catch (err) {
                            console.log(err); message.reply('Media não encontrada, envie a mesma novamente!'); message.react(`❌`)
                        }
                        break
                        

           // Função para consultar o CEP na API ViaCEP
           async function consultarCEP(cep) {
             try {
               const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
               const data = response.data;

               if (data.erro) {
                 return 'CEP não encontrado.';
               }

               const { logradouro, localidade, uf } = data;
               return `‣ Rua: ${logradouro}\n‣ Cidade: ${localidade}\n‣ Estado: ${uf}`;
             } catch (error) {
               console.log(error);
               return 'Ocorreu um erro na consulta do CEP.';
             }
           }
          

           // Comando "/cep"
           case prefix + 'cep':
             // Extrai o CEP do argumento enviado
             const cep = args[0];

             if (!cep) {
             message.reply('Você precisa fornecer um CEP válido.');
            break;
           }

           // Consulta o CEP na API
           const result = await consultarCEP(cep);
           message.reply(result);

           break;

           async function takeScreenshot(url) {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
          
            await page.goto(url);
            const screenshot = await page.screenshot({ fullPage: true });
          
            await browser.close();
          
            return screenshot;
          }


                        case prefix + 'clear':
                            if (!isOwner) return message.react(`🖥️`)
                          let emptySpaces = '';
                          for (let i = 0; i < 4; i++) {
                            emptySpaces += Array(50).fill('\n').join(' ');
                          }

                          message.reply(`${emptySpaces}\n🗑️ Mensagens limpas 🗑️`);

                          break;

                case prefix + 'take':
                if (isQuotedSticker && q.includes('|')) {
                    const stickerMeta = await quotedMsg.downloadMedia()
                    const stickerMedia = new MessageMedia(stickerMeta.mimetype, stickerMeta.data);
                    await tsuke.sendMessage(from, stickerMedia, { sendMediaAsSticker: true, stickerAuthor: q.split('|')[1], stickerName: q.split('|')[0] })
                } else return await message.reply('forma errada, tente desse jeito .take Massã | Bot')
                break

                case prefix + 'kick':
            case prefix + 'ban':
            case prefix + 'k':
                if (!isGroupMsg) return message.reply('apenas em grupo')
                if (!isGroupAdmins() && !isOwner) return message.reply(`Apenas para admins`)
                if (!isBotGroupAdmins) return await message.reply(`Não sou adm`)
                if (!hasQuotedMsg && mentionedJidList.length === 0) return message.reply(`Marque a pessoa para banir\nOu a mensagem dessa pessoa.`)
                criadorgp = chatInfo.groupMetadata.owner == undefined ? false : chatInfo.groupMetadata.owner._serialized
                try {
                    const number = hasQuotedMsg ? idMsg : mentionedJidList[0]
                    if (number === undefined || number === botNumber) message.reply(`Vdd, mas pq eu iria me dá ban ?`)
                    if (number === ownerNumber) message.reply(`?`)
                    if (number === criadorgp) message.reply(`Como vou banir o dono do grupo mano?`)
                    await chatInfo.removeParticipants([number])
                    await message.reply(`ainda bem que foi banido`)
                } catch (err) { console.log(color(`[DEU ERRO]`, `red`), err); await message.reply(`perdeu o poder😭`) }
                break

                case prefix + 'dm':
                if (!isGroupMsg) return message.reply(text.grupo())
                if (!isGroupAdmins() && !isOwner) return message.reply(`Apenas para admins`)
                if (!isBotGroupAdmins) return await message.reply(`Não sou adm`)
                if (!hasQuotedMsg && mentionedJidList.length === 0) return message.reply(`Marque a pessoa para rebaixar\nOu a mensagem dessa pessoa.`)
                try {
                    const number = hasQuotedMsg ? idMsg : mentionedJidList[0]
                    // if (await adminsGroup(number, participants)) return message.reply(`dnv?`)
                    if (number === undefined || number === botNumber) message.reply(`Ata, como vou me rebaixar?`)
                    await chatInfo.demoteParticipants([number])
                    await sendMentions(`blz\no @${number.replace('@c.us', '')} perdeu o poder`, { mentions: await stringToMentions(`\n@${number}`) })
                } catch (err) {
                    console.log(color(`[DEU ERRO]`, `red`), err);
                    await message.reply(`Deu erro 😭`)
                }
                break

            

            case prefix + 'setd':
                if (!isGroupMsg) return message.reply(text.grupo())
                if (!isBotGroupAdmins) return await message.reply(`Não sou adm`)
                if (!isGroupAdmins() && !isOwner) return message.reply(`Apenas para admins`)
                if (q == 0) return message.reply('coloque algo')
                await chatInfo.setDescription(q)
                break

            case prefix + 'setn':
                if (!isGroupMsg) return message.reply(text.grupo())
                if (!isBotGroupAdmins) return await message.reply(`Não sou adm`)
                if (!isGroupAdmins() && !isOwner) return message.reply(`Apenas para admins`)
                if (q == 0) return message.reply('coloque algo')
                await chatInfo.setSubject(q)
                break

            case prefix + 'gp':
                if (!isGroupMsg) return message.reply(text.grupo())
                if (!isBotGroupAdmins) return await message.reply(`Não sou adm`)
                if (!isGroupAdmins() && !isOwner) return message.reply(`Apenas para admins`)
                const numbe = pushname
                if (q == "abrir")
                    await chatInfo.setMessagesAdminsOnly(false)
                if (q == "fechar")
                    await chatInfo.setMessagesAdminsOnly(true)
                break
            case prefix + 'gplink':
            case prefix + 'linkgp':
                if (!isGroupMsg) return message.reply(text.grupo())
                if (!isBotGroupAdmins) return await message.reply('Não sou Admin')
                if (!isGroupAdmins() && !isOwner) return message.reply(`Apenas para admins`)
                const gcLink = await chatInfo.getInviteCode()
                message.reply(`Link do Grupo:${groupName}\n\nhttps://chat.whatsapp.com/${gcLink}`)
                break
              
              
            case prefix + 'redefinir':
                if (!isGroupMsg) return message.reply(text.grupo())
                if (!isBotGroupAdmins) return await message.reply(`Não sou adm`)
                if (!isGroupAdmins() && !isOwner) return message.reply(`Apenas para admins`)
                chatInfo.revokeInvite()
                break

                        
        }
    } catch (err) {
        console.log(err)
    }
}