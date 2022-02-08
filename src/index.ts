import { API } from "./models/API";

const client = new API("avb");

console.log(client.api_key);
client.getTrending("day");