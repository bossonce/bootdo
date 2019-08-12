// pages/pages/audit_failed/audit_failed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choose: false,// 让所有的选项都成为未选中状态
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '审核未通过'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#000000'
      })
  },

  chooseItem:function(e){//标签切换
    var oldidx = this.data.currentidx;
    //记录当前点击的对象的序号
    var currentidx = e.currentTarget.dataset.idx;
    console.log("e",e);
    console.log("currentidx", currentidx);
    console.log("oldidx", oldidx);
    if (oldidx == currentidx) {
      var choose = this.data.choose;
      console.log("choose1", choose)
      this.setData({
        currentidx: currentidx,
        choose: !choose
      })
    } else {
      console.log("choose2", choose)
      this.setData({
        currentidx: currentidx,
        choose: true
      });
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