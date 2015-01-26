Package.describe({
  name: 'joshdellay:jquery-mobile-menu',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'The best jQuery plugin for app look-alike on- and off-canvas menus with sliding submenus for your website and webapp.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.addFiles('joshdellay:jquery-mobile-menu.js');
});

Package.onTest(function(api) {
  api.use('joshdellay:jquery-mobile-menu');
  api.addFiles('joshdellay:jquery-mobile-menu-tests.js');
});
