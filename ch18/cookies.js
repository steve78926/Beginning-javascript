/**
 * Created by Administrator on 2017/2/14.
 */
  function createCookie(name,value,days, path, domain, secure) {
        if (days){
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60));
            var expries = date.toGMTString();
        }
        else var expires = "";
        cookieString = name + "=" + escape(value);
        if (expires) cookieString += "; expires=" + expires;
        if (path) cookieString += "; path=" + escape(path);
        if (domain) cookieString += "; domain=" + escape(domain);
        if (secure) cookieString += "; secure";
        document.cookie = cookieString;
    }
    createCookie("username", "Sam Jones",500);
    createCookie("location", "USA",500);
    createCookie("status", "fullmember", 5);

    function getCookie(name) {
        var nameEquals = name + "=";
        var crumbs = document.cookie.split(';');
        for (var i = 0; i < crumbs.length; i++) {
            var crumb = crumbs[i].trim();
            if (crumb.indexOf(nameEquals) == 0){
                return unescape(crumb.substring(nameEquals.length, crumb.length))
            }
        }
        return null;
    }

    function getCookies(name) {
        var myData = getCookie(name);
        var myDataArray = myData.split('|');
        for (var i = 0; i< myDataArray.length; i++) {
            return myDataArray[i];
        }
    }

    function deleteCookie(name) {
        createCookie(name,"",-1)
    }