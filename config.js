const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_08_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDgzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDgyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIxLFxuICAgICAgICA4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDc2LFxuICAgICAgICA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDYzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTcsXG4gICAgICAgIDY4LFxuICAgICAgICAyNixcbiAgICAgICAgMjAxLFxuICAgICAgICA3MixcbiAgICAgICAgMTAxLFxuICAgICAgICA2MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgODIsXG4gICAgICAgIDk4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDk2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MixcbiAgICAgICAgMTI4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDY5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYVFRQmVxcVJxdlF4NE1xTWNMVmg1b0drTEhHRFJRRFpzL1ljS2EvVlBqWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZUtKVXNwZWpTTW01NUR3a3BSeThsZ1wiLFxuICBcInBob25lSWRcIjogXCJmMzA2ZjdmZS01OTQxLTQzZmQtODg3YS1jMmQ0ZTg5NWE1ZjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAxNSxcbiAgICAgIDE0NixcbiAgICAgIDI1NCxcbiAgICAgIDU1LFxuICAgICAgMTIzLFxuICAgICAgMTYsXG4gICAgICAxODgsXG4gICAgICA0MixcbiAgICAgIDM3LFxuICAgICAgMTUsXG4gICAgICA0MSxcbiAgICAgIDIzMCxcbiAgICAgIDEwOCxcbiAgICAgIDY0LFxuICAgICAgMTI5LFxuICAgICAgMTUyLFxuICAgICAgNCxcbiAgICAgIDUyLFxuICAgICAgMjE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgMTc0LFxuICAgICAgMjMxLFxuICAgICAgNTgsXG4gICAgICAxMjcsXG4gICAgICA3OCxcbiAgICAgIDE2NSxcbiAgICAgIDY4LFxuICAgICAgMjksXG4gICAgICAxNjcsXG4gICAgICAzOSxcbiAgICAgIDIxMCxcbiAgICAgIDE2NCxcbiAgICAgIDI1MixcbiAgICAgIDUzLFxuICAgICAgMTI2LFxuICAgICAgNjksXG4gICAgICAyNDYsXG4gICAgICA0MyxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRUUENNSjRaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM1NTY0MTkyNDU6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NjA1Nzg4MDM3MTQxNDo1OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQaktpcW9GRU1XYW1ic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjE4alFRS2E5QnB0K2twTm9CMXBkUE9kODFGaUdIT2FTKzhaaHJOTURoRlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWDJ1VzRNMzllN056K0M3SmRsck95OHZXQm51MU9rRGN4aWo4MFcybUpKVGVrRExsY1pMdzlScnh1b2R1U0lvd1FpeTRxZi9HNWppRjZOQkU0L2pwREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaVRSS3FTWm1pNjJpUGYyTTVUZWNIVFVkejk2K3BDSE1la2RrbmdLc3p4SHFmTFY2bGlnRUdzSE5BOGgraGs1cXFWZFlobEVWSDdIWEpwUGFsei9oQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNTU2NDE5MjQ1OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDc1NzcwNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJ5SVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQnlJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNDM0L3dVQlE2eVA3bVBrOW0yQTY3M3o4b0VoZTRLRE9WOVYxU1VxbFRNMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDMwNDMxMDk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM0NzQ5NTExNjg5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
