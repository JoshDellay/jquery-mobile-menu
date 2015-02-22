if (Meteor.isClient) {
  Template.example.events({
    'click #open': function () {
      openSlider('my-menu', true);
    },
    'click #close': function () {
      closeSlider('my-menu', true);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
 
openSlider = function (id, fullscreen) {
    console.log('calling create slider...');
    var slider = $('#' + id);
    var fs;

    if (fullscreen) {
        fs = 'mm-fullscreen mm-white'
    } else {
        fs = 'mm-white'
    }

    //Initlaize jquery mobile-menu (slide up)
    slider.mmenu({
        'onClick': {
            'blockUI': false,
            'close': true,
            'preventDefault': false,
            'setSelected': true
        },
        'offCanvas': {
            'position': 'right',
            'zposition': 'front'
        },
        'classes': fs.toString()
    }, {
        'transitionDuration': 100
    });

    slider.trigger('open.mm');
};

closeSlider = function (id, callback) {
    var slider = $('#' + id);
    slider.trigger('close.mm');
};