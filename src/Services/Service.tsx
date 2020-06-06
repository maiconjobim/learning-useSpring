import axios from 'axios';

const instanceAxios = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

async function ServiceGet(id: number) {
  try {
    const resp = await instanceAxios.get(
      `www.aaaaa/${id}`
    )
    return resp.data.result;
  } catch (e) {
    throw e;
  }
}

export { ServiceGet }