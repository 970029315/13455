$(function() {
    $('#link_login').on('click', function() {
        $('.reg').hide()
        $('.login').show()
    })
    $('#link_reg').on('click', function() {
        $('.reg').show()
        $('.login').hide()
    })
})
var form = layui.form
var layer = layui.layer
form.verify({
    // 自定义了一个叫做 pwd 校验规则
    pwd: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
    // 校验两次密码是否一致的规则
    repwd: function(value) {
        // 通过形参拿到的是确认密码框中的内容
        // 还需要拿到密码框中的内容
        // 然后进行一次等于的判断
        // 如果判断失败,则return一个提示消息即可
        var pwd = $('.reg [name=password]').val()
        if (pwd !== value) {
            return '两次密码不一致！'
        }
    }
})
$("#form_reg").on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: '/api/reguser',
        data: {
            username: $('#form_reg [name=username]').val(),
            password: $('#form_reg [name=password]').val()
        },
        success: function(res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('注册成功，请登录！')
                // 模拟人的点击行为
            $('#link_login').click()

        }
    })
})
$("#form_login").on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        type: 'post',
        url: '/api/login',
        data: $(this).serialize(),
        success: function(res) {
            if (res.status !== 0) {
                return layer.msg(res.message)
            }
            layer.msg('登陆成功')
            localStorage.setItem('token', res.token)
            location.href = 'index.html'

        }
    })
})