$(".list-item").on('click', function(){
    $(this).toggleClass('is-list-item-selected').siblings().removeClass('is-list-item-selected');
 })