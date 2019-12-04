import * as dd from 'dingtalk-jsapi';
dd.ready(function () {
    
    var corpId = 'dingd33857ab82be027c35c2f4657eb6378f';
    //使用SDK 获取免登授权码
    dd.runtime.permission.requestAuthCode({
        corpId: corpId,
        onSuccess: function (result) {
            var code = result.code;
            sessionStorage.setItem('code',code)
            alert(code);
        }
    });
});

export default {
    dd
}