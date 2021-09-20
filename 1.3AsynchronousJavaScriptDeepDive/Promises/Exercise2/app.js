
var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    fetch(url + 'posts/')
        .then(response1 => response1.json())
        .then(posts => nsp.posts = posts)
        .catch(err => console.log(`Problem retrieving posts: ${err}`));

    fetch(url + 'comments/')
        .then(response2 => response2.json())
        .then(comments => nsp.comments = comments)
        .catch(err => console.log(`Problem retrieving comments: ${err}`));

    fetch(url + 'todos/')
        .then(response3 => response3.json())
        .then(todos => nsp.todos = todos)
        .catch(err => console.log(`Problem retrieving todos: ${err}`));

    //public
    return nsp;
})(MAINAPP || {});
