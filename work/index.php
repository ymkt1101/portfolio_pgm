<?php require('./common/common.php'); ?>

<?php
// 表示年の範囲指定と検索年の指定
// select boxに設定する年の範囲を設定

$bf_year = 5; //今年を基準に何年前まで ここで指定
$af_year = 5; //今年を基準に何年後まで ここで指定

//今日の日付を取得する
$df_year = date('Y');
$df_month = date('m');
$df_day = date('d');

?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Java Script 追加課題(改変Ver)</title>
    <meta name="description" content="calendar(改変Ver)">
    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>

<script src="js/calendar.js" defer></script>

<body>
    <header>
        <h1>JavaScript追加課題</h1>
    </header>

    <main>
        <section class="wrapper calendar">
            <h2>年月日から曜日を表示する</h2>
            <form action="#" id="select_val" method="post">

                <div class="form_content">
                    <label for="sel_year">年</label>
                    <select name="sel_year" id="sel_year">
                        <option value="" selected disabled>年を選択してください</option>
                        <?php
                        $st_year = $df_year - $bf_year; //今年を基準に何年前まで？
                        $en_year = $df_year + $af_year; //今年を基準に何年後まで？
                        for ($i = $st_year; $i <= $en_year; $i++) {
                            echo ('<option value="' . $i . '">' . sprintf('%02d', $i) . '</option>');
                        }
                        ?>
                    </select>
                </div>

                <div class="form_content">
                    <label for="sel_month">月</label>
                    <select name="sel_month" id="sel_month">
                        <option value="" selected disabled>月を選択してください</option>
                        <?php
                        for ($i = 1; $i < 13; $i++) {
                            echo ('<option value="' . $i . '">' . sprintf('%02d', $i) . '</option>');
                        }
                        ?>
                    </select>
                </div>

                <div class="form_content">
                    <label for="sel_day">日</label>
                    <select name="sel_day" id="sel_day">
                        <option value="" selected disabled>日を選択してください</option>
                        <?php
                        for ($i = 1; $i < 32; $i++) {
                            echo ('<option value="' . $i . '">' . sprintf('%02d', $i) . '</option>');
                        }
                        ?>
                    </select>
                </div>

                <div class="form_content">
                    <button type="submit">Check</button>
                </div>
            </form>
            <p id="result_msg"></p>
    </main>
    </section>
    <footer>
        <div class="copy-write color_or">
            <small>&copy; 2024 watabe's Room</small>
        </div>
    </footer>
</body>

</html>