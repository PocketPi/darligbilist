import axios from 'axios'

export async function get<T> (path: string): Promise<T> {
  try {
    const { data } = await axios.get(path)
    return data
  } catch (error) {
    console.log(error)
    return await Promise.reject(error)
  }
}
