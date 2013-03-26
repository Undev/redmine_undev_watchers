# module RedmineUndevWatchers
#   class Hooks < Redmine::Hook::ViewListener
#     render_on :view_issues_new_top, :partial => 'issues/some_partial'
#   end
# end


module RedmineUndevWatchers
  class ViewHooks < Redmine::Hook::ViewListener
    render_on :view_layouts_base_html_head,
              :partial => 'hooks/redmine_undev_watchers/includes'
  end
end
