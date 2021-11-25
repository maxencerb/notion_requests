import fetch from "node-fetch"

const NOTION_TOKEN = process.env.NOTION_TOKEN

console.log(`NOTION_TOKEN: ${NOTION_TOKEN}`)

const main = async () => {
    const res = await fetch('https://maxenceraballand.com')
    const data = await res.text()
    console.log(data)
}

// main()
