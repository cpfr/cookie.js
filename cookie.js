function Cookie(){}
Cookie.__keys__ = [];

Cookie.get = function(key) {
    value = document.cookie.match('(^|;)\\s*' + key + '\\s*=\\s*([^;]+)');
    return value ? decodeURIComponent(value.pop()) : '';
}

Cookie.set = function(key, value){
    if(Cookie.__keys__.indexOf(key) < 0){
        Cookie.__keys__.push(key);
    }
    var expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear()+1);
    document.cookie = key+'='+encodeURIComponent(value)
                    +'; expires='+expirationDate;
}

Cookie.remove = function(key){
    var expirationDate = new Date(0);
    document.cookie = key+'=; expires='+expirationDate;
}

Cookie.clearAll = function(){
    for(var i = 0; i < Cookie.__keys__.length; i++){
        Cookie.remove(Cookie.__keys__[i]);
    }
    Cookie.__keys__ = [];
}

Cookie.getKeys = function(){
    return Cookie.__keys__.slice();
}