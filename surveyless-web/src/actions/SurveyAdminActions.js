import fetch from 'isomorphic-fetch';

export function createSurveyPost(data) {
    return fetch('ADD-URL-FROM-SLS-DEPLOY-HERE', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(function(error) {
        console.log('request failed', error)
    });
}