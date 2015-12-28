//全局可调用 其他文件 可调用 有先后顺序
var loginUI;
var login_node;


var LoginSceneLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
          loginUI = ccs.load(res.MainScene_json); //此为 登陆/注册 背景层
          regUI  = new reglayer();
          login_node =  ccs.load(res.langding_1_json); // 加载 注册 界面层

        //设置节点位置 默认为 0，0 所以要重新设置
        login_node.node.setPosition(65.96,329.80);//从studio 中取的数值
        regUI.setPosition(65.96,329.80);
        regUI.setVisible(false);

        login_node.node.setTag(1001);
        this.addChild(loginUI.node,1,1001); //方便 移除 层节点 参数 1，为节点 2，为层次 数值大在最上面，3，为tag 标签 唯一
        loginUI.node.addChild(login_node.node,2,1002);
        this.addChild(regUI,4,1005);
        regUI.setTag(1005);

        var acc= ccui.helper.seekWidgetByName(login_node.node, "TextField_1");
        var pwd = ccui.helper.seekWidgetByName(login_node.node, "TextField_1_0");


        //从 资源文件 中 得到 控件
        var loginBtn = ccui.helper.seekWidgetByName(login_node.node, "Button_2");//登陆按钮
        var regBtn = ccui.helper.seekWidgetByName(login_node.node, "Button_1");//注册按钮

        loginBtn.addClickEventListener(function(btn, type) {
            cc.log("点击-登陆");
            prompt.longing();
          ACCOUNT =  acc.getString();
          PASSWORD = pwd.getString();

            var send_data = "{'acc':'"+ ACCOUNT +"','pwd':'"+PASSWORD+"'}";
            NetManager.getMessage( NET_CODE.LOGIN ,send_data,function(data){
                var revObj = JSON.parse(data);  //DATA数据解析成JSON
                if(revObj.result == 0){
                    UESR_ID=revObj.accid;
                    cc.director.runScene(new cc.TransitionFade(1, new SeverListScene()));//切换场景
                }else{
                //  1  提示失败
                    prompt.fade("登陆失败",3);
                }
            });


        });
         regBtn.addClickEventListener(function(btn, type) {
         //console.log("点击-注册");
         login_node.node.setVisible(false);
         regUI.setVisible(true);
         });

        return true;
    }

});
//登陆
var LoginScene = cc.Scene.extend({

    onEnter: function () {
        this._super();
        var loginlayer = new LoginSceneLayer();
        this.addChild(loginlayer);
    }
});

//注册
var regScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var rlayer = new reglayer();
        this.addChild(rlayer);
    }
});

//测试角色选择跳转
var createRoleScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var rlayer3 = new CreateRole();
        this.addChild(rlayer3);
    }
});

