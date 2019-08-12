// pages/pages/payment_methods/payment_methods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    payment:false,//新增
    methods:[
      "现金1", "现金2","现金3"
    ],
    xval:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '收款方式'
    }),
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#111a2b'
      })
  },

  xnew:function(){ //点击新增
    var that = this;
    that.setData({
      payment:true
    })
  },

  getInputValue(e) { //获取新增时的方式 
    this.data.xval = e.detail;//时时获取输入值
  },

  submit1:function(){ //保存按钮
    var methods = this.data.methods; //需要循环的数组
    if (this.data.payment == false){
      console.log(this.data.methods)//保存需要传入的数组
    }else{
      methods.push(this.data.xval.value);//添加到数组里
      this.setData({
        payment: false,//切换保存方式
        methods: methods
      })
    }

  },

  xnew_methods:function(e){
    var array = []; //空数组用来保存删除后的元素
    var methods = this.data.methods; //需要循环的数组
    for (var a = 0; a < methods.length;a++){
      if (a != e.currentTarget.dataset.ind){
        array.push(methods[a]);//添加到新数组里
      }
    };
    this.setData({
      methods: array
    });
  }
})