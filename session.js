//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBCUlAzZkREMXhKRlVQUzMrMG5zUCtWanpCWUF0d0pkWTNLdTVSOFVHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlNZbUlnZ0lUaWVETWIvOHFkM3FBK2Q0cUI2ek5sTXdZMHVCM2RKTHdGaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQnUxcFE5cnFSMkFPQVVBd3dBRTZJT3ExWWVsdmkxVG8wTWVSM1owTFhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1SEpLM3pDTVh3SHpxSnNBRWdmMU9kNWw1UUtNYVhnYWxNRnlMOGRQT2c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndOUmtOZXc1WVA1SFRpMG9QSURXUys3U3EzY0VCZ1hKekkzSUoyeS9OMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlmZDlDRXQrV3ZpdVl1TlI1akc3SERMTVM3YzZ3dUc3OG5WdlRac0F4V2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNKME1TTWJRQ2hxamZreVB2K05OREdRaWFNV2tadVNzWThCSzdid2VuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3FuaHoyOHE2VERGdko0U0xPUUFjaHp3Y0dyMTQ5RTBHZG44MHpnNDVnOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZWOFhzd3A0RGhWTkpJT2dyUkxaSFRXUkxVL3NuUUVkQkFFVVdiR1FlN0pHNkY4ZVdjMGNna09vcDI5eGYra2JPelU3M1orNEJxdEtZQ0oxLzFjK0NBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6IjlSUEg5VlRGdHB2eUxEbEFaYzF4ckcrb3RPUHZ1clR4UWtxUFprN3RIV289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlB3eHk1bkxFUnVDVUhiMGZCVjZFQnciLCJwaG9uZUlkIjoiYzk0NmNmMWYtNGE3OS00ZTc1LWE2YmYtYjMxYTEwYzI1MmJlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5kSGVYZFFmUTVxNnZleUtGaVpLc08yVldmdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGL0t0eFVoYVEwRk5yeElPUy83cHllNVNjVms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0JTSFc3MzUiLCJtZSI6eyJpZCI6Ijk0NzE4ODQ5NTk5OjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkJFfX/CdkJTwnZCs8J2QhyIsImxpZCI6IjgzMTAzNTQwMzMwNTYxOjIzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnJnamdvUTRQZm93Z1lZQkNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTiswaTNrMlBid0pSdENaWDA0dWZiTFAwOEdDZ0NZUFVNYlJuTUFwYm5rTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoibEpkTmhKQm81ZmVlcmpuWEtIRXZxUHNsNlFMbktNYy9iWExJbFF5NGpSVkJLdmZ1U1YzSmd3OHZtNExGR1UzZXo4OC9WWkNKb2lBbWtNb1hjUGVvQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IlozQk1jNkpscnN0ZExMUHVaMHhHcWRYT3pZemgxd1IvZ1hjazhiaWk3MnEza1YyWWVHWGhBK1Q5djRlcGxDTEcrWk45MCtlUVhYczFOWEhaeGRJYUR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MTg4NDk1OTk6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGZ0SXQ1TmoyOENVYlFtVjlPTG4yeXo5UEJnb0FtRDFERzBaekFLVzU1RCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUwNzQ0MDQ2LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHBXIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94718849599",
  PASSWORD: 
    process.env.PASSWORD || "Rajitha2006@#75",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
