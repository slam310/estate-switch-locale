Package.describe({
  name: 'estate-dev:switch-locale',
  version: '0.0.1',
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
    'public/img/flags_png/flag_cn.png',
    'public/img/flags_png/flag_de.png',
    'public/img/flags_png/flag_en.png',
    'public/img/flags_png/flag_es.png',
    'public/img/flags_png/flag_fr.png',
    'public/img/flags_png/flag_in.png',
    'public/img/flags_png/flag_it.png',
    'public/img/flags_png/flag_jp.png',
    'public/img/flags_png/flag_ru.png',
  ],'client', {isAsset: true});

  api.export(['TAPi18n','i18nSwitch']);

});
