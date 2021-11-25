import { get_page } from "./notion.js"

const NOTION_TOKEN = process.env.NOTION_TOKEN

const main = async () => {
    const page = await get_page("b7f79b58133349fd90a9db9a0179394f")
    console.log(page)
}

main()
