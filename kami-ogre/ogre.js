
function setup(){
    $("body").append(
        "<h1>Hello</h1>"
    );
    $("body").append(
        "<div><h3>STATS</h3><p id='stats'></p></div>"
    );
    $("body").append(
        "<button onclick='attack()'>Attack the Ogre!</button>"
    );
    $("body").append(
        "<div id='ogres'></div>"
    );
}

$(document).ready(setup);