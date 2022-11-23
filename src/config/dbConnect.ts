import * as dotenv from 'dotenv';
dotenv.config();

const password = process.env.PASSWORD;
const database = process.env.DATABASE;
const DB_CONNECTION = `mongodb+srv://Chefane:${password}@cluster-soil-moisture.6hriun4.mongodb.net/${database}?retryWrites=true&w=majority`

export default DB_CONNECTION