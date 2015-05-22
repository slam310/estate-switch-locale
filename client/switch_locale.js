// Here is the magic of
I18nSwitch = function(tag) {
  // Setting up
  var i18nTag = Session.get('i18nTag') || TAPi18n.getLanguages();
  if (TAPi18n.getLanguage() == i18nTag) {} else {
    TAPi18n.setLanguage(i18nTag);
  }
  return;
};
if (Meteor.isClient) {

  Meteor.startup(function() {
    Session.set('i18nTag', 'fr');
    Session.setDefault('showLoadingIndicator', false);
  });
}

TAPi18n.setLanguage('fr')
  .done(function() {
    Session.set("showLoadingIndicator", false);
  })
  .fail(function(error_message) {
    // Handle the situation
    console.log(error_message);
  });
  Deps.autorun(function() {
    var i18nTag = Session.get('I18nTag');
    I18nSwitch(i18nTag);
    return;
  });

  Template.SwitchLocale.rendered = function () {

    this.$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false,
      hover: false,
      alignment: 'right',
      gutter: 0,
      belowOrigin: true
    });
  }
  Template.SwitchLocale.events({
    "click a.language-tag": function(event, tpl) {
      var locale = null;
      $this = $(event.target);
      locale = $this.data("lang");
      Session.set('i18nTag', locale);
    }
  });

  Template.SwitchLocale.helpers({
    languages: function() {
      return _.map(TAPi18n.getLanguages(), function(lang, tag) {
        return {
          tag: tag,
          name: lang.name
        };
      });
    },
    isCurrentLanguage: function() {
      return this.tag === TAPi18n.getLanguage();
    }
  });
