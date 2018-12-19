function wait(time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve()
        },time);
    });
}
//469093cd45cbac8fcaea2f2065a35d179f9a7f37
const fetchOptions = {
    headers: {'Authorization': ''}
};

function checkForErrors(response){
    console.group('checkForErrors');
    console.log('Got a response!');
    console.log('Checking for errors...');
    console.groupEnd();
    if (response.status !== 200){
        return Promise.reject(response);
    }
    return Promise.resolve(response);
}

function parseToJSON(response) {
    console.group('parseToJSON');
    console.log(response);
    console.groupEnd();
    const jsonResponse = response.json();
    return jsonResponse
}

function getLatestCommit(data) {
    console.group('getLatestCommit');
    console.log(data);
    console.groupEnd();
    return data[0];
}

function postDate(githubApiObject) {
    console.group('postDate');
    console.log(githubApiObject);
    console.groupEnd();
    return githubApiObject.created_at;
}

function logData(data) {
    console.group('logData');
    console.log(data);
    console.groupEnd();
}

function fetchJSON(url) {
    return fetch(url, fetchOptions)
        .then(checkForErrors)
        .then(parseToJSON)
}

fetchJSON('https://api.github.com/users/BryanMatta/events')
    .then(getLatestCommit)
    .then(postDate)
    .then(logData);
// const fetchPromise = fetch( , fetchOptions);
// const errorFree = fetchPromise.then(checkForErrors);
// const parseToJson = errorFree.then(parseToJSON);
// const getCommit = parseToJson.then(getLatestCommit);
// const post = getCommit.then(postDate);
// const log = post.then(logData)
wait(1000).then(() => console.log('You\'ll see this after 1 second'));