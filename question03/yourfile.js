const axios = require('axios')
const cheerio = require('cheerio')

const FUNCODE = process.argv[2]

async function getNAV(params) {

    const data = await axios.get('https://codequiz.azurewebsites.net/',{headers:{'Cookie': 'hasCookie=true'}})
    const $ = cheerio.load(data.data)
    $("body > table > tbody > tr").each((index, element) => {
        //1st index is table column
        const currentText = ($($(element).find("td")[0]).text()).replace(' ','')
        if ( currentText === FUNCODE) {
            console.log(($($(element).find("td")[1]).text()))
        }   
    })



}
getNAV()
