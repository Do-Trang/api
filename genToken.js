
require('dotenv').config();
const jwt = require('jsonwebtoken');

const userPayload = { username: 'user', role: 'user' };
const adminPayload = { username: 'admin', role: 'admin' };

const userToken = jwt.sign(userPayload, process.env.TOKEN_SECRET);
const adminToken = jwt.sign(adminPayload, process.env.TOKEN_SECRET);

console.log('User Token:', userToken);
console.log('Admin Token:', adminToken);
