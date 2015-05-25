Package.describe({
  name: 'estate-dev:switch-locale',
  version: '0.0.2',
  summary: 'SwitchLocale Helper for the package TAPi18n',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use(['tap:i18n'], ['client', 'server']);
  api.addFiles('project-tap.i18n', ['client', 'server']);

  api.use([
    'templating',
    'deps',
    'session',
    'underscore',
    'fourseven:scss'
  ], 'client');

  api.addFiles([
    'client/switch_locale.html',
    'client/switch_locale.scss',
    'client/switch_locale.js'
  ], 'client');

  api.addFiles([
    'assets/img/flags_png/flag_cn.png',
    'assets/img/flags_png/flag_de.png',
    'assets/img/flags_png/flag_en.png',
    'assets/img/flags_png/flag_es.png',
    'assets/img/flags_png/flag_fr.png',
    'assets/img/flags_png/flag_in.png',
    'assets/img/flags_png/flag_it.png',
    'assets/img/flags_png/flag_jp.png',
    'assets/img/flags_png/flag_ru.png',
  ],'client', {isAsset: true});

  api.export(['TAPi18n','i18nSwitch']);

});
