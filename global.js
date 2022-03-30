// use jquery so that when enter is pressed in the input field, fetchData is called
$(document).ready(function() {
    $('#input').keypress(function(e) {
        if (e.which == 13) {
            fetchData();
        }
    });
});

function fetchData() {
    const input = document.getElementById('input').value;
    fetch('https://my-ocular.jeffalo.net/api/user/' + input)
        .then(res => res.json())
        .then(data => {
            // if the user is not found, display error message
            if (data.error) {
                alert("invalid user");
                $('#input').val('');
            }
            const { color, status } = data;
            document.getElementById("header").style.backgroundColor = color;
            document.getElementById("motd").innerText = "My ocular status is: " + status;
            $('#username').css('color', color);
        });
    document.querySelector('#username').innerText = input;
    // Made by @webdev03
    fetch('https://scratchdb.lefty.one/v3/forum/user/info/' + document.querySelector('#input').value, )
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
            document.querySelector('#mostPostedForum').innerText = mostPostedForum;
        });
    fetch('https://my-ocular.jeffalo.net/api/user/' + input)
        .then(res => res.json())
        .then(data => {
            // grab "id" from the data
            const { id } = data;
            const img = "https://uploads.scratch.mit.edu/get_image/user/" + data.id + "_60x60.png";
            $('#pfp').attr('src', img);
        });
}

// url vars
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const user = urlParams.get('user');
document.querySelector('#input').value = user;