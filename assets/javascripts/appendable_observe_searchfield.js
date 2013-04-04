function appendableObserveSearchfield(fieldId, targetId, url, fieldName) {
  $('#'+fieldId).each(function() {
    var $this = $(this);
    $this.attr('data-value-was', $this.val());
    var check = function() {
      var val = $this.val();
      if ($this.attr('data-value-was') != val){
        $this.attr('data-value-was', val);
        $.ajax({
          url: url,
          type: 'get',
          data: {q: $this.val().trim()},
          success: function(data){
            var $target = $('#'+targetId)
              .addClass('show')
              .find('*:not(:has(input:checked), :checked)')
              .remove()
              .end()
              .append(data)

            if(fieldName) {
              $target
                .find(":checkbox")
                .attr("name", fieldName)
            }

            $target
              .find(':checked')
              .each(function(idx, el) {
                $target
                  .find( 'label:has([value="' + el.value + '"]:not(:checked))' )
                  .remove()
              });

            groupWatchers(targetId, 4);
          },
          beforeSend: function(){ $this.addClass('ajax-loading'); },
          complete: function(){ $this.removeClass('ajax-loading'); }
        });
      }
    };
    var reset = function() {
      if (timer) {
        clearInterval(timer);
        timer = setInterval(check, 300);
      }
    };
    var timer = setInterval(check, 300);
    $this.bind('keyup click mousemove', reset);
  });
}


function toggleCloudLink(linkId, blockId, toggleClass) {
  $('#'+linkId).on('click', function(e) {
    $('#'+blockId).toggleClass(toggleClass);
  });
}

function groupWatchers (containerId, columnsNum) {
  var
    $container = $('#'+containerId),
    $labels = $container.find('label'),
    itemsPerColumn = Math.ceil( $labels.length / columnsNum ),
    $column;

  for (var column = 0; column < columnsNum; column++) {
    $column = $('<div />');
    for (var item = column * itemsPerColumn; item < ( column + 1 ) * itemsPerColumn && item < $labels.length; item++) {
      $column.append($labels.eq(item));
    };
    $column.appendTo($container);
  }
}
