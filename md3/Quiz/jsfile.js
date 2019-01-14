
function display(element) {
    var str = "hint" + element.id;
    switch(str) {
        case "hint1":
            var x = document.getElementById("hint1");
            x.style.display === "none" ? x.style.display = "block" : x.style.display = "none";
            break;
        case "hint2":
            
    };
};

function hide(element) {
    var y = element.id;
    switch(y) {
        case "c1rs":
            var y = document.getElementById("b1lb");
            if (y.style.display === "block") {
                y.style.display = "none";
            }
            document.getElementById("hint1").style.display = "none";
            break;
        case "c2rs":
            var y = document.getElementById("b2lb");
            y.style.display === "block" ? y.style.display = "none" : y.style.display = "none";
            break;
    }
};