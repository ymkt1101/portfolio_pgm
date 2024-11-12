<?php

function select_out($i, $def_i)
{
    if ($i === intval($def_i)):
        echo ('<option value="' . $i . '" selected>' . sprintf('%02d', $i) . '</option>');
    else:
        echo ('<option value="' . $i . '">' . sprintf('%02d', $i) . '</option>');
    endif;
}

// 日付分割→変換
function date_div($div_d)
{
    $ymd = explode('/', $div_d);
    list($y, $m, $d) = $ymd;
    return sprintf('%04d', $y) . sprintf('%02d', $m) . sprintf('%02d', $d);
};

// 日付結合
function date_comb($comb_d)
{
    // 引数が年月のみの場合は、日を1日として返す
    if (mb_strlen($comb_d) === 6) :
        $ymd = mb_substr($comb_d, 0, 4) . "-" . mb_substr($comb_d, 4, 2) . "-01";
    // 引数が年月日の場合は、そのまま加工して返す
    elseif (mb_strlen($comb_d) === 8) :
        $ymd = mb_substr($comb_d, 0, 4) . "-" . mb_substr($comb_d, 4, 2) . "-" . mb_substr($comb_d, 6, 2);
    endif;
    return $ymd;
};
