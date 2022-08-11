"use strict";

$(document).ready(function () {
  $(".mainList__view__openButton").click(function (e) {
    e.preventDefault();
    $(".mainList__view").toggleClass("open");
  });
  $(".mainBlock__menu__edit-dark").click(function (e) {
    e.preventDefault();
    $(".mainBlock").addClass("change");
  });
  $(".mainBlock__reply__button__light").click(function (e) {
    e.preventDefault();
    $(".mainBlock").removeClass("change");
  });
});
//# sourceMappingURL=all.js.map
