import { IData } from "../types/Data"

const api_url = 'http://157.90.163.250:1000/get_projects'

async function getData() :Promise<IData[] | []> {
  try {
    const response = await fetch(api_url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })

    if (response.ok) {
      const res: IData[] = await response.json()
      return res
    }
    return []

  } catch (e) {
    console.log(e)
    return []
  }
}

export default getData