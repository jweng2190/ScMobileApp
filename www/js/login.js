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
        var data = JSON.parse(response.data);
        if(data['success'] === true) {
            userId = data['user_id'];
            localStorage.userId = userId;
            window.location.href = "home.html";
         }
    },
    function(response) {
        console.error(response.error);
    });

    event.preventDefault();
});

/*function getCurrentUserEvents(userId) {
    var events;
    var url = 'http://ec2-3-128-33-255.us-east-2.compute.amazonaws.com/events/user/' + userId;

    const options = {
        method: 'get'
    };
    cordova.plugin.http.sendRequest(url,
    options,
    function(response) {
        console.log(response.data);
        events = JSON.parse(response.data);
        window.location.href = "home.html";
    },
    function(response) {
        console.error(response.error);
    });
}*/
