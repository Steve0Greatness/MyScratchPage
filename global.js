function fetchData() {
    const input = document.getElementById('input').value;
    fetch('https://my-ocular.jeffalo.net/api/user/' + input)
        .then(res => res.json())
        .then(data => {
            const { color, status } = data;
            document.getElementById("header").style.backgroundColor = color;
            document.getElementById("nav").style.backgroundColor = color;
            document.getElementById("queryBtn").style.backgroundColor = color;
            document.querySelector('#input').style.backgroundColor = color;
            document.getElementById("motd").innerText = "My ocular status is: " + status;
        });
    document.querySelector('#username').innerText = "My name is: " + input;
}
// Made by @webdev03
fetch('https://scratchdb.lefty.one/v3/forum/user/info/' + document.querySelector('#input').value)
    .then(res => res.json())
    .then(data => {
        // Get the counts
        const counts = data.counts;
        // Get the keys in the counts object, and then reverse it
        let keys = Object.keys(counts).reverse();
        // The reason why we reverse it is to use .pop which removes the last element (since it is reversed, the first element, which is "total")
        keys.pop();
        // Define the variables
        let mostPostedForum = "N/A";
        let mostPostedForumCount = 0;
        // Loop through all the forums
        for (let i = 0; i < keys.length; i++) {
            // If the forum looped has more posts than the mostPostedForumCount then that is the most posted currently so set the variable
            // It will still continue through all the forums, then the one with the most posts is found
            if (counts[keys[i]].count > mostPostedForumCount) {
                mostPostedForum = keys[i];
                mostPostedForumCount = counts[keys[i]].count;
            }
        }
        // mostPostedForum and mostPostedForumCount
        document.querySelector('#mostPostedForum').innerText = "The forum I am most active in is " + mostPostedForum;
    });

// URL Args
const urlParams = new URLSearchParams(window.location.search);
document.querySelector('#input').value = urlParams.get('user');
fetchData();

// have a delay on how often fetchData() can be called
let timeout = null;
document.getElementById('#input').addEventListener('keyup', function(e) {
    clearTimeout(timeout);
    timeout = setTimeout(fetchData, 500);
});