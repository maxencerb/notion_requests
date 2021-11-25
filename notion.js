import fetch from "node-fetch"

const default_endpoint = 'https://api.notion.so/'

const NOTION_TOKEN = process.env.NOTION_TOKEN

const notion_req = async (endpoint, method = 'GET', body = null) => {
    const res = await fetch(`https://api.notion.com/${endpoint}`,
    {
        headers: {
            "Authorization": `Bearer ${NOTION_TOKEN}`,
            "Notion-Version": "2021-08-16"
        },
        method,
        body
    })
    const json = await res.json()
    return json
}

const get_page = (page_id) => {
    return notion_req(`v1/pages/${page_id}`)
}

export {
    get_page
}