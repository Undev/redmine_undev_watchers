function appendableObserveSearchfield(fieldId, targetId, url) {
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
          data: {q: $this.val()},
          success: function(data){
            $target = $('#'+targetId)
              .find('*:not(:has(input:checked), :checked)')
              .remove()
              .end()
              .append(data)

            $target
              .find(':checked')
              .each(function(idx, el) {
                $target
                  .find( 'label:has([value="' + el.value + '"]:not(:checked))' )
                  .remove()
              });
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