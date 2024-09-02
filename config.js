const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || 'https://telegra.ph/file/ec513e2adb20e6bb92680.jpg',
ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || 'HELLOW I AM ABDUL MD 2.0 WHATSAPP USER BOT',
};
