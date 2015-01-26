Package.describe({
  name: 'joshdellay:jquery-mobile-menu',
  version: '0.0.5',
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
  api.use('jquery', 'client');
  api.addFiles('joshdellay:jquery-mobile-menu.js', 'client');
});
