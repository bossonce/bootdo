// pages/pages/associated_companies/associated_companies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',//搜索内容
    searchLab:[
      {
        name:'北京汉斯文传媒有限公司',
        id:1
      },
      {
        name: '北京汉斯文传媒有限公司1',
        id: 2
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '关联公司'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
      backgroundColor: '#111a2b'
      })
  },

  search:function(e){//搜索
    this.setData({
      inputValue: e.detail.value
    });
  },

  search1:function(){
    wx.request({
      url: './associated_companies.json', //url
      // data: {
      //   activityId: this.data.inputValue,  //参数
      // },
      success: function (res) {
       console.log(res)
      },
    })
  },
  
  apply_for:function(e){
    console.log(e.currentTarget.dataset.index);
  }
})