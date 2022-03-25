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
            document.getElementById("motd").innerText = status;
        });
    document.querySelector('#username').innerText = input;
}
