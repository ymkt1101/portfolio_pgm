'use strict';

const FormData = document.querySelector('#select_val');
const ResultId = document.querySelector('#result_msg');

FormData.addEventListener("submit", function (e) {
    e.preventDefault();

    const DayList = ['日', '月', '火', '水', '木', '金', '土',];

    let Msg = "";
    let Result = "";

    let yy = +(FormData.sel_year.value);
    let mm = +(FormData.sel_month.value);
    let dd = +(FormData.sel_day.value);

    if (yy == "" || mm == "" || dd == "") {
        if (yy == "") { 
            Msg += "年";
        }
        if (mm == "") { 
            Msg += "月";
        }
        if (dd == "") { 
            Msg += "日";
        }
        
        ResultId.classList.add("font_red");
        ResultId.classList.remove("font_blk");
        Result = "結果：" + Msg + "が選択されていません";
    } else {
        let ChkData = new Date(yy, mm-1, dd);
        let DayNum = ChkData.getDay();
        let ChkMonth = ChkData.getMonth() + 1;
        
        if (ChkMonth !== mm) {
            ResultId.classList.add("font_red");
            ResultId.classList.remove("font_blk");
            Result = `結果：${yy}年${String(mm).padStart(2,'0')}月${String(dd).padStart(2,'0')}日は有効な日付ではありません`;
        } else {
            ResultId.classList.add("font_blk");
            ResultId.classList.remove("font_red");
            
            Result = `結果：${yy}年${String(mm).padStart(2,'0')}月${String(dd).padStart(2,'0')}日は${DayList[DayNum]}曜日です`;
        }
    }
    ResultId.textContent = Result; 
});



