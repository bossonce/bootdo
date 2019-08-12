// pages/pages/back_library_to_confirm/back_library_to_confirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '回库确认'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
      backgroundColor: '#111a2b'
      })
  },

  handleInput(e) {
    let value = this.validateNumber(e.detail.value)
    this.setData({
      value
    })
  },
  validateNumber(val) {
    return val.replace(/\D/g, '')
  },
  // equipment_im:function(e){
  //   var nowidx = e.target.dataset.num;//当前索引
  //   for(){

  //   }
  //   console.log(e);
  // },
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