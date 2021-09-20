
var MAINAPP = (function(nsp) {
    "use strict";

    let url = 'https://jsonplaceholder.typicode.com/';

    (async function() {
        try {
            let data = await fetch(url + 'posts/'),
                posts = await data.json();

            nsp.posts = posts;
        } catch(e) {
            console.log(`Problem retrieving posts: ${e}`);
        }
    })();

    //public
    return nsp;
})(MAINAPP || {});
