function fetchData() {
    const input = document.getElementById('input').value;
    fetch('https://my-ocular.jeffalo.net/api/user/' + input)
        .then(res => res.json())
        .then(data => {
            const { color } = data;
            document.getElementById("header").style.backgroundColor = color;
            document.getElementById("nav").style.backgroundColor = color;
            document.getElementById("queryBtn").style.backgroundColor = color;
            document.querySelector('#input').style.backgroundColor = color;
        });
    document.querySelector('#username').innerText = input;
    fetch('https://my-ocular.jeffalo.net/api/user/' + input)
        .then(res => res.json())
        .then(data => {
            const { status } = data;
            document.getElementById("motd").innerText = status;
        });
}

// URL Args
const urlParams = new URLSearchParams(window.location.search);
document.querySelector('#input').value = urlParams.get('user');
fetchData();

if (urlParams.get('app') == 'wsite') {
    window.location.replace('https://jaydendev.github.io');
    const stat = "redir-wsite";
}
