"use strict";

$(document).ready(function () {
  $(".mainList__view__openButton").click(function (e) {
    e.preventDefault();
    $(".mainList__view").toggleClass("open");
  }); // 左側選單可參考文件，在當前頁面的 li 加上 .active 這個 class，
  // 讓使用者清楚目前處於哪個頁面

  $(".Nav__list__item").click(function (e) {
    $(this).toggleClass("active");
    $(this).parent().siblings().children("a").removeClass("active");
  });
  $(".mainBlock__menu__edit-dark").click(function (e) {
    e.preventDefault();
    $(".mainBlock").addClass("change");
  });
  $(".mainBlock__reply__button__light").click(function (e) {
    e.preventDefault();
    $(".mainBlock").removeClass("change");
  }); // 推到 GitHub 會無效主要是因為本地與 GitHub 路徑有差異造成的唷
  // 由於 location.pathname 是取得網頁路徑（path），在推到 GitHub 後路徑會改變，需要改為以下寫法才能正確讀取
  // window.location.pathname == '/你的專案名稱(/2022---W5-)/index.html'
  // 在本地正常推到 GitHub 後無效的狀況大多都是路徑問題引起，日後遇到類似問題也可先朝這個方向嘗試排錯
  // 可以再調整看看，若還有任何問題歡迎隨時提出
  // https://sming0305.github.io/2022---W5-/index.html
  // https://sming0305.github.io/2022---W5-/admin.html
  // protocol://host.domain/path/filename

  $(function () {
    if (window.location.pathname == '/2022---W5-/index.html') {
      $("#assignment").addClass("active");
    } else if (window.location.pathname == '/2022---W5-/admin.html') {
      $("#admin").addClass("active");
    }
  }); //本地端使用  
  // http://localhost:8080/index.html
  // protocol://host.domain/path/filename
  //   $(function () {
  //     if(window.location.pathname == '/index.html') {
  //       $("#assignment").addClass("active");
  //     } else if(window.location.pathname == '/admin.html') {
  //       $("#admin").addClass("active");
  //     }
  //   });
});
//# sourceMappingURL=all.js.map
