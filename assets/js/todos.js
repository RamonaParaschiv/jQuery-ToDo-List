// 1. Check off specific todos by clicking
$('ul').on('click', 'li', function() {
  console.log('clicked a li');
  $(this).toggleClass('completed');
});

// 2. click on X to delete todo
$('ul').on('click', 'span', function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  // event bubbling
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    $('ul').append(
      `<li><span><i class="fa fa-trash"></i></span>${$(this).val()}</li>`
    );
    $(this).val('');
  }
});

$('#toggle-form').click(function() {
  $("input[type='text']").fadeToggle();
});
