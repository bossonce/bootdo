// pages/pages/view_all_orders/view_all_orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '查看全部订单'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#111a2b'
      })
  },

  listpx: function (e) {  //入账
    if (this.data.pxopen) {
      this.setData({
        pxopen: false,
        active: true,
        imgUrl: 0
      })
    } else {
      this.setData({
        // content: this.data.px,
        pxopen: true,
        active: false,
        imgUrl: 180
      })
    }
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