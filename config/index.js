require('dotenv').config();

const config = {
    apiKeyToken: process.env.API_KEY_TOKEN,
    baseApiUrl: process.env.BASE_API_URL,
}

module.exports = {config};