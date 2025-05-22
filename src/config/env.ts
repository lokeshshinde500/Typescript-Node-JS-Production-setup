import "dotenv/config";
const env = {
  PORT: process.env.PORT || 5000,
  DB_URL: process.env.DB_URL,
};
export default env;
