document.addEventListener('DOMContentLoaded', function () {
    // Ngày bắt đầu mối quan hệ
    const startDate = new Date('2022/06/05'); // Thay YYYY, MM, DD bằng ngày bắt đầu của bạn

    function updateCountdown() {
        const currentDate = new Date();
        const timeDiff = currentDate - startDate;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
    }

    setInterval(updateCountdown, 1000);
});
