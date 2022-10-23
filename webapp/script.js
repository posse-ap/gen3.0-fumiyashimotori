
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
  

// チェックボックス
