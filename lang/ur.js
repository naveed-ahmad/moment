// moment.js language configuration
// language : Urdu (en-ca)
// author : Naveed Ahmad : https://github.com/naveed-ahmad

Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday
require('../moment').lang('ur', {
    months : "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"),
    monthsShort : "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"),
    weekdays : "اتوار__سوموار_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),
    weekdaysShort : "اتوار__سوموار_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),
    weekdaysMin : "اتوار__سوموار_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"),
    longDateFormat : {
        LT : "h:mm A",
        L : "YYYY-MM-DD",
        LL : "D MMMM, YYYY",
        LLL : "D MMMM, YYYY LT",
        LLLL : "dddd, D MMMM, YYYY LT"
    },
    calendar : {
        sameDay : '[آج] LT',
        nextDay : '[کل] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[کل] LT',
        lastWeek :  'dddd [پچھلا ہفتہ] LT',
        sameElse : 'L'
    },
    relativeTime : {
        future :  "میں %s",
        past : "%s پہلے",
        s : "چند سیکنڈ",
        m : "ایک منٹ",
        mm : "%d منٹ",
        h : "ایک گھنٹہ",
        hh : "%d گھنٹے",
        d : "ایک دن",
        dd : "%d دن",
        M : " ایک مہینہ",
        MM : "%d ماہ",
        y : "ایک سال",
        yy : "%d سال"
    }
});
