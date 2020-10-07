window.addEventListener('load', function() {
    console.log("I'm here");
    var userId = localStorage.userId;

    var events;
    var url = 'http://ec2-3-128-33-255.us-east-2.compute.amazonaws.com/events/user/' + userId;
    console.log(cordova);
    console.log(cordova['plugin']);
    console.log(cordova.plugin);
    console.log(cordova[plugin]);

    const opt = {
        method: 'get'
    };

    cordova.plugin.http.sendRequest(url, opt, 
        function(response) {
            console.log(response.data);
            events = JSON.parse(response.data);
            var eventList = document.getElementById('event_list');
            for (var i = 0; i < events.length; i++) {
                var item = document.createElement('li');
                item.appendChild(document.createTextNode(events[i].event_description));
                eventList.appendChild(item);
            }
        },
        function(response) {
            console.error(response.error);
        }
    );

});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

