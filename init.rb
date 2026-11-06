# encoding: utf-8

Redmine::Plugin.register :redmine_subproject_collapse do
  name 'Sub Projects Collapse Plugin'
  author 'Anton Sergeev'
  description 'This plugin provides ability to collapse sub projects'
  version '0.0.2'
  requires_redmine version_or_higher: '7.0'
  url 'https://github.com/anton-sergeev/redmine_subproject_collapse'
  author_url 'https://github.com/anton-sergeev'
end

# Load the hook listener via Zeitwerk (no require_relative)
Rails.application.config.to_prepare do
  RedmineSubprojectCollapse::Hooks
end
