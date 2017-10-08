var redWineList = [];
var whiteWineList = [];


window.onload = function() {
  $('#redw').click(function(event){
    event.preventDefault();
    redWineList.push($('#redlist').val());
    $('#redwine').append("<li><input type='checkbox'>" + $('#redlist').val() + "</li>");
  });
  $('#whitew').click(function(event){
    event.preventDefault();
    whiteWineList.push($('#whitelist').val());
    $('#whitewine').append("<li><input type='checkbox'>" + $('#whitelist').val() + "</li>");
  });
  $('#sparklingw').click(function(event){
    event.preventDefault();
    whiteWineList.push($('#sparklingist').val());
    $('#sparklingwine').append("<li><input type='checkbox'>" + $('#sparklinglist').val() + "</li>");
  });
  $('#rosew').click(function(event){
    event.preventDefault();
    whiteWineList.push($('#roselist').val());
    $('#rosewine').append("<li><input type='checkbox'>" + $('#roselist').val() + "</li>");
  });
};

$('li').click(function(event) {
    var isChecked = $(this).children('input').prop('checked');
    console.log(isChecked);
    if (isChecked === true) {
      $(this).remove();
    }
});
