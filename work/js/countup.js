'use strict';
document.querySelector('#reset_btn').addEventListener('click', function (e) {
    e.preventDefault();
    location.reload();
});

document.querySelector('#input_btn').addEventListener('click', function (e) {
    e.preventDefault();
    
    let errFlg = false;
    const Today = new Date();
    const NowYear = Today.getFullYear();
    
    // // 西暦、月、日をそれぞれ入力
    let inyear = prompt("西暦を入力してください (例: 1900)");
    let inmonth = prompt("月を入力してください (例: 1)");
    let inday = prompt("日を入力してください (例: 31)");

// 入力チェック
    if ((inyear.length == null) || (inmonth.length == null) || (inday.length == null)) {
        errFlg = true;
    }
    //入力年
    if (+(inyear) > NowYear) { 
        errFlg = true;
    }
    // 入力月
    if (inmonth < 1 || inmonth > 12) { 
        errFlg = true;
    }
    // 入力日
    if (inday < 1 || inday > 31) { 
        errFlg = true;
    }

    // 入力値を日付に変換        
    const BD = new Date(inyear, inmonth, inday);

    let ChkMonth = BD.getMonth();
    if (ChkMonth !== +(inmonth)) {
        errFlg = true;
    }

    try {
        if (errFlg) {
            throw new Error('入力された日付が正しくありません');
        } else {
            // 日数計算の関へ
            const counter = countup(BD);
            //結果表示部分
            document.querySelector('#err_msg').textContent = "";
            document.querySelector('#msg_dft').classList.add('hidden');
            document.querySelector('#msg').classList.remove('hidden');
            
            document.querySelector('#birthday').textContent = BD.getFullYear() + "年" + BD.getMonth() + "月" + BD.getDate() + "日から";
            document.querySelector('#result').textContent = counter[0] + " 年 " + String(counter[1]).padStart(2, '0') + " 日目です";
            if (counter[1] == 0) {
                document.querySelector('#surprise').textContent = "お誕生日おめでとう！";
                let elm = document.querySelector('#main');
                elm.classList.add('surprise');
            } else {
                document.querySelector('#surprise').textContent = "";
                let elm = document.querySelector('#main');
                elm.classList.remove('surprise');
            }
        };
    } catch (e) {
        document.querySelector('#msg_dft').classList.remove('hidden');
        document.querySelector('#msg').classList.add('hidden');
        document.querySelector('#birthday').textContent = "";
        document.querySelector('#result').textContent = "";
        document.querySelector('#surprise').textContent = "";
        document.querySelector('#err_msg').textContent = e.message;
    }
});
    
// 日数計算用function
function countup(due) {

    // 日付を設定する時は、ここで月の減算をする
    const defDate = new Date();
    const yy = defDate.getFullYear();
    let mm = defDate.getMonth();
    // 基準日の設定
    let defaultDate = new Date(yy, mm, defDate.getDate());

    // 生年月日を表示するので、こちらで月の減算をする
    const BDmm = due.getMonth() - 1;

    // 基準日の年の誕生日を設定する
    let nearBD = new Date(yy, BDmm, due.getDate());
    let i = 0;

    //直前に経過した誕生日を調べる
    while (nearBD > defaultDate) {
        nearBD = new Date(yy - i, BDmm, due.getDate());
        i++;
    }

    //基準年から直前の誕生日までの年数を計算する
    let years = nearBD.getFullYear() - due.getFullYear();

    // 直前の誕生日からの基準日までの経過日数を計算する
    let restD = defaultDate.getTime() - nearBD.getTime();
    const days = Math.floor(restD / 1000 / 60 / 60 / 24);

    const counter = [years, days];

    counter[0] = years;
    counter[1] = days;

    return counter;
}