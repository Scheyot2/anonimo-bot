const fetch = require('node-fetch')
const fs = require('fs')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const chalk = require('chalk')
const exec = require("child_process").exec
const log = console.debug
const cheerio = require('cheerio')
const mimetype = require('mime-types')


exports.getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
};


exports.getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}
exports.getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})

exports.mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sock.sendMessage(from, {text: teks.trim(), mentions: memberr}) : sock.sendMessage(from, {text: teks.trim(), mentions: memberr})
}

exports.getExtension = async (type) => {
	return await mimetype.extension(type)
}		
