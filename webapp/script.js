
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

// 投稿ボタン押下時のぐるぐる画面と投稿完了画面
const $loading = $('.loading-wrapper');
const $submit_button = $('.submit-btn');
const $circle = $('.circle');
const $done = $('.done');

$submit_button.click((e) => {
  // モーダルの画面を閉じる
  $container.addClass('vanish');
  // 入れ替わりでローディングを表示
  $loading.addClass('openLoading');
  // 3秒で閉じる
    setTimeout(() => {
      $done.addClass('openDone');
    },3000);
    
  
    // window.location.reload();
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

$calendar.click((e) => {
  $date.addClass('openDate');
})



// 棒グラフ
var ctx = document.getElementById('myChart-time').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1','2', '3', '4', '5','6', '7','8', '10','11','12', '13', '14', '15', '16', '17', '18',  '19','20','21',  '22', '23', '24', '25', '26', '27','28', '29', '30', ],
            datasets: [{
                label: 'マイグラフ',
                data: [2.5, 8, 5, 2, 2.0, 3.0, 4.5, 1.0, 5, 2, 2.0, 3.0,2.5, 1.0, 5, 2, 2.0, 3.0, 4.5, 1.0, 5, 2, 2.0, 3.0,5, 2, 2.0, 3.0,],
                backgroundColor: 'rgb(30, 144, 255)',
                borderColor: 'rgb(255, 99, 132)'
            }]
        },
        options:{
          scales: {
              xAxes: [{
                  display: true,                 

              }],
              yAxes: [{  
                  display: true,             
                  ticks: {
                      callback: function(value) {
                          return value + 'h';
                      }
                  }
              }],
          },
         
      }
      });