// pages/pages/evaluation/evaluation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    evaluation:'',
    evaluationNumber:'0/50',//数量
    img:[
      '../images/yellow_star1.png',
      "../images/yellow_star1.png",
      "../images/yellow_star1.png",
      "../images/yellow_star1.png",
      "../images/yellow_star1.png",
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '评价'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#111a2b'
      })
  },

  evaluation:function(e){
    var that = this;
    var num = e.detail.value.length;
    if(num > 50){
      return
    }else{
      that.setData({
        evaluation: e.detail.value,
        evaluationNumber: num + "/50"
      })
    }
  },

  score:function(e){//评分
    var idx = e.currentTarget.dataset.idx;
    var img = this.data.img;
    for (var xq = 0; xq < img.length;xq++){
      if (xq <= idx){
        img[xq] = "../images/yellow_star.png"
      }else{
        img[xq] = "../images/yellow_star1.png"
      }
    }

    this.setData({
      img:img
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