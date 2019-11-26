//index.js
//获取应用实例
const app = getApp()

Page({

  gotoPage: function () {
    console.log("000"),
    wx.navigateTo({
      url: '../inf/inf'
    })
  }
})
