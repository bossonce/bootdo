//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    indicatorDots:true,//是否出现标点
    xinput_view:false,//搜索框
    xinput:0//搜索框透明度
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '中艺星宇'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
      backgroundColor: '#111a2b'
      })
  },
  search:function(){
    var that = this;
    that.setData({
      xinput_view:true,
      xinput:0.5
    })
  },

  search1: function () {
    var that = this;
    that.setData({
      xinput_view: true,
      xinput: 1
    })
  }
})

// "tabBar": {
//   "color": "#6288cc",
//   "selectedColor": "#fff",
//   "backgroundColor": "#000",
//   "list": [
//     {
//       "pagePath": "pages/pages/index/index",
//       "text": "首页",
//       "iconPath": "",
//       "selectedIconPath": "pages/images/icon_home_page.png"
//     },
//     {
//       "pagePath": "",
//       "text": "工具",
//       "iconPath": "pages/images/icon_icon_tool.png",
//       "selectedIconPath": ""
//     },
//     {
//       "pagePath": "",
//       "text": "下单",
//       "iconPath": "pages/images/icon_nav3.png",
//       "selectedIconPath": ""
//     },
//     {
//       "pagePath": "",
//       "text": "我的",
//       "iconPath": "pages/images/icon_my.png",
//       "selectedIconPath": ""
//     }
//   ]
// },
