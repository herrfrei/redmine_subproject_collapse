module RedmineSubprojectCollapse
  class Hooks < Redmine::Hook::ViewListener
    render_on :view_layouts_base_html_head,
              partial: 'hooks/redmine_subproject_collapse/html_head'
  end
end