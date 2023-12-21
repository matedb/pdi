var dom = document.getElementById('origination');
    var myChart = echarts.init(dom, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    
    var option;

    option = {
      title: {
        text: 'Origen del Artículo',
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
        { value: 2102, name: 'LOCAL' },
        { value: 383, name: 'NO LOCAL' },
        { value: 60, name: 'INTERNACIONAL' }
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