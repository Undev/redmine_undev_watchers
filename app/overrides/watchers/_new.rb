Deface::Override.new(
    :virtual_path => 'watchers/_new',
    :name => 'undev_watchers_appendable',
    :replace => 'code:contains("observeSearchfield")',
    :partial => 'watchers/new_appendable')
