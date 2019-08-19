// pages/pages/look_at_company/look_at_company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: 0,//tab切换
    focus_on_name: "关注"//
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '查看公司'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#111a2b'
      })
  },
  
  classification_view: function (e) {
    var index = e.target.dataset.num;
    this.setData({
      tab: index
    })
  },

  focus_on: function () {
    this.setData({
      focus_on_name: "已关注"
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})