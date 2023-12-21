var dom = document.getElementById('yeardate');
    var myChart = echarts.init(dom, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
      title: {
        text: 'Fecha de publicación',
        left: 'center'
        },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      type: 'pie',
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 3, name: '2018' },
        { value: 4, name: '2019' },
        { value: 28, name: '2020' },
        { value: 381, name: '2021' },
        { value: 873, name: '2022' },
        { value: 1196, name: '2023' }
      ]
    }
  ]
};


    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);

    option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
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
          data: [
          ],
          emphasis: {
            itemStyle: {
            }
          }
        }
      ]
    };