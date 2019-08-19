// pages/pages/reported_loss/reported_loss.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrow:0,
    exa:true,
    shuffling_figure_picture_view1: true,//公司图片
    shuffling_figure_picture1: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '报损'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#111a2b'
      })
  },

  damage_of_equipment:function(e){
    console.log(e.currentTarget.dataset.idx);
    var exad = e.currentTarget.dataset.idx;
    if (exad == true){
      this.setData({
        arrow: 180,
        exa: false
      })
    }else{
      this.setData({
        arrow: 0,
        exa: true
      })
    }
  },

  shuffling_figure_picture: function () {//公司轮播图
    var that = this;
    wx.chooseImage({
      count: 4,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        if (res.tempFilePaths.length == 4) {
          that.setData({
            shuffling_figure_picture1: res.tempFiles
          })
        } else {
          that.setData({
            shuffling_figure_picture1: res.tempFiles
          });
        }
      }
    })
  },

  delete_picture: function (e) {//删除
    var that = this;
    console.log(e.currentTarget.dataset.index);
    console.log(that.data.shuffling_figure_picture1);
    var num = that.data.shuffling_figure_picture1
    for (var xq = 0; xq < num.length; xq++) {
      if (num[xq].size == e.currentTarget.dataset.index) {
        num.splice(xq, 1);
      }
    };

    that.setData({
      shuffling_figure_picture1: num
    });
  },
 
})