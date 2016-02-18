if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  $(document).ready(function() {
    //all yiss graphs muthafucker
    /*var ctx = document.getElementById("rarePepes").getContext("2d");
    var myNewChart = new Chart(ctx).Line(pepe, {
      scaleShowGridLines : true,
      scaleShowLabels : false,
      pointLabelFontFamily : "'Proxima-Nova'",
      animationSteps : 100,
      scaleGridLineWidth : 0,
      datasetStrokeWidth : 4,
      scaleGridLineColor : "rgba(255,255,255,.1)",
    });*/

    var dankCtx = document.getElementById("dankMemes").getContext("2d");
    dankChart = new Chart(dankCtx).Line(dank, {
      //scaleShowGridLines : false,
      scaleShowLabels : false,
      pointLabelFontFamily : "'Avenir Next'",
      animationSteps : 100,
      scaleGridLineWidth : 0,
      datasetStrokeWidth : 4,
      scaleGridLineColor : "rgba(255,255,255,.1)",
      scaleLineColor: "rgba(255,255,255,.1)",
      scaleFontFamily: "'Avenir Next', 'Helvetica', 'Arial', sans-serif",
      tooltipFontFamily: "'Avenir Next', 'Helvetica', 'Arial', sans-serif",
      scaleFontColor: "rgba(255, 255, 255, 0.5)",
      scaleShowHorizontalLines: false
    });
  })

  Template.graph.helpers({
    stock_name: function () {
      return "Dank Memes";
    },
    stock_id: function() {
      return "dankMemes";
    }
  })

  Template.stock.events({
    "click .stock": function (event) {
      dankChart.destroy();
      document.getElementById("dankMemes").width = 355;
      document.getElementById("dankMemes").height = 200;
      var dankCtx = document.getElementById("dankMemes").getContext("2d");
      if (pepeOrDank == 1) {
        pepeOrDank = 0;
        chartData = pepe;
      } else {
        pepeOrDank = 1;
        chartData = dank;
      }

      dankChart = new Chart(dankCtx).Line(chartData, {
        //scaleShowGridLines : false,
        scaleShowLabels : false,
        pointLabelFontFamily : "'Avenir Next'",
        animationSteps : 100,
        scaleGridLineWidth : 0,
        datasetStrokeWidth : 4,
        scaleGridLineColor : "rgba(255,255,255,.1)",
        scaleLineColor: "rgba(255,255,255,.1)",
        scaleFontFamily: "'Avenir Next', 'Helvetica', 'Arial', sans-serif",
        tooltipFontFamily: "'Avenir Next', 'Helvetica', 'Arial', sans-serif",
        scaleFontColor: "rgba(255, 255, 255, 0.5)",
        scaleShowHorizontalLines: false
      });
    }
  });
}




if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

pepeOrDank = 0;

var pepe = {
  labels : ["Jul","Aug","Sep","Oct","Nov","Dec","Jan"],
  datasets : [
    {
      fillColor : "#689F38",
      strokeColor : "#ffffff",
      pointColor : "#ffffff",
      pointStrokeColor : "#fff",
      data : [62,48,41,19,29,24,21]
    }
  ]
}

var dank = {
  labels : ["Jul","Aug","Sep","Oct","Nov","Dec","Jan"],
  datasets : [
    {
      fillColor : "rgba(104, 159, 56, 0.5)",
      strokeColor : "#ffffff",
      pointColor : "#ffffff",
      pointStrokeColor : "#fff",
      data : [41,62,64,50,53,57,90]
    }
  ]
}
