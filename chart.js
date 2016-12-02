var datar =[
   ["2014", 10, 11, 12, 13],
   ["2015", 20, 11, 14, 13],
   ["2016", 30, 15, 12, 13]
];
var container = document.getElementById("example");
var activeColumn = 0;
var hot = new Handsontable(container, {
  data: datar,
  minSpareRows: 1,
  contextMenu: true,
  colWidths: [80,80,80,80,80],
  rowHeights: [30,30,30,30,30,30,30,30],
  colHeaders: ["YearCar", "Ford", "Volvo", "Toyota", "Honda"],
  afterChange: refreshChart

});
var dar =["Ford", "Volvo", "Toyota", "Honda"]

var ctx = document.getElementById("myChart");

getChart(datar);

function getChart(d){

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dar,
            datasets: [{
                label: '2014',
                data: datar[0].slice(1,5),
                backgroundColor: [
                 'red','red', 'red','red'
                ],
                borderColor: [
                   'red','red', 'red','red'
                ],
                borderWidth: 1
              },
              {
                label: '2015',
                data: datar[1].slice(1,5),
                backgroundColor: [
                 'blue','blue','blue', 'blue'
                ],
                borderColor: [
                 'blue','blue','blue', 'blue'
                ],
                borderWidth: 1
             },
             {
                label: '2016',
                data: datar[2].slice(1,5),
                backgroundColor: [
                  'yellow','yellow','yellow','yellow'
                ],
                borderColor: [
                  'yellow','yellow','yellow','yellow'
                ],
                borderWidth: 1
          }]

        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });


}

function refreshChart(changes, source){
  if(!changes){
    return
  }
    var p = datar;
    getChart(p);

}

//
// function newcard(event){
//
//     for(var i=0; i<datar.length-1; ++i){
//       if(event.target.value==datar[i][0]){
//
//         getChart(datar[i].slice(1,5));
//       }
//     }
//   // getChart();
//
// }
//
// for (var i=0; i<datar.length-1; ++i) {
//
//     var card = document.createElement("input");
//     card.setAttribute('class', 'addedButton');
//     card.type = "button";
//     card.value = datar[i][0];
//     talk.appendChild(card);
//     // card.onclick = newcard;
// }
