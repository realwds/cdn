setTimeout('le()',1000);
function le() {
    function loadCss() {
        var myCss = document.createElement("link");
        myCss.setAttribute("type", "text/css");
        myCss.setAttribute("rel", "stylesheet");
        myCss.setAttribute("href", cssHref);
        myCss.setAttribute("class", l);
        document.body.appendChild(myCss)
    }
    function h() {
        var e = document.getElementsByClassName(l);
        for (var t = 0; t < e.length; t++) {
            document.body.removeChild(e[t])
        }
    }
    function p() {
        var e = document.createElement("div");
        e.setAttribute("class", a);
        document.body.appendChild(e);
        setTimeout(function() {
            document.body.removeChild(e)
        },
        100)
    }
    function getSize(e) {
        return {
            height: e.offsetHeight,
            width: e.offsetWidth
        }
    }
    function checkSize(i) {
        var s = getSize(i);
        return s.height > minHeight && s.height < maxHeight && s.width > minWidth && s.width < maxWidth
    }
    function m(e) {
        var t = e;
        var n = 0;
        while ( !! t) {
            n += t.offsetTop;
            t = t.offsetParent
        }
        return n
    }
    function g() {
        var e = document.documentElement;
        if ( !! window.innerWidth) {
            return window.innerHeight
        } else if (e && !isNaN(e.clientHeight)) {
            return e.clientHeight
        }
        return 0
    }
    function y() {
        if (window.pageYOffset) {
            return window.pageYOffset
        }
        return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
    }
    function E(e) {
        var t = m(e);
        return t >= w && t <= b + w
    }
    function setBgm() {
        var e = document.createElement("audio");
        e.setAttribute("class", l);
        e.src = bgmSrc;
        e.loop = false;
        e.addEventListener("canplay",
        function() {
            setTimeout(function() {x(k)},500);
            setTimeout(function() {N();p();
                for (var e = 0; e < O.length; e++) {
                    T(O[e])
                }
            },
            15500)
        },
        true);
        e.addEventListener("ended",function() {N();h()},true);
        e.innerHTML = " <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>";
        document.body.appendChild(e);
        e.play()
    }
    function x(e) {
        e.className += " " + s + " " + o
    }
    function T(e) {
        e.className += " " + s + " " + u[Math.floor(Math.random() * u.length)]
    }
    function N() {
        var e = document.getElementsByClassName(s);
        var t = new RegExp("\\b" + s + "\\b");
        for (var n = 0; n < e.length;) {
            e[n].className = e[n].className.replace(t, "")
        }
    }
    var minHeight = 3;
    var minWidth = 3;
    var maxHeight = 800;
    var maxWidth = 1400;
    var s = "mw-harlem_shake_me";
    var o = "im_first";
    var u = ["im_drunk", "im_baked", "im_trippin", "im_blown"];
    var a = "mw-strobe_light";
    var l = "mw_added_css";
    var b = g();
    var w = y();
    var C = document.getElementsByTagName("*");
    var k = null;
    for (var L = 0; L < C.length; L++) {
        var targetDiv = C[L];
        if (checkSize(targetDiv)) {
            if (E(targetDiv)) {
                k = targetDiv;
                break
            }
        }
    }
    if (targetDiv === null) {
        console.warn("Could not find a node of the right size. Please try a different page.");
        return
    }
    
    loadCss();
    setBgm();
    
    var O = [];
    for (var L = 0; L < C.length; L++) {
        var targetDiv = C[L];
        if (checkSize(targetDiv)) {
            O.push(targetDiv)
        }
    };
}
var bgmSrc = "https://m7.music.126.net/20201219231059/2949ea296bafa181d3c942157cd89692/ymusic/69ea/af4b/0b5a/ec0722198a0d113eec83ac810f18fca3.mp3";
var cssHref = "https://blog.kieng.cn/static/css/hi.css"; //https://cdn.jsdelivr.net/gh/realwds/cdn/css/crazy.css
