Package.describe({
  name: 'joshdellay:jquery-mobile-menu',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'A jQuery plugin for app look-alike on- and off-canvas menus.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/JoshDellay/jquery-mobile-menu',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use('jquery@1.11.3', 'client');
  api.imply('jquery', 'client');
  api.addFiles('jquery.mobile.menu.js', 'client');
  api.addFiles('jquery.mmenu.all.js', 'client');
});
