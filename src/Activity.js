/**
 * Created by hongda on 2015/11/23.
 */
var ActivityScrene1_UI;
var ActivityScrene_but1;
var ActivityScrene_but2;
var ActivityScrene2_UI;
var ActivityScrene = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        cc.log("进入-活动一");
        ActivityScrene1_UI = ccs.load(res.Activity_1_json);
        this.addChild(ActivityScrene1_UI.node);

        ActivityScrene2 = new ActivityScrene1();
        ActivityScrene2.setVisible(false);
        this.addChild(ActivityScrene2,4,1005);
        ActivityScrene2.setTag(1005);

        var ActivityScrene_but0 = ccui.helper.seekWidgetByName(ActivityScrene1_UI.node, "Button_2");//斩妖除魔
        var ActivityScrene_but1 = ccui.helper.seekWidgetByName(ActivityScrene1_UI.node, "Button_3");//招财1
        var ActivityScrene_but2 = ccui.helper.seekWidgetByName(ActivityScrene1_UI.node, "Button_4");//招财10

        var ActivityScrene_img1 = ccui.helper.seekWidgetByName(ActivityScrene1_UI.node, "Image_2");//name
        var ActivityScrene_img2 = ccui.helper.seekWidgetByName(ActivityScrene1_UI.node, "Image_6");//描述
        var ActivityScrene_img3 = ccui.helper.seekWidgetByName(ActivityScrene1_UI.node, "Image_5");//底图
        var ActivityScrene_img4 = ccui.helper.seekWidgetByName(ActivityScrene1_UI.node, "Image_1");//002
        var ActivityScrene_img5 = ccui.helper.seekWidgetByName(ActivityScrene1_UI.node, "Image_3");//170
        var ActivityScrene_img6 = ccui.helper.seekWidgetByName(ActivityScrene1_UI.node, "Image_4");//171

        ActivityScrene_img1.loadTexture("res/UI/244.png");
        ActivityScrene_img1.setContentSize(cc.size(239, 59));
        ActivityScrene_img2.loadTexture("res/UI/249.png");
        ActivityScrene_img2.setContentSize(cc.size(155, 70));
        ActivityScrene_img3.loadTexture("res/UI/246.png");
        ActivityScrene_img3.setContentSize(cc.size(379, 432));

        ActivityScrene_img4.loadTexture("res/UI/002.png");
        ActivityScrene_img4.setContentSize(cc.size(640, 96));

        ActivityScrene_img5.loadTexture("res/UI/170.png");
        ActivityScrene_img5.setScale9Enabled(true);
        ActivityScrene_img5.setCapInsets(cc.rect(33, 33, 33, 33));
        ActivityScrene_img5.setContentSize(cc.size(600, 750));

        ActivityScrene_img6.loadTexture("res/UI/171.png");
        ActivityScrene_img6.setScale9Enabled(true);
        ActivityScrene_img6.setCapInsets(cc.rect(33, 33, 33, 33));
        ActivityScrene_img6.setContentSize(cc.size(580, 660));

        ActivityScrene_but0.addClickEventListener(function(btn, type) {
            ActivityScrene1_UI.node.setVisible(false);
            ActivityScrene2.setVisible(true);
        });

        ActivityScrene_but1.addClickEventListener(function(btn, type) {
            prompt.longing();
            var send_data = "{'sid':'"+ SEVER_ID +"','uid':'"+UESR_ID+"','event':'1'}";
            NetManager.getGateMessage( NET_CODE.TIME_LIMIT1 ,send_data,function(data){
                var revObj = JSON.parse(data);  //DATA数据解析成JSON
                if(revObj.status == 0){
                    prompt.fade(revObj.tips,3);
                }
                else{
                    var send_data = "{'sid':'"+ SEVER_ID +"','uid':'"+UESR_ID+"','gm':'50000'}";
                    NetManager.getGateMessage( NET_CODE.GM_PERMISSIONS ,send_data,function(data){
                        var revObj1 = JSON.parse(data);  //DATA数据解析成JSON1
                        if(revObj1.status == 0){
                            prompt.fade("恭喜成功增加50000银元",3);
                        }
                        else
                        {
                            prompt.fade("未知错误1",3);
                        }
                    })
                }
            });
        });

        ActivityScrene_but2.addClickEventListener(function(btn, type) {
            prompt.longing();
            var send_data = "{'sid':'"+ SEVER_ID +"','uid':'"+UESR_ID+"','event':'10'}";
            NetManager.getGateMessage( NET_CODE.TIME_LIMIT1 ,send_data,function(data){
                var revObj = JSON.parse(data);  //DATA数据解析成JSON
                if(revObj.status == 0){
                    prompt.fade(revObj.tips,3);
                }
                else{
                    var send_data = "{'sid':'"+ SEVER_ID +"','uid':'"+UESR_ID+"','gm':'500000'}";
                    NetManager.getGateMessage( NET_CODE.GM_PERMISSIONS ,send_data,function(data){
                        var revObj1 = JSON.parse(data);  //DATA数据解析成JSON1
                        if(revObj1.status == 0){
                            prompt.fade("恭喜成功增加500000银元",3);
                        }
                        else
                        {
                            prompt.fade("未知错误1",3);
                        }
                    })
                }
            });
        });
        return true;
    }

});

var ActivityScrene1 = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        cc.log("进入-活动二");
        ActivityScrene2_UI = ccs.load(res.Activity_2_json);
        this.addChild(ActivityScrene2_UI.node);

        ActivityScrene_but1 = ccui.helper.seekWidgetByName(ActivityScrene2_UI.node, "Button_1");//招财进宝
        var ActivityScrene1_but1 = ccui.helper.seekWidgetByName(ActivityScrene2_UI.node, "Button_5");//挑战BOSS
        var ActivityScrene1_img1 = ccui.helper.seekWidgetByName(ActivityScrene2_UI.node, "Image_1");//002
        var ActivityScrene1_img2 = ccui.helper.seekWidgetByName(ActivityScrene2_UI.node, "Image_2");//244
        var ActivityScrene1_img3 = ccui.helper.seekWidgetByName(ActivityScrene2_UI.node, "Image_3");//170
        var ActivityScrene1_img4 = ccui.helper.seekWidgetByName(ActivityScrene2_UI.node, "Image_4");//171
        var ActivityScrene1_img5 = ccui.helper.seekWidgetByName(ActivityScrene2_UI.node, "Image_5");//bg\1
        var ActivityScrene1_img6 = ccui.helper.seekWidgetByName(ActivityScrene2_UI.node, "Image_15");//135
        var ActivityScrene1_img7 = ccui.helper.seekWidgetByName(ActivityScrene2_UI.node, "Sprite_1");//bg\2


        ActivityScrene1_img1.loadTexture("res/UI/002.png");
        ActivityScrene1_img1.setContentSize(cc.size(640, 96));
        ActivityScrene1_img2.loadTexture("res/UI/244.png");
        ActivityScrene1_img2.setContentSize(cc.size(239, 59));
        ActivityScrene1_img3.loadTexture("res/UI/170.png");
        ActivityScrene1_img3.setScale9Enabled(true);
        ActivityScrene1_img3.setCapInsets(cc.rect(33, 33, 33, 33));
        ActivityScrene1_img3.setContentSize(cc.size(600, 750));
        ActivityScrene1_img4.loadTexture("res/UI/171.png");
        ActivityScrene1_img4.setScale9Enabled(true);
        ActivityScrene1_img4.setCapInsets(cc.rect(33, 33, 33, 33));
        ActivityScrene1_img4.setContentSize(cc.size(580, 660));
        ActivityScrene1_img5.loadTexture("res/bg/1.png");
        ActivityScrene1_img5.setContentSize(cc.size(544, 456));
        ActivityScrene1_img6.loadTexture("res/UI/135.png");
        ActivityScrene1_img6.setScale9Enabled(true);
        ActivityScrene1_img6.setCapInsets(cc.rect(33, 33, 34, 34));
        ActivityScrene1_img6.setContentSize(cc.size(544, 100));

        ActivityScrene1_img7.setTexture("res/bg/2.png");

        ActivityScrene_but1.addClickEventListener(function(btn, type) {
            ActivityScrene2.setVisible(false);
            ActivityScrene1_UI.node.setVisible(true);
        });

        ActivityScrene1_but1.addClickEventListener(function(btn, type) {
            if(JOB_LV<15){
                prompt.fade("您的等级未达到15级，无法参加此活动！",3);
            }
            else
            {
                prompt.fade("功能暂未开放！",3);
            }
        });


        return true;
    }

});


