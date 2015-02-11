require 'redmine'

Rails.application.paths["app/overrides"] ||= []
Rails.application.paths["app/overrides"] << File.expand_path("../app/overrides", __FILE__)

require_dependency 'redmine_undev_watchers'

Redmine::Plugin.register :redmine_undev_watchers do
  name 'Redmine Undev Watchers Plugin'
  author 'Undev'
  description 'This plugin makes selection of watchers more convenient.'
  version '0.0.4'
  url 'http://github.com/Undev/redmine_undev_watchers' if respond_to?(:url)
  author_url 'http://github.com/Undev'
  requires_redmine :version_or_higher => '0.9.0'
end

