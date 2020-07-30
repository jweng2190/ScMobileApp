document.getElementById("ok-button").addEventListener("click", function (event) {
    var username1 = document.getElementById('username').value;
    var password1 = document.getElementById('password').value;
    console.log("username: " + username1 + "\npassword: " + password1);

    //cordova.plugin.http.setDataSerializer('urlencoded');
    const options = {
        method: 'post',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        serializer: 'urlencoded',
        data: {username: username1, password: password1}
    };
    cordova.plugin.http.sendRequest('http://ec2-3-128-33-255.us-east-2.compute.amazonaws.com/login',
    options,
    function(response) {
        console.log(response.data);
    },
    function(response) {
        console.error(response.error);
    });

    event.preventDefault();
});


