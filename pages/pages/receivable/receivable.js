// pages/pages/receivable/receivable.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shuffling_figure_picture_view1: true,//公司图片
    shuffling_figure_picture1: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '回款'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#111a2b'
      })
  },

  shuffling_figure_picture: function () {//公司轮播图
    var that = this;
    wx.chooseImage({
      count: 4,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log("res", res);
        that.data.shuffling_figure_picture_view1 = false;
        if (res.tempFilePaths.length == 4) {
          that.setData({
            shuffling_figure_picture1: res.tempFiles,
            shuffling_figure_picture_view1: false
          })
        } else {
          that.setData({
            shuffling_figure_picture1: res.tempFiles
          })
        }
      }
    })
  },

  delete_picture:function(e){//删除图片
    console.log(e)
  }
})