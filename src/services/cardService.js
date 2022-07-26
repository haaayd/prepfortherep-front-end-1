import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/cards`

async function create(cardData) {
    const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'

    }, 
    body: JSON.stringify(cardData)
    })
    return await res.json()
}


export { create }