// pages/pages/pages.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
        title: '提示'
      }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#111a2b'
      })
  },

  create: function() {
    console.log(1);
    wx.navigateTo({
      url: '/pages/pages/create_company/create_company',
    })
  },

  associated: function() {
    wx.navigateTo({
      url: '/pages/pages/associated_companies/associated_companies'
    })
  }

})