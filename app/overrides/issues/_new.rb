Deface::Override.new(
    :virtual_path => 'issues/new',
    :name => 'undev_watchers_usable',
    :replace => '#watchers_form',
    :partial => 'issues/watchers_form')
