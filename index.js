import { get_page_content } from "./notion.js"

const NOTION_TOKEN = process.env.NOTION_TOKEN

const main = async () => {
    const page = await get_page_content("b7f79b58133349fd90a9db9a0179394f")
    console.log(page.results.filter(p => p.id === "6f1ff157-6118-4a4b-9dd0-08ecf74f0f83")[0].paragraph.text.filter(p => p.type === "equation").map(p => p.equation))
}

main()
