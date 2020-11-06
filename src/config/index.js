require('dotenv').config();

export const config = {
    apiKeyToken: process.env.REACT_APP_API_KEY_TOKEN,
    baseApiUrl: process.env.REACT_APP_BASE_API_URL,
}