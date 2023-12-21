var dom = document.getElementById('source');
  var myChart = echarts.init(dom, {
    renderer: 'canvas',
    useDirtyRect: false
  });
var app = {};

var option;

option = {
title: {
text: 'Medios Digitales',
left: 'center'
},
tooltip: {
trigger: 'item'
},
legend: {
orient: 'vertical',
left: 'left'
},
series: [
{
  type: 'pie',
  radius: '50%',
  data: [
    { value: 13, name: '5900TV' },
    { value: 1, name: '011NEWS' },
    { value: 1, name: 'Agenda4P' },
    { value: 2, name: 'AgroEmpresario' },
    { value: 1, name: 'AguasVillaMaría' },
    { value: 2, name: 'AlternativoCórdoba' },
    { value: 2, name: 'AmbienteCba' },
    { value: 1, name: 'Ansol' },
    { value: 87, name: 'AquíLasNoticias' },
    { value: 1, name: 'Archyde' },
    { value: 11, name: 'Argentina.gob.ar' },
    { value: 2, name: 'Argentina.onu' },
    { value: 1, name: 'Ars' },
    { value: 1, name: 'Bellville.gob.ar' },
    { value: 1, name: 'Boardgamegeek' },
    { value: 9, name: 'Braga.pt' },
    { value: 1, name: 'Bragatv.pt' },
    { value: 8, name: 'C20' },
    { value: 3, name: 'Cadena3' }
  ],
  emphasis: {
    itemStyle: {
      shadowBlur: 10,
      shadowOffsetX: 0,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
  }
}
]
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);