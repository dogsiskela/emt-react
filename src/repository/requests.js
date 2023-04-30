export function sendGetRequest(api) {
    return fetch(api,
        { method: 'GET' }
    ).then(res => {

        return res.json();
    }).catch(err => {
        console.log(err)
    })
}

export function sendPostRequest(api, data) {
    return fetch(api,
        { method: 'POST', body: data }
    ).then(res => {

        return res.json();
    }).catch(err => {
        console.log(err)
    })
}