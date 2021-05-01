(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{526:function(t,s,a){"use strict";a.r(s);var r=a(6),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210501185236.png",alt:"WX20210501-185136@2x"}})]),t._v(" "),a("h3",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),a("p",[t._v("当页面出现浮层（例如 popup 弹窗类型组件），在滑动浮层内的内容时候，浮层下的页面内容也随之发生滚动，从而出现了滚动穿透。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210501184618.GIF",alt:"图像"}})]),t._v(" "),a("h3",{attrs:{id:"官方解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官方解决方案"}},[t._v("#")]),t._v(" 官方解决方案")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210501184820.png",alt:"image-20210501184818764"}})]),t._v(" "),a("p",[a("strong",[t._v("弊端：")])]),t._v(" "),a("p",[t._v('如果在van-popup 层 使用 catch:touchStart ="stopSlide" 事件，则pop里面的内容都不可以响应bind：tap 事件，即不可以实现pop页面的自定义的键盘； 参考文档（van-popup）https://vant-contrib.gitee.io/vant-weapp/#/popup')]),t._v(" "),a("h3",{attrs:{id:"个人解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#个人解决方案"}},[t._v("#")]),t._v(" 个人解决方案")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("touchmove "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stop_scroll_chaining'")]),t._v(" 不要禁止 touchstart，禁止touchmove即可，保证浮窗内的元素可以被点击，同时保证不会滑动穿透；\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);