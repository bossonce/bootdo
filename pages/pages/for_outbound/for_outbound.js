// pages/pages/for_outbound/for_outbound.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    equipment:"280rpx",//活动设备高度
    arrow:0//活动设备箭头
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '待出库'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
      backgroundColor: '#111a2b'
      })
  },

  activity:function(e){
    var that = this;
    if (that.data.pxopen) {
      this.setData({
        pxopen: false,
        equipment: "auto",
        arrow:"180"
      })
    }else{
      this.setData({
        pxopen: true,
        equipment: "280rpx",
        arrow: "0"
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