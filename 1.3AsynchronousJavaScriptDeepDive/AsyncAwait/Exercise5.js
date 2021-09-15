
var user3Posts;
const retrievePosts = async function(userID) {
    let url = 'https://jsonplaceholder.typicode.com/posts',
        posts = [];

    posts = await fetch(url).then(resp => resp.json());

    return posts.filter(obj => obj.userId === userID);
};

retrievePosts(3).then(val => user3Posts = val);

