var i = 32;

$('#bmw')[0].src = `./bmw/${i}.jpg`;

$('#bmw').click(function() {
    console.log('ok');
    bmw = true;
    if (i >= 35) {
        i = 1;
    }
    else ++i;
    $('#bmw')[0].src = `./bmw/${i}.jpg`;

    /*if (bmw) {
        setInterval(playBmw, 125);
    }
    if (!bmw) {
        clearInterval(playBmw);
        i = 1;
        $('#bmw')[0].src = `./bmw/${i}.jpg`;
    }*/
});

function playBmw() {
    if (i >= 35) {
        i = 1;
    }
    else i += 1;
    $('#bmw')[0].src = `./bmw/${i}.jpg`;
}

var direction = "",
    oldx = 0,
    mousemovemethod = function (e) {
    
    if (e.pageX < oldx - 6.5) {
        direction = "left";
        i -= 1;
        if (i < 1) {
            i = 35;
        }
    } 
    else if (e.pageX > oldx + 6.5) {
        direction = "right";
        i += 1;
        if (i >= 35) {
            i = 1;
        }
    }
    oldx = e.pageX;
    $('#bmw')[0].src = `./bmw/${i}.jpg`;
}

$('#bmw').on('mousemove', mousemovemethod);
$('#bmw')[0].addEventListener('contextmenu', function(ev) {
    ev.preventDefault();

    let timerId = setInterval(() => { 
        if (i >= 35) {
            i = 1;
        }
        else i += 1;
        $('#bmw')[0].src = `./bmw/${i}.jpg`;
    }, 125);
    setTimeout(() => clearInterval(timerId), 8750);

    return false;
}, false);
