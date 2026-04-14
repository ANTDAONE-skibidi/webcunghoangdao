const $ = document.querySelector.bind(document);
const calcBtn = $('#calc-btn');
const heartFill = $('#heartFill');
const percentText = $('#percentText');
const Sosanhbandosao = {
    Aries: { Aries: 91, Taurus: 62, Gemini: 87, Cancer: 53, Leo: 96, Virgo: 57, Libra: 81, Scorpio: 73, Sagittarius: 93, Capricorn: 68, Aquarius: 89, Pisces: 59 },

    Taurus: { Aries: 61, Taurus: 86, Gemini: 58, Cancer: 91, Leo: 67, Virgo: 94, Libra: 78, Scorpio: 89, Sagittarius: 52, Capricorn: 97, Aquarius: 48, Pisces: 94 },

    Gemini: { Aries: 87, Taurus: 56, Gemini: 83, Cancer: 61, Leo: 89, Virgo: 67, Libra: 93, Scorpio: 59, Sagittarius: 92, Capricorn: 54, Aquarius: 96, Pisces: 72 },

    Cancer: { Aries: 51, Taurus: 93, Gemini: 62, Cancer: 36, Leo: 71, Virgo: 89, Libra: 66, Scorpio: 94, Sagittarius: 53, Capricorn: 91, Aquarius: 49, Pisces: 97 },

    Leo: { Aries: 96, Taurus: 67, Gemini: 89, Cancer: 4, Leo: 84, Virgo: 61, Libra: 92, Scorpio: 74, Sagittarius: 95, Capricorn: 57, Aquarius: 93, Pisces: 64 },

    Virgo: { Aries: 56, Taurus: 93, Gemini: 64, Cancer: 89, Leo: 61, Virgo: 82, Libra: 73, Scorpio: 91, Sagittarius: 59, Capricorn: 95, Aquarius: 62, Pisces: 86 },

    Libra: { Aries: 42, Taurus: 76, Gemini: 94, Cancer: 67, Leo: 91, Virgo: 72, Libra: 86, Scorpio: 79, Sagittarius: 87, Capricorn: 64, Aquarius: 92, Pisces: 77 },

    Scorpio: { Aries: 71, Taurus: 89, Gemini: 57, Cancer: 96, Leo: 74, Virgo: 99, Libra: 77, Scorpio: 86, Sagittarius: 68, Capricorn: 93, Aquarius: 61, Pisces: 98 },

    Sagittarius: { Aries: 93, Taurus: 51, Gemini: 92, Cancer: 54, Leo: 95, Virgo: 57, Libra: 89, Scorpio: 66, Sagittarius: 87, Capricorn: 62, Aquarius: 94, Pisces: 71 },

    Capricorn: { Aries: 66, Taurus: 97, Gemini: 54, Cancer: 91, Leo: 56, Virgo: 93, Libra: 68, Scorpio: 94, Sagittarius: 61, Capricorn: 89, Aquarius: 72, Pisces: 87 },

    Aquarius: { Aries: 89, Taurus: 47, Gemini: 46, Cancer: 52, Leo: 93, Virgo: 61, Libra: 94, Scorpio: 59, Sagittarius: 95, Capricorn: 71, Aquarius: 86, Pisces: 74 },

    Pisces: { Aries: 59, Taurus: 94, Gemini: 72, Cancer: 97, Leo: 66, Virgo: 87, Libra: 78, Scorpio: 99, Sagittarius: 68, Capricorn: 86, Aquarius: 76, Pisces: 91 }
};
const myBirthdayInput = $('#myBirthday');
const gfBirthdayInput = $('#gfBirthday');
function getZodiacSign(dateString) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
}
calcBtn.onclick = function() {
    const date1 = myBirthdayInput.value;
    const date2 = gfBirthdayInput.value;
    if (!date1 || !date2) {
        alert("Vui lòng nhập đầy đủ ngày sinh!");
        return;
    }
    const sign1 = getZodiacSign(date1);
    const sign2 = getZodiacSign(date2);
    // Lấy điểm tương thích từ object bạn đã tạo
    const score = Sosanhbandosao[sign1][sign2];
    // Cập nhật phần trăm text
    percentText.innerText = score + "%";
    heartFill.style.height = score + "%"; 
};