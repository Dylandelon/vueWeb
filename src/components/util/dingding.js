import * as dd from 'dingtalk-jsapi';
dd.ready(function () {
    //获取当前网页的url
    //http://ding-web.lnexin.cn/?corpid=ding46a9582af5b7541b35c2f4657eb6378f
    // var currentUrl = document.location.toString()
    // $("#url").append(currentUrl)

    // 解析url中包含的corpId
    var corpId = 'dingd33857ab82be027c35c2f4657eb6378f';
    // var corpId = currentUrl.split("corpid=")[1];
    // $("#corpId").append(corpId)

    //使用SDK 获取免登授权码
    dd.runtime.permission.requestAuthCode({
        corpId: corpId,
        onSuccess: function (result) {
            var code = result.code;
            sessionStorage.setItem('code',code)
            alert(code);
            // $("#code").append(code)
            //请求我们服务端的登陆地址
            // $.get("http://10.4.94.250:9001/ding/login?code=" + code + "&corpId=" + corpId, function (response) {
                // 我们服务器返回的信息
                // 下面代码主要是将返回结果显示出来，可以根据自己的数据结构随便写
                // for (item in response) {
                //     $("#result").append("<li>" + item + ":" + response[item] + "</li>")
                // }
                // if (response.user) {
                //     for (item in response.user) {
                //         $("#result").append("<li>\t[user 属性] " + item + " : " + response.user[item] + "</li>")
                //     }
                // }
            // });
        }
    });
});

export default {
    dd
}