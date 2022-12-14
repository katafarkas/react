import axios from "axios";

const BASE_URL = 'https://wallet.webuni.workers.dev';
export const AXIOS_METHOD = {
    'GET': 'GET',
    'POST': 'POST',
    'PUT': 'PUT',
    'PATCH': 'PATCH',
    'DELETE': 'DELETE'
};
let authToken = false;

export function setApiToken(newToken) {
    authToken = newToken;
}

export function doApiCall(method, uri, onSuccess, onFailure = false, data = undefined) {
    axios({
        method,
        url: `${BASE_URL}${uri}`,
        data,
        headers: authToken !== false ? { 'Authorization': `Bearer ${authToken}` } : {},
    }).then(res => {
        onSuccess(res.data);
    }).catch(err => {
        console.error(err);
        if (err.response.status === 403) {
            window.location.href = "/"
        }

        if (onFailure === false) {
            return;
        }
        onFailure(err?.response?.data?.error, err);
    });
}