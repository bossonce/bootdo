// pages/pages/video_details/video_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xtrue: true //初始播放按钮
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
        title: '视频播放'
      }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#111a2b'
      })
  },

  video_details1: function(e) {
    var _index = e.currentTarget.id;
    console.log(_index);
    this.setData({
      xtrue: false,
      _index: _index
    })
    //将点击视频进行播放
    var videoContext = wx.createVideoContext(_index)
    videoContext.play();
  },
})