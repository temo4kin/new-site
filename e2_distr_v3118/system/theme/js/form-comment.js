$&&$(function(){var t=/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;e2UpdateSubmittability=function(){shouldBeEnabled=$("#name").val()&&t.test($("#email").val())&&$("#text").val(),shouldBeEnabled?$("#submit-button").removeAttr("disabled"):$("#submit-button").attr("disabled","disabled")},e2UpdateSubmittability(),$(".required").bind("input blur cut copy paste keypress",e2UpdateSubmittability)});