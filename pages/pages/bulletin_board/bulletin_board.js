// pages/pages/bulletin_board/bulletin_board.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:0,//切换
    name:[
      "公告牌",
      "客户详情",
      "联系人",
      "查看订单"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '公告牌'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#111a2b'
      })
  },

  table:function(e){
    var name = this.data.name;
    for (var a = 0; a < name.length;a++){
      if (e.currentTarget.dataset.tab == a){
        wx.setNavigationBarTitle({
          title: name[a]
        })
      }
    }
    this.setData({
      tab: e.currentTarget.dataset.tab
    })
  },

  
})