function login() {
    // 获取用户名元素和密码元素
    var usernameElem = document.getElementById("username");
    var passwordElem = document.getElementById("password");
    // 获取用户名和密码
    var username = usernameElem.value.trim();
    var password = passwordElem.value.trim();
    // 检查用户名和密码是否为空
    if (username === "" || password === "") {
        alert("请输入用户名和密码！");
        return;
    }
    // 模拟登录验证
    setTimeout(function() {
        if (username === "123456" && password === "123456") {
            alert("登录成功！");
            // 创建倒计时器，倒计时 3 秒后跳转页面
            var count = 3;
            var intervalId = setInterval(function() {
                var countdownElem = document.getElementById("countdown");
                countdownElem.innerText = "页面将在 " + count + " 秒后跳转";
                count--;
                if (count < 0) {
                    clearInterval(intervalId);
                    window.location.href = "./页面设计.html"; // 跳转的目标 URL
                }
            }, 1000);
        } else {
            alert("用户名或密码错误！");
        }
    }, 1000); // 模拟登录验证时间
}

function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    document.getElementById('time').textContent = timeString;
    setTimeout(getTime, 1000); // 每隔1秒更新一次
}
