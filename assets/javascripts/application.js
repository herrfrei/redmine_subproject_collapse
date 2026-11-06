(function($) {
  'use strict';

  function setExpanded($toggle, expanded) {
    $toggle
      .toggleClass('collapsed', !expanded)
      .attr('aria-expanded', expanded)
      .attr('aria-label', expanded ? 'Collapse project' : 'Expand project');
  }

  function addProjectsListCollapse() {
    var $projects = $('#projects-index');
    if (!$projects.length) return;

    $projects.find('div.root, div.child').each(function() {
      var $parent = $(this);
      var $children = $parent.next('ul.projects');
      var $description = $parent.children('.description');
      var expandable = $children.length > 0 || $description.length > 0;

      if (!expandable) {
        if (!$parent.hasClass('root')) {
          $parent.prepend('<span aria-hidden="true" style="padding-left:12px;"></span>');
        }
        return;
      }

      var expanded = $parent.hasClass('root');
      var $toggle = $('<a>', {
        href: '#',
        'class': 'expcolroot collapsible',
        'aria-expanded': expanded
      });

      setExpanded($toggle, expanded);
      $parent.prepend($toggle);

      if (!expanded) {
        $children.hide();
        $description.hide();
      }
    });

    $projects.on('click', 'a.expcolroot', function(event) {
      event.preventDefault();

      var $toggle = $(this);
      var expanded = $toggle.attr('aria-expanded') !== 'true';
      var $parent = $toggle.parent();

      setExpanded($toggle, expanded);
      $parent.next('ul.projects').toggle(expanded);
      $parent.children('.description').toggle(expanded);
    });
  }

  $(document).ready(addProjectsListCollapse);
})(jQuery);
