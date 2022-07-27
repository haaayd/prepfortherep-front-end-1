import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/subjectcards`

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

async function getAll() {
    const res = await fetch(BASE_URL, {
        headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
}

async function deleteCard(id) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${tokenService.getToken()}`
        }
    })
    return res.json()
}


// async function createTerm(termData, id) {
//     console.log(id)
//     const res = await fetch(`${BASE_URL}/${id}/terms`, {
//         method: "POST",
//         headers: { 
//         'Authorization': `Bearer ${tokenService.getToken()}`,
//         'Content-Type': 'application/json'
//     },
//         body: JSON.stringify(termData)
//     })
//     return await res.json()
// }


export { 
    create,
    getAll,
    deleteCard
    // createTerm
}