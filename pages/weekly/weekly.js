// pages/weekly/weekly.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thisweekcomicslist:[
      {
        name: "约会大作战",
        c: "五河士道的后宫番",
        imagePath: "/images/like.png",
        isStronglyCommended: true,
        id:1

      },
      {
         
        name: "进击的巨人",
        c: "热血战斗",
        imagePath: "/images/2.png",
        isStronglyCommended: true,
        id: 2

      },
      {
        name: "FATE",
        c: "没看过",
        imagePath: "/images/3.png",
        isStronglyCommended: false,
        id: 3
      }
      

    ],
    currentIndex:0,
   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex:this.data.thisweekcomicslist.length-1
  
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

  },
  f0:function(event)
  {
    this.setData({
      currentIndex: this.data.thisweekcomicslist.length-1

    })
  },
  f1:function(event)
  {
    var movieId=event.currentTarget.dataset.movieId
    wx.navigateTo({
      url: '/pages/detail/detail?id='+movieId,
    })
  }
})