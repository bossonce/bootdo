// pages/pages/create_company/create_company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    company_add:true,//公司logo
    company_logo_2:"",//公司logo
    shuffling_figure_picture1:[],
    itemList: [
      { id: 1, name: '灯光音响', isSelected: false, },
      { id: 2, name: '电视投影', isSelected: false, },
      { id: 3, name: '婚礼道具', isSelected: false, },
      { id: 4, name: '舞台丨TRUSS丨雷亚', isSelected: false, }
    ],

    companyName1: '',//公司名称
    contact1: '',//联系人
    contact11: '',//联系方式
    detailedAddress1: '',//详细地址
    businessTag: '',//业务标签
    companyProfile: '',//公司简介
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
        if (res.tempFilePaths.length == 4){
          that.setData({
            shuffling_figure_picture1: res.tempFiles
          })
        }else{
          that.setData({
            shuffling_figure_picture1: res.tempFiles
          });
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
  },

  delete_picture:function(e){//删除
    var that = this;
    console.log(e.currentTarget.dataset.index);
    console.log(that.data.shuffling_figure_picture1);
    var num = that.data.shuffling_figure_picture1
    for (var xq = 0; xq < num.length;xq++){
      if (num[xq].size == e.currentTarget.dataset.index){
        num.splice(xq, 1);
      }
    };

    that.setData({
      shuffling_figure_picture1: num
    });
  },

  companyName: function (e) {//公司名称
    this.setData({
      companyName1: e.detail.value
    })
  },

  contact: function (e) {//联系人
    this.setData({
      contact1: e.detail.value
    })
  },

  contact1: function (e) {//联系方式
    this.setData({
      contact11: e.detail.value
    })
  },

  detailedAddress: function (e) {//详细地址
    this.setData({
      detailedAddress1: e.detail.value
    })
  },

  businessTag: function (e) {//业务标签
    this.setData({
      businessTag: e.detail.value
    })
  },

  companyProfile: function (e) {//公司简介
    this.setData({
      companyProfile: e.detail.value
    })
  },

  submit_audit:function(){//提交按钮
  var that = this
    console.log(that.data.company_logo_2);//公司logo
    console.log("companyName", that.data.companyName1);//公司名称
    console.log("contact", that.data.contact1);//联系人
    console.log("contact1", that.data.contact11);//联系方式
    console.log("detailedAddress", that.data.detailedAddress1);//详细地址
    console.log(that.data.shuffling_figure_picture1);//公司轮播图

    var list = that.data.itemList;
    var list1 = [];
    for (var xw = 0; xw < list.length;xw++){
      if(list[xw].isSelected == true){
        list1.push(list[xw])
      }
    };
    console.log("list1",list1);//现在后的标签
    console.log(that.data.businessTag);//业务标签
    console.log(that.data.companyProfile);//公司简介
    
  }


})