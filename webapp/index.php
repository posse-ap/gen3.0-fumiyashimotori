<?php
/* ドライバ呼び出しを使用して MySQL データベースに接続する */
$dsn = 'mysql:dbname=posse;host=db';
$user = 'root';
$password = 'root';

// データベース接続
$dbh = new PDO($dsn, $user, $password);

$pdo = new PDO('mysql:host=db;dbname=posse', 'root', 'root');

      // テーブルが4つあるからsql文も4つ
      $sql = "ALTER TABLE date RENAME TO dates;"
      $sql = "SELECT FROM dates";
      // prepareとbindvalue（”「：なんとか」、入れたい値”）とexecuteのセット①
      $stmt = $pdo->prepare($sql);
      $stmt->bindValue(":id", $_POST["id"]);
      $stmt->execute();


      $sql = "SELECT * FROM contents";
       // prepareとbindvalue（”「：なんとか」、入れたい値”）とexecuteのセット②
      $stmt = $pdo->prepare($sql);
      $stmt->bindValue(":id", $_POST["id"]);
      $stmt->execute();


      $sql = "SELECT * FROM laungages";
       // prepareとbindvalue（”「：なんとか」、入れたい値”）とexecuteのセット3
      $stmt = $pdo->prepare($sql);
      $stmt->bindValue(":id", $_POST["id"]);
      $stmt->execute();



      $sql = "SELECT * FROM howlong";
       // prepareとbindvalue（”「：なんとか」、入れたい値”）とexecuteのセット4
      $stmt = $pdo->prepare($sql);
      $stmt->bindValue(":id", $_POST["id"]);
      $stmt->execute()


      // ダミーデータ
      $sql = "INSERT INTO dates () VALUES ()";
?>


<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>ph1 week13 1問目</title>
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="style.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
  <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>

</head>

<body>
  <header>
    <div class="header-set">
      <div class="header-logo">
        <img src="./img/logo.svg" alt="">
      </div>
      <div class="header-week">
        <div>4th</div>
        <div>week</div>
      </div>
    </div>

    <div class="modal-container">
      <button class="header-btn">
        記録・投稿
      </button>
      <!-- モーダル　メイン -->
      <div class="modal">
        <button class="modal-btn">
          <p> x </p>
        </button>
        <div class="modal-boxes">
          <div class="modal-box-left">
            <!-- 学習日 -->
            <div class="modal-box-typeA">
              <h2>学習日</h2>
              <div class="modal-date">
                <input type="text" class="calendar" id="sample">
              </div>
              <div class="date">
                <button class="a-btn">
                  <p> x </p>
                </button>
              </div>
            </div>
            <!--  -->
            <!-- 学習コンテンツ（複数選択可） -->
            <div class="modal-box-typeB">
              <h2>学習コンテンツ（複数選択可）</h2>
              <div>
                <div>
                  <input type="checkbox" class="input-checkbox" name="contents" value="1" id="N">
                  <label for="N" class="label">
                    <span class="span">✔</span>N予備校
                  </label>

                  <input type="checkbox" class="input-checkbox" name="contents" value="2" id="dot">
                  <label for="dot" class="label">
                    <span class="span">✔</span>ドットインストール
                  </label>
                </div>
                <input type="checkbox" class="input-checkbox" name="contents" value="3" id="kadai">
                <label for="kadai" class="label">
                  <span class="span">✔</span>POSSE課題
                </label>
              </div>
            </div>
            <!--  -->
            <!-- 学習言語 -->
            <div class="modal-box-typeC">
              <h2>学習言語(複数選択可)</h2>
              <div>
                <!-- 一層目 -->
                <div class="lng-first">

                  <input type="checkbox" class="input-checkbox" name="contents" value="1" id="HTML">
                  <label for="HTML" class="label">
                    <span class="span">✔</span>HTML
                  </label>

                  <input type="checkbox" class="input-checkbox" name="contents" value="2" id="CSS">
                  <label for="CSS" class="label">
                    <span class="span">✔</span>CSS
                  </label>

                  <input type="checkbox" class="input-checkbox" name="contents" value="3" id="JavaScript">
                  <label for="JavaScript" class="label">
                    <span class="span">✔</span>JavaScript
                  </label>


                </div>

                <!-- 二層目 -->
                <div class="lng-second">

                  <input type="checkbox" class="input-checkbox" name="contents" value="4" id="PHP">
                  <label for="PHP" class="label">
                    <span class="span">✔</span>PHP
                  </label>

                  <input type="checkbox" class="input-checkbox" name="contents" value="5" id="Laravel">
                  <label for="Laravel" class="label">
                    <span class="span">✔</span>Laravel
                  </label>

                  <input type="checkbox" class="input-checkbox" name="contents" value="3" id="SQL">
                  <label for="SQL" class="label">
                    <span class="span">✔</span>SQL
                  </label>

                  <input type="checkbox" class="input-checkbox" name="contents" value="4" id="SHELL">
                  <label for="SHELL" class="label">
                    <span class="span">✔</span>SHELL
                  </label>

                </div>

                <!-- 三層目 -->
                <div class="lng-third">

                  <input type="checkbox" class="input-checkbox" name="contents" value="5" id="info">
                  <label for="info" class="label">
                    <span class="span">✔</span>情報システム基礎知識(その他)
                  </label>




                </div>

              </div>
            </div>
            <!--  -->
          </div>
          <div class="modal-box-right">
            <div class="modal-box-typeA">
              <h2>学習時間</h2>
              <div></div>
            </div>
            <div class="modal-box-typeC">
              <h2>twitter用コメント</h2>
              <div>
                <textarea name="" id="textarea" cols="30" rows="10"></textarea>
              </div>
            </div>
            <div>
              <input type="checkbox" class="input-checkbox" name="twitter" value="1" id="twitter">
              <label for="twitter" class="twitter">
                <span class="span">✔</span>
              </label>
              twitterにシェアする
            </div>
          </div>

        </div>
        <div class="btn-wrapper"><button class="submit-btn">記録・投稿</button></div>

      </div>
      <!--モーダル グルグル -->
      <div class="loading-wrapper">
        <span class="circle">

        </span>
      </div>
      <!-- モーダル　投稿完了 -->
      <div class="done">
        <button class="modal-btn">
          <p> x </p>
        </button>
        <p>投稿が完了しました</p>
      </div>
    </div>
    </div>

  </header>


  <main>
    <div class="container">
      <div class="box-wrapper1">
        <ul class="box1">
          <li class="box-item">
            <div class="article">Today</div>
            <div class="today-number">3</div>
            <div class="hour">hour</div>
          </li>
          <li class="box-item">
            <div class="article">Month</div>
            <div class="month-number">120</div>
            <div class="hour">hour</div>
          </li>
          <li class="box-item">
            <div class="article">Total</div>
            <div class="total-number">1348</div>
            <div class="hour">hour</div>
          </li>
        </ul>
        <div class="box2">
          <canvas id="myChart-time"></canvas>
        </div>
      </div>
      <div class="box-wrapper2">
        <div class="box3">
          <div>学習言語</div>
          <div><canvas id="myChart-lng"></canvas></div>
        </div>
        <div class="box3">
          <div>学習コンテンツ</div>
          <div><canvas id="myChart-contents"></canvas></div>
        </div>
      </div>

    </div>
    <div class="main-bottom-box">
      <button>＜</button>
      <div class="bottom-box-date">
        <div>2020</div>
        <div>年</div>
        <div>10</div>
        <div>月</div>
      </div>
      <button>＞</button>
    </div>
  </main>

 
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script src="script.js"></script>

</body>

</html>