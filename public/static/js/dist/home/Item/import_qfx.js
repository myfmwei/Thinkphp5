$(function(){$(".j-importShop").click(function(){var a=$(this).data("shopid");$(':hidden[name="shopid"]').val(a),showShopInfo("",a)}),$(document).on("click",".jGetgood",function(a){var b=$(':hidden[name="shopid"]').val();$(".jbox-close").click();var c=$(this).siblings("input").val();showShopInfo(c,b)}),$(document).on("click",".j-pageJump",function(){var a=$(':hidden[name="shopid"]').val();$(".jbox-close").click();var b=$(this).prev().val();showShopInfo("",a,b)}),showShopInfo=function(a,b,c){HYD.ajaxPopTable({title:"选择要导入的产品<div class='goodsearch'><input type='text' name='title' placeholder='请输入产品名称' class='input' value='"+a+"'/><a href='javascript:;' class='btn btn-primary jGetgood'><i class='gicon-search white'></i>查询</a></div>",width:1e3,minHeight:400,url:"/Item/import_qfxshop_list",data:{id:b,title:a,p:c},tpl:$("#tpl_item_importTable").html(),onPageChange:function(a,c){a.find(".j-selectAll").click(function(){a.find(".j-chkbox").attr("checked",!0)}),a.find(".j-lowestPrice").change(function(){var a=$(this).val(),b=$(this).data("index");datatotal=data.totalRows,c.data.dataset[b].lowestPrice=a}),""==a.find(".paginate").html()&&a.find(".pageJump").hide(),a.find(".j-import").click(function(){var d=[];a.find(".j-chkbox:checked").each(function(){var a=$(this).data("index");d.push(c.data.dataset[a])}),$.ajax({url:"/Item/import_qfxshop",type:"post",dataType:"json",data:{goods:d,shop_id:b},beforeSend:function(){$.jBox.showloading()},success:function(b){$.jBox.close(a),$.jBox.hideloading(),1==b.status?HYD.hint("success","恭喜您，导入成功"+b.data.success+"条，导入失败"+b.data.fail+"条"):HYD.hint("danger","对不起，导入失败："+b.msg)}})})}})},$(document).on("click",".j-goodsList-import-all",function(){$.jBox.show({title:"提示",content:_.template($("#tpl_jbox_simple").html(),{content:"导入时间可能过长, 请耐心等待, 导入期间请勿刷新页面！是否执行此操作?"}),btnOK:{onBtnClick:function(a){$.jBox.close(a);var b=$(".j-import").data("shopid"),c=$("#totalRows").val();$.ajax({url:"/Item/import_qfxshop_all",type:"post",dataType:"json",data:{id:b,total_num:c},beforeSend:function(){$.jBox.showloading()},success:function(a){$(".jbox-close").click(),1==a.status?HYD.hint("success","恭喜您，导入成功"+a.data.success+"条，导入失败"+a.data.fail+"条"):HYD.hint("danger","对不起，导入失败："+a.msg),$.jBox.hideloading()}})}}})}),$(".j-Unbundling").click(function(){var a=$(this).data("shopid");$.jBox.show({title:"提示",content:_.template($("#tpl_jbox_simple").html(),{content:"确认要解除此商城的绑定吗？"}),btnOK:{onBtnClick:function(b){$.jBox.close(b),$.ajax({url:"/Item/unbindShop",type:"post",dataType:"json",data:{id:a,handle:"qfx"},beforeSend:function(){$.jBox.showloading()},success:function(a){1==a.status?(HYD.hint("success","恭喜您，操作成功！"),setTimeout(function(){window.location.reload()},1e3)):HYD.hint("danger","对不起，操作失败："+a.msg),$.jBox.hideloading()}})}}})})});