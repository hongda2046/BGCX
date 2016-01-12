/**
 * Created by Conan on 2015/11/23.
 */

var MainScrene_PK = cc.Layer.extend({
    sprite:null,
    PK_img8:null, //找怪
    pk_img12:null, //十位
    pk_img13:null, //个位
    ctor:function () {
        this._super();
        cc.log("进入-取经");
        Main_pk = ccs.load(res.Main_UI_PK_json);
        PK_node =  ccs.load(res.Main_UI_PK_2_json);
        this.schedule(this.timer,1)
        PK_node.node.setPosition(0,135);
        PK_node.node.setTag(1001);

        PKregUI  = new GameChat_UI();
        PKregUI.setPosition(0,135);
        PKregUI.setVisible(false);
        this.addChild(PKregUI,2,100002);
        PKregUI.setTag(1005);

        var PK_Btn1 = ccui.helper.seekWidgetByName(PK_node.node, "Button_3");//游戏设置
        var PK_Btn2 = ccui.helper.seekWidgetByName(PK_node.node, "Button_4");//世界地图
        var PK_Btn3 = ccui.helper.seekWidgetByName(PK_node.node, "Button_5");//快速战斗
        var PK_Btn4 = ccui.helper.seekWidgetByName(PK_node.node, "Button_6");//世界聊天
        var PK_Btn5 = ccui.helper.seekWidgetByName(Main_pk.node, "Button_1");//战斗统计
        var PK_Btn6 = ccui.helper.seekWidgetByName(Main_pk.node, "Button_2");//信息预警

        var PK_img1 = ccui.helper.seekWidgetByName(PK_node.node, "Image_91");//188
        var PK_img2 = ccui.helper.seekWidgetByName(PK_node.node, "Image_92");//189
        var PK_img3 = ccui.helper.seekWidgetByName(PK_node.node, "Image_93");//190
        var PK_img4 = ccui.helper.seekWidgetByName(PK_node.node, "Image_94");//191

        PK_img1.loadTexture("res/UI/188.png");
        PK_img1.setScale(1.4,1.4);
        PK_img1.setContentSize(cc.size(106, 31));
        PK_img2.loadTexture("res/UI/189.png");
        PK_img2.setScale(1.4,1.4);
        PK_img2.setContentSize(cc.size(106, 31));
        PK_img3.loadTexture("res/UI/190.png");
        PK_img3.setScale(1.4,1.4);
        PK_img3.setContentSize(cc.size(106, 31));
        PK_img4.loadTexture("res/UI/191.png");
        PK_img4.setScale(1.4,1.4);
        PK_img4.setContentSize(cc.size(106, 31));

        PK_hear1 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_3");  //猪脚
        PK_hear2 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_6");  //伙伴1
        PK_hear3 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_6_0");  //伙伴2
        PK_hear4 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_6_1");  //伙伴3

        PK_monst1 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_4");  //怪物1
        PK_monst2 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_4_1");  //怪物2
        PK_monst3 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_4_2");  //怪物3
        PK_monst4 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_4_3");  //怪物4

        PK_monst1.getChildByName("Image_8").scaleX = -(PK_monst1.getChildByName("Image_8").scaleX);
        PK_monst1.getChildByName("Image_8").getChildByName("LoadingBar_4").scaleX = -(PK_monst1.getChildByName("Image_8").getChildByName("LoadingBar_4").scaleX);
        PK_monst1.getChildByName("Image_8").getChildByName("Text_14").scaleX =-(PK_monst1.getChildByName("Image_8").getChildByName("Text_14").scaleX);
        PK_monst1.getChildByName("Image_8").getChildByName("Text_14").x=PK_monst1.getChildByName("Image_8").getChildByName("Text_14").x-120;
        PK_monst1.getChildByName("Image_8").getChildByName("LoadingBar_4").x =PK_monst1.getChildByName("Image_8").getChildByName("LoadingBar_4").x+65;

        PK_monst2.getChildByName("Image_8").scaleX = -(PK_monst2.getChildByName("Image_8").scaleX);
        PK_monst2.getChildByName("Image_8").getChildByName("LoadingBar_4").scaleX = -(PK_monst2.getChildByName("Image_8").getChildByName("LoadingBar_4").scaleX);
        PK_monst2.getChildByName("Image_8").getChildByName("Text_14").scaleX =-(PK_monst2.getChildByName("Image_8").getChildByName("Text_14").scaleX);
        PK_monst2.getChildByName("Image_8").getChildByName("Text_14").x=PK_monst2.getChildByName("Image_8").getChildByName("Text_14").x-120;
        PK_monst2.getChildByName("Image_8").getChildByName("LoadingBar_4").x =PK_monst2.getChildByName("Image_8").getChildByName("LoadingBar_4").x+65;

        PK_monst3.getChildByName("Image_8").scaleX = -(PK_monst3.getChildByName("Image_8").scaleX);
        PK_monst3.getChildByName("Image_8").getChildByName("LoadingBar_4").scaleX = -(PK_monst3.getChildByName("Image_8").getChildByName("LoadingBar_4").scaleX);
        PK_monst3.getChildByName("Image_8").getChildByName("Text_14").scaleX =-(PK_monst3.getChildByName("Image_8").getChildByName("Text_14").scaleX);
        PK_monst3.getChildByName("Image_8").getChildByName("Text_14").x=PK_monst3.getChildByName("Image_8").getChildByName("Text_14").x-120;
        PK_monst3.getChildByName("Image_8").getChildByName("LoadingBar_4").x =PK_monst3.getChildByName("Image_8").getChildByName("LoadingBar_4").x+65;

        PK_monst4.getChildByName("Image_8").scaleX = -(PK_monst4.getChildByName("Image_8").scaleX);
        PK_monst4.getChildByName("Image_8").getChildByName("LoadingBar_4").scaleX = -(PK_monst4.getChildByName("Image_8").getChildByName("LoadingBar_4").scaleX);
        PK_monst4.getChildByName("Image_8").getChildByName("Text_14").scaleX =-(PK_monst4.getChildByName("Image_8").getChildByName("Text_14").scaleX);
        PK_monst4.getChildByName("Image_8").getChildByName("Text_14").x=PK_monst4.getChildByName("Image_8").getChildByName("Text_14").x-120;
        PK_monst4.getChildByName("Image_8").getChildByName("LoadingBar_4").x =PK_monst4.getChildByName("Image_8").getChildByName("LoadingBar_4").x+65;

        PK_hear1.setVisible(false);
        PK_hear2.setVisible(false);
        PK_hear3.setVisible(false);
        PK_hear4.setVisible(false);
        PK_monst1.setVisible(false);
        PK_monst2.setVisible(false);
        PK_monst3.setVisible(false);
        PK_monst4.setVisible(false);

        var PK_img5 = ccui.helper.seekWidgetByName(Main_pk.node, "Sprite_1");//054.jpg
        var PK_img6 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_1");//055
        var PK_img7 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_2");//056
        this.PK_img8 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_9");//066
        var PK_img9 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_10");//068
        var PK_img10 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_11");//073

        PK_Btn5.loadTextures("res/UI/180.png", "res/UI/338.png", "");
        PK_Btn5.setContentSize(cc.size(83, 83));
        PK_Btn6.loadTextures("res/UI/181.png", "res/UI/337.png", "");
        PK_Btn6.setContentSize(cc.size(83, 83));

        PK_img5.setTexture("res/UI/054.jpg");
        PK_img6.loadTexture("res/UI/055.png");
        PK_img7.loadTexture("res/UI/056.png");
        this.PK_img8.loadTexture("res/UI/066.png");//寻找敌人
        PK_img9.loadTexture("res/UI/068.png");
        PK_img10.loadTexture("res/UI/073.png");
        this.addChild(PK_node.node,2,100001);


        PK_Btn1.addClickEventListener(function(btn, type) {
            //prompt.longing();
            GameSet_UI  = new Main_GameSet();
            GameSet_UI.setPosition(0,0);
            Main_UI.node.addChild(GameSet_UI,99,10020);
            GameSet_UI.setTag(10020);
        });

        PK_Btn2.addClickEventListener(function(btn, type) {
            GameMap_UI  = new Main_GameMap();
            GameMap_UI.setPosition(0,0);
            Main_UI.node.addChild(GameMap_UI,2,10020);
            GameMap_UI.setTag(10020);
            Fighting_UI.setVisible(false)
        });

        PK_Btn3.addClickEventListener(function(btn, type) {
            prompt.longing();
            GameAdd_UI  = new Main_GameAdd();
            GameAdd_UI.setPosition(0,0);
            Main_UI.node.addChild(GameAdd_UI,99,10020);
            GameAdd_UI.setTag(10020);
        });

        PK_Btn4.addClickEventListener(function(btn, type) {
            PK_node.node.setVisible(false);
            PKregUI.setVisible(true);
        });

        PK_Btn5.addClickEventListener(function(btn, type) {
            prompt.longing();
            PK_statistical  = new Main_statistical();
            PK_statistical.setPosition(0,0);
            Main_UI.node.addChild(PK_statistical,99,10020);
            PK_statistical.setTag(10020);

        });

        PK_Btn6.addClickEventListener(function(btn, type) {
            prompt.longing();
            var send_data = "{'sid':'"+ SEVER_ID +"','uid':'"+UESR_ID+"'}";
            NetManager.getGateMessage( NET_CODE.PK_TONGJI ,send_data,function(data){
                var revObj = JSON.parse(data);  //DATA数据解析成JSON
                prompt.fade("您的胜率为：" +revObj.win + "，建议您前往下一张地图！",3)
            });
        });

        this.addChild(Main_pk.node);
        return true;

    },
    timer:function(){
    if(real_num1 == 0){
        //this.Real_time();
        Real_time()
    }
    else if(time_num <=15 && time_num>=0 ){
        this.pk_img12 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_10");  //倒计时（十位）
        this.pk_img13 = ccui.helper.seekWidgetByName(Main_pk.node, "Image_11");  //倒计时（个位）
        this.PK_img8.setVisible(true);
        this.pk_img12.setVisible(true);
        this.pk_img13.setVisible(true);
        PK_hear1.setVisible(false);
        PK_monst1.setVisible(false);
        if(time_num==15){
            //15
            this.pk_img12.loadTexture("res/UI/068.png");
            this.pk_img13.loadTexture("res/UI/072.png");
        }
        else if(time_num==14){
            //14
            this.pk_img12.loadTexture("res/UI/068.png");
            this.pk_img13.loadTexture("res/UI/071.png");

        }
        else if(time_num==13){
            //13
            this.pk_img12.loadTexture("res/UI/068.png");
            this.pk_img13.loadTexture("res/UI/070.png");

        }
        else if(time_num==12){
            //12
            this.pk_img12.loadTexture("res/UI/068.png");
            this.pk_img13.loadTexture("res/UI/069.png");
        }
        else if(time_num==11){
            //11
            this.pk_img12.loadTexture("res/UI/068.png");
            this.pk_img13.loadTexture("res/UI/068.png");

        }
        else if(time_num==10){
            //10
            this.pk_img12.loadTexture("res/UI/068.png");
            this.pk_img13.loadTexture("res/UI/077.png");

        }
        else if(time_num==9){
            //9
            this.pk_img12.loadTexture("res/UI/077.png");
            this.pk_img13.loadTexture("res/UI/076.png");

        }
        else if(time_num==8){
            //8
            this.pk_img12.loadTexture("res/UI/077.png");
            this.pk_img13.loadTexture("res/UI/075.png");

        }
        else if(time_num==7){
            //7
            this.pk_img12.loadTexture("res/UI/077.png");
            this.pk_img13.loadTexture("res/UI/074.png");

        }
        else if(time_num==6){
            //6
            this.pk_img12.loadTexture("res/UI/077.png");
            this.pk_img13.loadTexture("res/UI/073.png");
        }
        else if(time_num==5){
            //5
            this.pk_img12.loadTexture("res/UI/077.png");
            this.pk_img13.loadTexture("res/UI/072.png");
        }
        else if(time_num==4){
            //4
            this.pk_img12.loadTexture("res/UI/077.png");
            this.pk_img13.loadTexture("res/UI/071.png");
        }
        else if(time_num==3){
            //3
            this.pk_img12.loadTexture("res/UI/077.png");
            this.pk_img13.loadTexture("res/UI/070.png");
        }
        else if(time_num==2){
            //2
            this.pk_img12.loadTexture("res/UI/077.png");
            this.pk_img13.loadTexture("res/UI/069.png");
        }
        else if(time_num==1){
            //1
            this.pk_img12.loadTexture("res/UI/077.png");
            this.pk_img13.loadTexture("res/UI/068.png");
        }
        else if(time_num==0){
            //0
            this.pk_img12.loadTexture("res/UI/077.png");
            this.pk_img13.loadTexture("res/UI/077.png");
        }
        time_num--;
    }
    else {
        this.PK_img8.setVisible(false);
        this.pk_img12.setVisible(false);
        this.pk_img13.setVisible(false);
        PK_hear1.setVisible(true);
        PK_monst1.setVisible(true);

        if (Record.length>=17){
            Record.splice(0,1);   //删除数组第一个值
        }
        else{
            txt_n2="";
            if(PK_DESC.length > text_num){
                var txt = fenge(PK_DESC[text_num],"#");
                pkcontent(txt);
                text_num++;
            }
            else{
                text_num=0;
                Real_time();
            }
            txt_n3++;
        }
    }
    },

});

function pkcontent(txt){
    richText_num=richText_num+1;
    var num1 = txt.length;
    var txt1 = "";
    var txt2 = [];
    var num =0;
    /*
    角色名：#B087C3         255,255,0      role_cc
    怪物名：#0066FF         0,102,255       most_cc
    技能名：#008000         0,128,0         skill_cc
    伤害数值：#FF0000        255,0,0         pk_cc
    经验奖励：#D91FCA        217,31,202      exp_cc
    金钱奖励：#7C16D2        124,22,210      king_cc
    */
    for(var x= 1;x<=richText_num;x++){
        if(richText_num<=16){
            if(richText_read[x] == undefined){
                richText_read[x]= new ccui.RichText();
                richText_read[x].ignoreContentAdaptWithSize(false);
                var role_cc;
                var most_cc;
                var skill_cc;
                var pk_cc;
                var exp_cc;
                var king_cc;
                for (var i =0;i<num1;i++){
                    if(txt[i] !="" && txt[i] !="B087C3" && txt[i] !="0066FF" && txt[i] !="008000" && txt[i] !="FF0000" && txt[i] !="D91FCA" && txt[i] !="7C16D2"){
                        if(txt[i] == "skill_0"){
                            txt1 =txt1 + "普功";
                        }
                        else{
                            txt1 =txt1 + txt[i];
                        }
                        if(i>0){
                            if(txt[i-1] =="B087C3"){
                                role_cc = cc.color(176,135,195);
                                txt2[num] = new ccui.RichElementText(1, role_cc,255, txt[i] , "fonts/fzchj.ttf", 22);
                                richText_read[x].pushBackElement(txt2[num]);
                                num++;
                            }
                            else if(txt[i-1] =="0066FF"){
                                most_cc = cc.color(0,102,255);
                                txt2[num] = new ccui.RichElementText(1, most_cc,255, txt[i] , "fonts/fzchj.ttf", 22);
                                richText_read[x].pushBackElement(txt2[num]);
                                num++;
                            }
                            else if(txt[i-1] =="008000"){
                                skill_cc = cc.color(0,128,0);
                                txt2[num] = new ccui.RichElementText(1, skill_cc,255, txt[i] , "fonts/fzchj.ttf", 22);
                                richText_read[x].pushBackElement(txt2[num]);
                                num++;
                            }
                            else if(txt[i-1] =="FF0000"){
                                pk_cc = cc.color(255,0,0);
                                txt2[num] = new ccui.RichElementText(1, pk_cc,255, txt[i] , "fonts/fzchj.ttf", 22);
                                richText_read[x].pushBackElement(txt2[num]);
                                num++;
                            }
                            else if(txt[i-1] =="D91FCA"){
                                exp_cc = cc.color(217,31,202);
                                txt2[num] = new ccui.RichElementText(1, exp_cc,255, txt[i] , "fonts/fzchj.ttf", 22);
                                richText_read[x].pushBackElement(txt2[num]);
                                num++;
                            }
                            else if(txt[i-1] =="7C16D2"){
                                king_cc = cc.color(124,22,210);
                                txt2[num] = new ccui.RichElementText(1, king_cc,255, txt[i] , "fonts/fzchj.ttf", 22);
                                richText_read[x].pushBackElement(txt2[num]);
                                num++;
                            }
                            else{
                                txt2[num] = new ccui.RichElementText(1, cc.color(0,0,0),255, txt[i] , "fonts/fzchj.ttf", 22);
                                richText_read[x].pushBackElement(txt2[num]);
                                num++;
                            }
                        }
                    }
                }
                var num_long = txt1.length;
                if(num_long*22>550){
                    var high_num= Math.ceil(num_long*22/50)
                }
                else{
                    high_num=1;
                }
                richText_read[x].setContentSize(cc.size(550, high_num*24));
                richText_read[x].x = 320;
                richText_read[x].y = 500 - high_num*24*x;
                PK_node.node.addChild(richText_read[x],100+x,1000+x);
            }
        }
        else{
            var chao_num = Object.keys(richText_read);
            var chao_num1 = chao_num.length-16;
            if(chao_num1>0){
                for(var y=1;y<=chao_num1;y++){
                    richText_read[y].setVisible(false);
                }
                for(var z=chao_num1+1;z<=chao_num.length;z++){
                    richText_read[z].y=richText_read[z].y+24;
                }
            }
            x=chao_num.length+1;
            richText_read[x]= new ccui.RichText();
            richText_read[x].ignoreContentAdaptWithSize(false);
            var role_cc;
            var most_cc;
            var skill_cc;
            var pk_cc;
            var exp_cc;
            var king_cc;
            for (var i =0;i<num1;i++){
                if(txt[i] !="" && txt[i] !="B087C3" && txt[i] !="0066FF" && txt[i] !="008000" && txt[i] !="FF0000" && txt[i] !="D91FCA" && txt[i] !="7C16D2"){
                    if(i>0){
                        if(txt[i-1] =="B087C3"){
                            role_cc = cc.color(255,255,0);
                            txt2[num] = new ccui.RichElementText(1, role_cc,255, txt[i] , "Helvetica", 22);
                            richText_read[x].pushBackElement(txt2[num]);
                            num++;
                        }
                        else if(txt[i-1] =="0066FF"){
                            most_cc = cc.color(0,102,255);
                            txt2[num] = new ccui.RichElementText(1, most_cc,255, txt[i] , "Helvetica", 22);
                            richText_read[x].pushBackElement(txt2[num]);
                            num++;
                        }
                        else if(txt[i-1] =="008000"){
                            skill_cc = cc.color(0,128,0);
                            if(txt[i] == "skill_0"){
                                var skill_name = "普通攻击"
                            }
                            txt2[num] = new ccui.RichElementText(1, skill_cc,255, skill_name , "Helvetica", 22);
                            richText_read[x].pushBackElement(txt2[num]);
                            num++;
                        }
                        else if(txt[i-1] =="FF0000"){
                            pk_cc = cc.color(255,0,0);
                            txt2[num] = new ccui.RichElementText(1, pk_cc,255, txt[i] , "Helvetica", 22);
                            richText_read[x].pushBackElement(txt2[num]);
                            num++;
                        }
                        else if(txt[i-1] =="D91FCA"){
                            exp_cc = cc.color(217,31,202);
                            txt2[num] = new ccui.RichElementText(1, exp_cc,255, txt[i] , "Helvetica", 22);
                            richText_read[x].pushBackElement(txt2[num]);
                            num++;
                        }
                        else if(txt[i-1] =="7C16D2"){
                            king_cc = cc.color(124,22,210);
                            txt2[num] = new ccui.RichElementText(1, king_cc,255, txt[i] , "Helvetica", 22);
                            richText_read[x].pushBackElement(txt2[num]);
                            num++;
                        }
                        else{
                            txt2[num] = new ccui.RichElementText(1, cc.color(0,0,0),255, txt[i] , "Helvetica", 22);
                            richText_read[x].pushBackElement(txt2[num]);
                            num++;
                        }
                    }
                }
            }
            var num_long = txt1.length;
            if(num_long*22>550){
                var high_num= Math.ceil(num_long*22/50)
            }
            else{
                high_num=1;
            }
            richText_read[x].setContentSize(cc.size(550, high_num*24));
            richText_read[x].x = 320;
            richText_read[x].y = 500 - high_num*24*17;
            PK_node.node.addChild(richText_read[x],100+x,1000+x);
        }
    }
}

var Main_GameSet = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        cc.log("进入-游戏设置");
        var GameSet = ccs.load(res.Main_UI_PK_3_json);
        this.addChild(GameSet.node);

        var PK_Btn1 = ccui.helper.seekWidgetByName(GameSet.node, "Button_1");//游戏设置
        var PK_Btn2 = ccui.helper.seekWidgetByName(GameSet.node, "Button_2");//保存
        var CheckBox_1 = ccui.helper.seekWidgetByName(GameSet.node, "CheckBox_1");//白色
        var CheckBox_2 = ccui.helper.seekWidgetByName(GameSet.node, "CheckBox_2");//绿色
        var CheckBox_3 = ccui.helper.seekWidgetByName(GameSet.node, "CheckBox_3");//蓝色
        var CheckBox_4 = ccui.helper.seekWidgetByName(GameSet.node, "CheckBox_4");//紫色
        var CheckBox_5 = ccui.helper.seekWidgetByName(GameSet.node, "CheckBox_5");//非本职业
        var CheckBox_6 = ccui.helper.seekWidgetByName(GameSet.node, "CheckBox_6");//聊天
        var PK_img20 = ccui.helper.seekWidgetByName(GameSet.node, "Image_3");//204
        PK_img20.loadTexture("res/UI/204.png");
        PK_img20.setContentSize(cc.size(144, 38));

        PK_Btn1.addClickEventListener(function(btn, type) {
            GameSet_UI.removeAllChildren();
            //window.clearInterval(timer);   //关掉定时器
        });

        PK_Btn2.addClickEventListener(function(btn, type) {
            var type =new Array();
            if(CheckBox_1.getSelectedState() ==true){
                type[1] ="1";
            }
            else{
                type[1] ="0";
            }
            if(CheckBox_2.getSelectedState() ==true){
                type[2] ="1";
            }
            else{
                type[2] ="0";
            }
            if(CheckBox_3.getSelectedState() ==true){
                type[3] ="1";
            }
            else{
                type[3] ="0";
            }
            if(CheckBox_4.getSelectedState() ==true){
                type[4] ="1";
            }
            else{
                type[4] ="0";
            }
            if(CheckBox_5.getSelectedState() ==true){
                type[5] ="1";
            }
            else{
                type[5] ="0";
            }
            if(CheckBox_6.getSelectedState() ==true){
                type[6] ="1";
            }
            else{
                type[6] ="0";
            }
            var name = type[1] +","+type[2]+","+type[3]+","+type[4]+","+type[5]+","+type[6];
            var send_data = "{'sid':'"+ SEVER_ID +"','uid':'"+UESR_ID+"','type':'1','order':'"+name+"'}";
            NetManager.getGateMessage( NET_CODE.PK_SET ,send_data,function(data){
                var revObj = JSON.parse(data);  //DATA数据解析成JSON
                if(revObj.status == 1){
                    GameSet_UI.removeAllChildren();
                }
                else{
                    GameSet_UI.removeAllChildren();
                }
            });
        });
        return true;
    }
});

var Main_GameMap = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        cc.log("进入-世界地图");
        var GameMap = ccs.load(res.Main_UI_Map_json);
        this.addChild(GameMap.node);

        var GameMap_img = ccui.helper.seekWidgetByName(GameMap.node, "Image_4");//列表模板
        var GameMap_img1 = ccui.helper.seekWidgetByName(GameMap.node, "Image_3");//123
        var GameMap_img2 = ccui.helper.seekWidgetByName(GameMap.node, "Image_50");//048
        var GameMap_img3 = ccui.helper.seekWidgetByName(GameMap.node, "Image_6");//048
        var GameMap_img4 = ccui.helper.seekWidgetByName(GameMap.node, "Image_7");//048
        var GameMap_img5 = ccui.helper.seekWidgetByName(GameMap.node, "Image_8");//map024
        var GameMap_img6 = ccui.helper.seekWidgetByName(GameMap.node, "Image_9");//128
        var GameMap_img7 = ccui.helper.seekWidgetByName(GameMap.node, "Image_10");//259
        var GameMap_Btn1 = ccui.helper.seekWidgetByName(GameMap.node, "Button_8");//增加次数
        var GameMap_Btn2 = ccui.helper.seekWidgetByName(GameMap.node, "Button_1");//BOSS挑战   122
        var ListView1 =ccui.helper.seekWidgetByName(GameMap.node, "ScrollView_1");
        var GameMap_txt =ccui.helper.seekWidgetByName(GameMap.node, "Text_5");      //挑战BOSS次数

        GameMap_img1.loadTexture("res/UI/123.png");
        GameMap_img1.setContentSize(cc.size(243, 64));
        GameMap_img2.loadTexture("res/UI/049.png");
        GameMap_img2.setContentSize(cc.size(36, 36));
        GameMap_img3.loadTexture("res/UI/049.png");
        GameMap_img3.setContentSize(cc.size(36, 36));
        GameMap_img4.loadTexture("res/UI/049.png");
        GameMap_img4.setContentSize(cc.size(36, 36));
        GameMap_img5.loadTexture("res/map/map_024.png");
        GameMap_img5.setContentSize(cc.size(405, 116));
        GameMap_img6.loadTexture("res/UI/128.png");
        GameMap_img6.setContentSize(cc.size(214, 71));
        GameMap_img7.loadTexture("res/UI/259.png");
        GameMap_img7.setContentSize(cc.size(130, 36));

        GameMap_Btn2.loadTextures("res/UI/122.png", "res/UI/122.png", "");
        GameMap_Btn2.setContentSize(cc.size(93, 119));
        //GameMap_Btn2.setScale(1.4,1.4);

        GameMap_txt.setString(3);
        GameMap_ScrollView = ListView1;
        GameMap_ScrollView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        GameMap_ScrollView.setTouchEnabled(true);
        GameMap_ScrollView.setBounceEnabled(true);
        GameMap_ScrollView.addEventListener(this.selectedItem,this);

        GameMap_img.removeFromParent();
        var b2= GameMap_img.clone();

        for(var i=0;i<32;i++){
            var b1= b2.clone();
            b1.y=5070-(i+1)*155;
            b1.getChildByName("Image_8").getChildByName("Image_9").getChildByName("Text_2").setString(MAP_C.map_c[i].map_name);
            b1.getChildByName("Image_8").getChildByName("Image_9").getChildByName("Text_3").setString("怪物等级：" + MAP_C.map_c[i].map_low_level + "~" + MAP_C.map_c[i].map_high_level);
            b1.getChildByName("Image_8").getChildByName("Image_10").setVisible(false);
            b1.getChildByName("Button_1").addTouchEventListener(function () {
                prompt.fade("测试期间，暂未开放！");
            });
            GameMap_ScrollView.addChild(b1,4,5);
        }

        GameMap_Btn1.addClickEventListener(function(btn, type) {
            var send_data = "{'sid':'"+ SEVER_ID +"','uid':'"+UESR_ID+"','event':'3'}";
            NetManager.getGateMessage( NET_CODE.BUY_BOSS ,send_data,function(data){
                var revObj = JSON.parse(data);  //DATA数据解析成JSON
                if(revObj.status == 1){
                    GameMap_txt.setString(Number(GameMap_txt.getString())+1);
                    prompt.fade(revObj.cmsg);
                }
                else{
                    prompt.fade(revObj.cmsg);
                }
            });
        });

        return true;
    }

});

var Main_GameAdd = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        cc.log("进入-快速战斗");
        var GameAdd = ccs.load(res.Main_UI_PK_Speed_json);
        this.addChild(GameAdd.node);

        var PK_Btn1 = ccui.helper.seekWidgetByName(GameAdd.node, "Button_1");//取消
        var PK_Btn2 = ccui.helper.seekWidgetByName(GameAdd.node, "Button_2");//确定
        var GameAdd_text = ccui.helper.seekWidgetByName(GameAdd.node, "Text");//文字内容
        var PK_img21 = ccui.helper.seekWidgetByName(GameAdd.node, "Image_3");//201
        PK_img21.loadTexture("res/UI/201.png");
        PK_img21.setContentSize(cc.size(143, 38));

        PK_Btn1.addClickEventListener(function(btn, type) {
            GameAdd_UI.removeAllChildren();
        });

        var send_data = "{'sid':'"+ SEVER_ID +"','uid':'"+UESR_ID+"'}";
        NetManager.getGateMessage( NET_CODE.SPEED_PK_TIPS ,send_data,function(data){
            var revObj = JSON.parse(data);  //DATA数据解析成JSON
            if (revObj.status == ""){
                GameAdd_text.setString(revObj.v);
            }
        });

        PK_Btn2.addClickEventListener(function(btn, type) {
            prompt.longing();
            var send_data = "{'sid':'"+ SEVER_ID +"','uid':'"+UESR_ID+"'}";
            NetManager.getGateMessage( NET_CODE.SPEED_PK ,send_data,function(data){
                var revObj = JSON.parse(data);  //DATA数据解析成JSON
                if(revObj.status == 1){
                    prompt.fade("成功加速一小时！",3);
                }
                else{
                    prompt.fade("加速失败！",3);
                }
            });
        });
        return true;
    }
});

var GameChat_UI = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        cc.log("进入-世界聊天");
        var GameChat = ccs.load(res.Main_UI_PK_1_json);
        this.addChild(GameChat.node);
        var ebox = new cc.EditBox(cc.size(320, 36), new cc.Scale9Sprite("res/UI/304.png"));

        ebox.setFontSize(24);
        ebox.setPlaceholderFontSize(24)
        ebox.setPlaceHolder("请输入...");
        ebox.x = 290;
        ebox.y = 30;
        GameChat.node.addChild(ebox);

        var PK_Btn = ccui.helper.seekWidgetByName(GameChat.node, "Button_8");
        var PK_Btn1 = ccui.helper.seekWidgetByName(GameChat.node, "Button_9");
        var PK_Btn2 = ccui.helper.seekWidgetByName(GameChat.node, "Button_10");
        var PK_Btn3 = ccui.helper.seekWidgetByName(GameChat.node, "Button_8_0");
        var PK_img24 = ccui.helper.seekWidgetByName(GameChat.node, "Image_10");//081
        PK_img24.loadTexture("res/UI/081.png");
        PK_img24.setScale(0.6,0.6);
        PK_img24.setContentSize(cc.size(240, 60));
        PK_Btn1.loadTextures("res/UI/296.png", "res/UI/339.png", "");
        PK_Btn1.setContentSize(cc.size(48, 48));
        PK_Btn2.loadTextures("res/UI/297.png", "res/UI/342.png", "");
        PK_Btn2.setContentSize(cc.size(48, 48));

        PK_Btn.addClickEventListener(function(btn, type) {
            PK_node.node.setVisible(true);
            PKregUI.setVisible(false);
        });

        return true;
    }
});

var Main_statistical = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var statistical = ccs.load(res.Main_UI_PK_4_json);
        this.addChild(statistical.node);

        var statistical_Btn = ccui.helper.seekWidgetByName(statistical.node, "Button_3");
        var statistical_text1 = ccui.helper.seekWidgetByName(statistical.node, "Text_10_3"); //战斗次数
        var statistical_text2 = ccui.helper.seekWidgetByName(statistical.node, "Text_10_3_0");//战斗胜率
        var statistical_text3 = ccui.helper.seekWidgetByName(statistical.node, "Text_10_3_1");//经验获得
        var statistical_text4 = ccui.helper.seekWidgetByName(statistical.node, "Text_10_3_2");//战斗时长
        var statistical_text5 = ccui.helper.seekWidgetByName(statistical.node, "Text_10_3_0_0");//装备掉率
        var statistical_text6 = ccui.helper.seekWidgetByName(statistical.node, "Text_10_3_1_0");//金币获得
        var statistical_text7 = ccui.helper.seekWidgetByName(statistical.node, "Text_17");
        var statistical_img = ccui.helper.seekWidgetByName(statistical.node, "Image_17");//203
        statistical_img.loadTexture("res/UI/203.png");
        statistical_img.setContentSize(cc.size(144, 38));

        //{"zid":"","count":"","time":"","win":"","drop":"","exp":"","money":"","gddesc":""}
        var send_data = "{'sid':'"+ SEVER_ID +"','uid':'"+UESR_ID+"'}";
        NetManager.getGateMessage( NET_CODE.PK_TONGJI ,send_data,function(data){
            var revObj = JSON.parse(data);  //DATA数据解析成JSON
            statistical_text1.setString(revObj.count);
            statistical_text2.setString(revObj.win);
            statistical_text3.setString(revObj.exp);
            statistical_text4.setString(revObj.time);
            statistical_text5.setString(revObj.drop);
            statistical_text6.setString(revObj.money);
            statistical_text7.setString(revObj.gddesc);
        });

        statistical_Btn.addClickEventListener(function(btn, type) {
            PK_statistical.removeAllChildren();
        });

        return true;
    }
});

function Real_time() {

    var send_data = "{'sid':'"+ SEVER_ID +"','uid':'"+UESR_ID+"'}";
    NetManager.getGateMessage( NET_CODE.PK_REALTIME ,send_data,function(data){
        var revObj = JSON.parse(data);  //DATA数据解析成JSON
        real_num1 = parseInt(revObj.time) + parseInt(revObj.desc.length);
        time_num= parseInt(revObj.time);
        for(var i=0;i<revObj.desc.length;i++){
            PK_DESC[i] = revObj.desc[i];
        }
        var ico =parseInt(revObj.licon[0])+1;
        if(real_num1 > 16){
            if(revObj.lp[0] !=""){
                PK_hear1.getChildByName("Image_5").loadTexture("res/UI/175.png");
                PK_hear1.getChildByName("Image_5").getChildByName("LoadingBar_1").loadTexture("res/UI/177.png");
                PK_hear1.getChildByName("Image_5").getChildByName("LoadingBar_2").loadTexture("res/UI/178.png");
                PK_hear1.getChildByName("Image_5").getChildByName("Text_2").setString(revObj.lp[0]); //名称
                //PK_hear1.getChildByName("Image_5").getChildByName("LoadingBar_1").setPercent(); //血条
                PK_hear1.getChildByName("Image_5").getChildByName("LoadingBar_1").getChildByName("Text_4").setString(revObj.lhp[0]+"/"+revObj.lhp[0]); //HP
                //PK_hear1.getChildByName("Image_5").getChildByName("Text_5").setString(); //LV
                PK_hear1.loadTexture("res/head/00"+ico+".png");
                //PK_hear1.setVisible(true);
            }
            if(revObj.lp[1] !=""){
                PK_hear2.getChildByName("Image_7").loadTexture("res/UI/176.png");
                PK_hear2.getChildByName("Image_7").getChildByName("LoadingBar_3").loadTexture("res/UI/177.png");
                PK_hear2.getChildByName("Image_7").getChildByName("Text_8").setString(revObj.lp[1]); //名称
                //PK_hear2.getChildByName("Image_7").getChildByName("LoadingBar_3").setPercent(); //血条
                PK_hear2.getChildByName("Image_7").getChildByName("Text_10").setString(revObj.lhp[1]+"/"+revObj.lhp[1]); //HP
                //hear2.getChildByName("Image_7").getChildByName("Text_9").setString(); //LV
                PK_hear2.loadTexture("res/monster/000"+revObj.licon[1]+".png");
                //PK_hear2.setVisible(true);
            }
            if(revObj.lp[2] !=""){
                PK_hear3.getChildByName("Image_7").loadTexture("res/UI/176.png");
                PK_hear3.getChildByName("Image_7").getChildByName("LoadingBar_3").loadTexture("res/UI/177.png");
                PK_hear3.getChildByName("Image_7").getChildByName("Text_8").setString(revObj.lp[2]); //名称
                //PK_hear3.getChildByName("Image_7").getChildByName("LoadingBar_3").setPercent(); //血条
                PK_hear3.getChildByName("Image_7").getChildByName("Text_10").setString(revObj.lhp[2]+"/"+revObj.lhp[2]); //HP
                //PK_hear3.getChildByName("Image_7").getChildByName("Text_9").setString(); //LV
                PK_hear3.loadTexture("res/monster/000"+revObj.licon[2]+".png");
                //PK_hear3.setVisible(true);
            }
            if(revObj.lp[3] !=""){
                PK_hear4.getChildByName("Image_7").loadTexture("res/UI/176.png");
                PK_hear4.getChildByName("Image_7").getChildByName("LoadingBar_3").loadTexture("res/UI/177.png");
                PK_hear4.getChildByName("Image_7").getChildByName("Text_8").setString(revObj.lp[3]); //名称
                //PK_hear4.getChildByName("Image_7").getChildByName("LoadingBar_3").setPercent(); //血条
                PK_hear4.getChildByName("Image_7").getChildByName("Text_10").setString(revObj.lhp[3]+"/"+revObj.lhp[3]); //HP
                //PK_hear4.getChildByName("Image_7").getChildByName("Text_9").setString(); //LV
                PK_hear4.loadTexture("res/monster/000"+revObj.licon[3]+".png");
                //PK_hear4.setVisible(true);
            }
            //——————————————————初始化怪物——————————————————
            if(revObj.rp[0] !=""){
                PK_monst1.getChildByName("Image_8").loadTexture("res/UI/176.png");
                PK_monst1.getChildByName("Image_8").getChildByName("LoadingBar_4").loadTexture("res/UI/193.png");
                PK_monst1.getChildByName("Image_8").getChildByName("Text_14").setString(revObj.rp[0]); //名称
                //PK_monst1.getChildByName("Image_8").getChildByName("LoadingBar_4").setPercent(); //血条
                PK_monst1.getChildByName("Image_8").getChildByName("LoadingBar_4").getChildByName("Text_22").setString(revObj.rhp[0]+"/"+revObj.rhp[0]); //HP
                //PK_monst1.getChildByName("Image_8").getChildByName("Text_15").setString(); //LV
                PK_monst1.loadTexture("res/head/00"+revObj.ricon[0]+".png");
                //PK_monst1.setVisible(true);
            }
            if(revObj.rp[1] !=""){
                PK_monst2.getChildByName("Image_8").loadTexture("res/UI/176.png");
                PK_monst2.getChildByName("Image_8").getChildByName("LoadingBar_4").loadTexture("res/UI/193.png");
                PK_monst2.getChildByName("Image_8").getChildByName("Text_14").setString(revObj.rp[1]); //名称
                //PK_monst2.getChildByName("Image_8").getChildByName("LoadingBar_4").setPercent(); //血条
                PK_monst2.getChildByName("Image_8").getChildByName("LoadingBar_4").getChildByName("Text_22").setString(revObj.rhp[1]+"/"+revObj.rhp[1]); //HP
                //PK_monst2.getChildByName("Image_8").getChildByName("Text_15").setString(); //LV
                PK_monst2.loadTexture("res/head/00"+revObj.ricon[1]+".png");
                //PK_monst2.setVisible(true);
            }
            if(revObj.rp[2] !=""){
                PK_monst3.getChildByName("Image_8").loadTexture("res/UI/176.png");
                PK_monst3.getChildByName("Image_8").getChildByName("LoadingBar_4").loadTexture("res/UI/193.png");
                PK_monst3.getChildByName("Image_8").getChildByName("Text_14").setString(revObj.rp[2]); //名称
                //PK_monst3.getChildByName("Image_8").getChildByName("LoadingBar_4").setPercent(); //血条
                PK_monst3.getChildByName("Image_8").getChildByName("LoadingBar_4").getChildByName("Text_22").setString(revObj.rhp[2]+"/"+revObj.rhp[2]); //HP
                //PK_monst3.getChildByName("Image_8").getChildByName("Text_15").setString(); //LV
                PK_monst3.loadTexture("res/head/00"+revObj.ricon[2]+".png");
                //PK_monst3.setVisible(true);
            }
            if(revObj.rp[3] !=""){
                PK_monst4.getChildByName("Image_8").loadTexture("res/UI/176.png");
                PK_monst4.getChildByName("Image_8").getChildByName("LoadingBar_4").loadTexture("res/UI/193.png");
                PK_monst4.getChildByName("Image_8").getChildByName("Text_14").setString(revObj.rp[3]); //名称
                //PK_monst4.getChildByName("Image_8").getChildByName("LoadingBar_4").setPercent(); //血条
                PK_monst4.getChildByName("Image_8").getChildByName("LoadingBar_4").getChildByName("Text_22").setString(revObj.rhp[3]+"/"+revObj.rhp[3]); //HP
                //PK_monst4.getChildByName("Image_8").getChildByName("Text_15").setString(); //LV
                PK_monst4.loadTexture("res/head/00"+revObj.ricon[3]+".png");
                //PK_monst4.setVisible(true);
            }
        }
        else{
            PK_DESC.length =1;
            PK_DESC[0] = "没有找到怪物,重新寻找中... ";
        }
    });

}


var Main_pk;
var PKregUI;
var PK_node;
var GameSet_UI;
var GameMap_UI;
var GameAdd_UI;
var PK_statistical;
var PK_warning;
var Record = [];
var PK_Text;
var richText_num=0;
var richText_read={};
var text_num=0;
var test_num=0;
var txt_n1=0;
var txt_n2;
var txt_n3=0;
var real_num=0;
var real_num1=0;
var hear_num;
var monste_num;
var PK_hear1;
var PK_hear2;
var PK_hear3;
var PK_hear4;
var PK_monst1;
var PK_monst2;
var PK_monst3;
var PK_monst4;
var PK_DESC = [];
var linshi_hp1;
var linshi_hp2;
var linshi_hp3;
var linshi_hp4;
var linshi_hp5;
var linshi_hp6;
var linshi_hp7;
var linshi_hp8;
var time_num;
var GameMap_ScrollView;
