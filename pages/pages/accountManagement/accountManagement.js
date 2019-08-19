// pages/pages/accountManagement/accountManagement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',//姓名
    address: ''//详细地址
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '账号管理'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#111a2b'
      })
  },

  name:function(e){
    this.setData({
      name: e.detail.value
    })
  },

  address:function(e){
    this.setData({
      address: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  
})