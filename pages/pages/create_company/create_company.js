// pages/pages/create_company/create_company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    company_add:true,//公司logo
    company_logo_2:"",//公司logo
    shuffling_figure_picture_view1:true,//公司图片
    shuffling_figure_picture1:[],
    itemList: [
      { id: 1, name: '灯光音响', isSelected: false, },
      { id: 2, name: '电视投影', isSelected: false, },
      { id: 3, name: '婚礼道具', isSelected: false, },
      { id: 4, name: '舞台丨TRUSS丨雷亚', isSelected: false, }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '创建公司'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
      backgroundColor: '#111a2b'
      })
  },

  company_logo:function(){//公司logo
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log("res", res.tempFilePaths[0]);
        that.setData({
          // 下面本来是这样子的:isCollected=isCollected,可以简写
          company_logo_2: res.tempFilePaths[0],
          company_add:false
        })
      }
    })
  },

  shuffling_figure_picture:function(){//公司轮播图
    var that = this;
    wx.chooseImage({
      count: 4,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log("res", res);
        that.data.shuffling_figure_picture_view1 = false;
        if (res.tempFilePaths.length == 4){
          that.setData({
            shuffling_figure_picture1: res.tempFiles,
            shuffling_figure_picture_view1:false
          })
        }else{
          that.setData({
            shuffling_figure_picture1: res.tempFiles
          })
        }
      }
    })
  },

  lab:function(e){ //标签
    var index = e.currentTarget.dataset.index;
    var item = this.data.itemList[index];
    item.isSelected = !item.isSelected;
    this.setData({
      itemList: this.data.itemList,
    });
  }
})