document.write("<script type='text/javascript' src='국내현황.js'><"+"/script>");  

//(직접수정 1)
var 업데이트시간 = "03.30 (10:00)";

//(직접수정 2)
var 경북대현황 = [
  36, //확진자
  0, //사망자
  36, //완치자
  0, //확진자 차이(전일 00시 대비)
  0, //사망자 차이(전일 00시 대비)
  0, //완치자 차이(전일 00시 대비)
];

//(직접수정 3)
var dayXaxis = ['11.24','11.25','11.26','11.27','11.28','11.29','11.30',
'12.1','12.2','12.3'
]
var plusXaxis = ['11.24','11.25','11.26','11.27','11.28','11.29','11.30',
'12.1','12.2','12.3'
]
var AllDayData = [
  31674,32255,32810,33313,33763,34201,34652,35163,35703,36332
]
  
  //(직접수정 7) 일일 확진자 증감추이
var plusData = [
    382,581,555,503,450,438,451,511,540,629
]

///////////직접수정 끝/////////////

var chart0 = new Highcharts.Chart('container', {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: ' '
    },
    xAxis: [{
      categories: dayXaxis,
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      max: 39000,
      title: {
        text: '전체 확진자 수',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }],
    tooltip: {
      shared: true
    },
    legend: {
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: true
      }
    },
    series: [{
      name: '전체 확진자 수',
      type: 'spline',
      data: AllDayData,
    }]
  });


// (6) 일일확진자 증가 차트
var chart = new Highcharts.Chart('diffDiv', {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25
      }
    },
    title: {
      text: ''
    },

    yAxis: [{ // Primary yAxis
      max: 700,
      title: {
        text: '',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }],

    xAxis: [{
      categories: plusXaxis,
      crosshair: true
    }],
    plotOptions: {
      column: {
        depth: 25
      }
    },
    series: [{
      name: '확진자 증가수',
      data: plusData,
    },]
  });
