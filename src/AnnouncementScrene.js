/**
 * Created by hongda on 2015/11/24.
 */

var AnnouncementScrene_UI;

var AnnouncementScrene = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        cc.log("进入-公告");
        AnnouncementScrene_UI = ccs.load(res.Announcement_json);
        this.addChild(AnnouncementScrene_UI.node);

        var Announcement_BUT = ccui.helper.seekWidgetByName(AnnouncementScrene_UI.node, "Button_1");
        var Announcement_txt = ccui.helper.seekWidgetByName(AnnouncementScrene_UI.node, "Text_1");
        var ScrollView = ccui.helper.seekWidgetByName(AnnouncementScrene_UI.node, "ScrollView_1");
        //ScrollView_1
        var richText = new ccui.RichText();
        richText.ignoreContentAdaptWithSize(false);
        richText.setContentSize(cc.size(530, 700));

        var re1 = new ccui.RichElementText(1, cc.color(255, 0, 0),255, "             请！注！意!               " + "\n", "fonts/fzchj.ttf", 30);
        var re2 = new ccui.RichElementText(2, cc.color(0, 0, 255), 255,"这是一款跟你以前玩过的其他RPG都不一样的游戏，他是全球首款放置类仙侠RPG游戏，意味着枯燥乏味的不停手工打拐的时代已经已去不复返了！！！" + "\t\n", "fonts/fzchj.ttf", 24);
        var re3 = new ccui.RichElementText(3, cc.color(0, 255, 0), 255,"在这里打怪都是自！动！的！从你创建人物成功开始，就会不停地自动打怪，获得经验和银两、掉落装备自动卖店与放入背包之中！！！\r\n", "fonts/fzchj.ttf", 24);
        var re4 = new ccui.RichElementText(4, cc.color(255, 0, 0), 255,"即使退出游戏也不！会！停！随时再回到游戏就可以收获一推经验、银两和装备！怎么样够爽吧！！！\r\n", "fonts/fzchj.ttf", 24);
        var re5 = new ccui.RichElementText(5, cc.color(255, 255, 0), 255,"你所要做的就是挑选最好的装备给你的人物和伙伴穿上，不断地挑战BOSS和其他玩家，最终达到实力的巅峰，迎娶白富美！\n", "fonts/fzchj.ttf", 24);
        var re6 = new ccui.RichElementText(7, cc.color(0, 255, 0), 255,"\n还等什么，赶紧试试吧！！！", "Helvetica", 24);

        richText.pushBackElement(re1);
        richText.pushBackElement(re2);
        richText.insertElement(re3,2);
        richText.pushBackElement(re4);
        richText.insertElement(re5,5);
        richText.pushBackElement(re6);
        richText.x = 280;
        richText.y = 380;
        ScrollView.addChild(richText,5,1006);
        Announcement_txt.setVisible(false);

        //ScrollView.setInnerContainerSize(580,900);

        Announcement_BUT.addClickEventListener(function(btn, type) {
            Announcement_UI.removeAllChildren();
        });

        return true;
    }

});
