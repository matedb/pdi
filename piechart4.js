var dom = document.getElementById('arboles');
  var myChart = echarts.init(dom, {
    renderer: 'canvas',
    useDirtyRect: false
  });
var app = {};

var option;

option = {
title: {
text: 'Programa "Plantemos un Arbol"',
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
    { value: 13, name: 'Florentino Ameghino' },
    { value: 1, name: 'Mariano Moreno' },
    { value: 1, name: 'General Lamadrid' },
    { value: 2, name: 'San Juan Bautista' },
    { value: 1, name: 'La Calera' },
    { value: 2, name: 'Nicolas Avellaneda' },
    { value: 1, name: 'Malvinas Argentinas' },
    { value: 2, name: 'Club de Futbol Alumni' },
    { value: 7, name: 'AquíLasNoticias' },
    { value: 1, name: 'Archyde' },
    { value: 11, name: 'Argentina.gob.ar' },
    { value: 2, name: 'Argentina.onu' }
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