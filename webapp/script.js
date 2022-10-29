
// モーダルの開閉
const $container = $('.modal');
const $button = $('.header-btn');
const $closeButton = $('.modal-btn')

$button.click((e) => {
  $container.addClass('openModal');
})
$closeButton.click((e) => {
  $container.addClass('closeModal');
  window.location.reload();
})

//  Twitterボタン
//openTwitter(投稿文、シェアするURL、ハッシュタグ、提供元アカウント)

const write_down = document.getElementById('twitter');

function openTwitter() {
  const $get_text = document.getElementById("textarea").value;
  const turl = `http://twitter.com/intent/tweet?&text=`+ $get_text
  window.open(turl,'_blank');
}

// twitterにシェアするを押したら投稿
// openTwitter("テスト","https://santmove.com","santmove","santmove_com");
// 投稿ボタン押下時のぐるぐる画面と投稿完了画面
const $loading = $('.loading-wrapper');
const $submit_button = $('.submit-btn');
const $circle = $('.circle');
const $done = $('.done');


$submit_button.click((e) => {
  if(write_down.checked){
   
    openTwitter()
  }
  // モーダルの画面を閉じる
  $container.addClass('vanish');
  // 入れ替わりでローディングを表示
  
  $loading.addClass('openLoading');
  // 3秒で閉じる
    setTimeout(() => {
      $done.addClass('openDone');
    },3000);
  });







// 日付

var sample = document.getElementById('sample');
var fp = flatpickr(sample, {
    dateFormat: 'Y-n-j(l)'
});
var fp = flatpickr(sample, {
 position: 'auto'
});

const $calendar = $('.calendar');
const $date = $('.date');

// $calendar.click((e) => {
//   $date.addClass('openDate');
// })



// 棒グラフ
var ctx = document.getElementById('myChart-time').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['','2', '', '4', '','6', '','8','', '10','','12', '', '14', '', '16', '', '18',  '','20','',  '22', '', '24', '', '26', '','28', '', '30', ],
            datasets: [{
                
                data: [2.5, 8, 5, 2, 2.0, 3.0, 4.5, 1.0, 5, 2, 2.0, 3.0,2.5, 1.0, 5, 2, 2.0, 3.0, 4.5, 1.0, 5, 2, 2.0, 3.0,5, 2, 2.0, 3.0,7,7],
                backgroundColor: 'rgb(30, 144, 255)',
                borderColor: 'rgb(255, 99, 132)'
            }],
            
          },
            options:{
              
              scales: {
               
                x:{
                  grid:{
                    drawOnChartArea:false,
                  },
                  
                },
                y:{
                  grid:{
                    drawOnChartArea:false,
                  },
                  ticks:{
                    callback: function(value) {
                      return ((value % 2) == 0)? value + 'h': ''
                    },
                  }
                },

              },
              plugins: {
                  legend:{
                    display: false,
                    
                  },       
              },

          },
      });
        
// 円グラフ左
var ctx = document.getElementById('myChart-lng').getContext('2d');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels:["HTML","CSS","JavaScript","PHP","Laravel","SQL","SHELL","情報システム基礎"],
    datasets: [{
      data: [42,18,10,8,8,7,4,3],
      backgroundColor: ['#342de6','#245b7e','#61a3cc','#9ed7fa','#dea4c2','#7e4d7d','#6935a9','#462974',],
      borderWidth: 0,
    }]
  },
  options: { 
    labels:{
     boxwith:10,
    },
    plugins: {
      datalabels: {
        color: ["#fff","#fff","#fff",'#9ed7fa','#dea4c2','#7e4d7d','#6935a9','#462974',],
        font: {
          weight: "bold",
          size: 20,
        },   
        formatter: (value, ctx) => {
            return value+'%';
            },
      },
        legend:{
          position:"bottom",
          pointStyle:"circle",
          
        },       
    },
},
plugins: [
  ChartDataLabels,
],
})


// 円グラフ右
var ctx = document.getElementById('myChart-contents').getContext('2d');

new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      label:[],
      data: [42,33,25,],
      backgroundColor: ['#342de6','#245b7e','#61a3cc',],
      borderWidth: 0
    }]
  },
  options: { 
    
    plugins: {
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 20,
        },   
        formatter: (value, ctx) => {
            return value+'%';
            },
      },
        legend:{
          position:"bottom",
          poinStyle:"circle",
        },       
    },
},
plugins: [
  ChartDataLabels,
],
})
