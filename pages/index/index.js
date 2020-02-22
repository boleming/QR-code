let QRCode = require('../../utils/qrcode.js');
Page({
  data: {
    placeholder: 'www.baidu.com',
  },
  onLoad() {
    let size = this.getCavSize();
    let url = this.data.placeholder;
    this.createQrCode(url, 'myCanvas', size.cavW, size.cavH);
  },
  createQrCode(url, canvasId, cavW, cavH) {
    //调用插件中的draw方法，绘制二维码图片
    QRCode.api.draw(url, canvasId, cavW, cavH);
  },
  getCavSize() {
    let size = {};
    let res = wx.getSystemInfoSync();
    let scale = 686 / 750;
    let width = res.windowWidth * scale;
    let height = width;
    size.cavH = height;
    size.cavW = width;
    return size;
  },
  subForm(event) {
    console.log(event.detail.value.url)
    let url = event.detail.value.url || this.data.placeholder;
    wx.showToast({
      title: '成功',
      icon: 'loading',
      duration: 300
    })
    let size = this.getCavSize();
    this.createQrCode(url, 'myCanvas', size.cavW, size.cavH);
  }
})