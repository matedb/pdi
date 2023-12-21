var dom = document.getElementById('libros');
  var myChart = echarts.init(dom, {
    renderer: 'canvas',
    useDirtyRect: false
  });
var app = {};

var option;

option = {
title: {
text: 'Programa "Mis Primeros Libros"',
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
    { value: 13, name: 'Género' },
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