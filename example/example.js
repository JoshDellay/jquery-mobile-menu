if (Meteor.isClient) {
  Template.example.events({
    'click #open': function () {
      $("#my-menu").trigger("open.mm");
    },
    'click #close': function () {
      $("#my-menu").trigger("close.mm");
    }
  });
  
  Template.example.rendered = function() {
    $("#my-menu").mmenu({
      classes: "mm-white",
        // mm-white mm-black mm-light
      header: true,
      buttonbar: "Buttonbar",
      counters: true,
      footer: {
         footer: {
            add: true,
            content: "(c) 2015"
         }
      },
      offCanvas: {
            position  : "right",
            zposition : "front"
         },
      onClick: {
          blockUI: false,
          close: true,
          preventDefault: false,
          setSelected: true
      }
    },{
        transitionDuration: 100  // does not seem to work
    });
  };
}