// pages/pages/workflow/workflow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: 0,
    imgUrl1: 0,
    imgUrl2: 0,
    imgUrl3: 0,
    imgUrl4: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '工作流'
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

  listpx1: function (e) {  //出库
    console.log(e);
    console.log("this.data.pxopen", this.data.pxopen)
    if (this.data.pxopen1) {
      this.setData({
        pxopen1: false,
        active1: true,
        imgUrl1: 0
      })
    } else {
      this.setData({
        // content: this.data.px,
        pxopen1: true,
        active1: false,
        imgUrl1: 180
      })
    }
  },

  listpx2: function (e) {  //回库
    if (this.data.pxopen2) {
      this.setData({
        pxopen2: false,
        active2: true,
        imgUrl2: 0
      })
    } else {
      this.setData({
        // content: this.data.px,
        pxopen2: true,
        active2: false,
        imgUrl2: 180
      })
    }
  },

  listpx3: function (e) {  //配货
    if (this.data.pxopen3) {
      this.setData({
        pxopen3: false,
        active3: true,
        imgUrl3: 0
      })
    } else {
      this.setData({
        // content: this.data.px,
        pxopen3: true,
        active3: false,
        imgUrl3: 180
      })
    }
  },

  listpx4: function (e) {  //审核
    if (this.data.pxopen4) {
      this.setData({
        pxopen4: false,
        active4: true,
        imgUrl4: 0
      })
    } else {
      this.setData({
        // content: this.data.px,
        pxopen4: true,
        active4: false,
        imgUrl4: 180
      })
    }
  }
})