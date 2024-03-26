document.addEventListener("DOMContentLoaded", function(){
    // 대시보드에서는 body 배경색 바꾸기
    document.getElementsByTagName('body')[0].style.background = '#f7f7f7';
    

    // 운동량 차트 데이터
    const data1 = {
        datasets: [{
            label: ['이번 주'],
            data: [60],
            minData: 500,
            backgroundColor: ['rgba(37, 203, 123, 1)'],
            borderRadius: [100],
            borderWidth: 1,
        }, {
            label: ['지난 주'],
            data: [40],
            minData: 500,
            backgroundColor: ['rgba(37, 203, 123, 0.5)'],
            borderRadius: [100],
            borderWidth: 1,
        }]
    };
    // 차트 옵션
    const options1 = {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: true,
            }
        }
    };
    // 차트 생성
    const ctx1 = document.getElementById('chartExercise').getContext('2d');
    const chartExercise = new Chart(ctx1, {
        type: 'doughnut',
        data: data1,
        options: options1
    });

    // 섭취칼로리 차트 데이터
    const data2 = {
        datasets: [{
            label: ['이번 주'],
            data: [1800],
            minData: 3000,
            backgroundColor: ['rgba(37, 203, 123, 1)'],
            borderRadius: [100],
            borderWidth: 1,
        }, {
            label: ['지난 주'],
            data: [2100],
            minData: 3000,
            backgroundColor: ['rgba(37, 203, 123, 0.5)'],
            borderRadius: [100],
            borderWidth: 1,
        }]
    };
    // 차트 옵션
    const options2 = {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: true,
            }
        }
    };
    // 차트 생성
    const ctx2 = document.getElementById('chartFire').getContext('2d');
    const chartFire = new Chart(ctx2, {
        type: 'doughnut',
        data: data2,
        options: options2
    });

    // 소모 칼로리 차트 데이터
    const data3 = {
        datasets: [{
            label: ['이번 주'],
            data: [2000],
            minData: 3000,
            backgroundColor: ['rgba(37, 203, 123, 1)'],
            borderRadius: [100],
            borderWidth: 1,
        }, {
            label: ['지난 주'],
            data: [1800],
            minData: 3000,
            backgroundColor: ['rgba(37, 203, 123, 0.5)'],
            borderRadius: [100],
            borderWidth: 1,
        }]
    };
    // 차트 옵션
    const options3 = {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: false,
            },
            legend: {
                display: true,
            }
        }
    };
    // 차트 생성
    const ctx3 = document.getElementById('chartEat').getContext('2d');
    const chartEat = new Chart(ctx3, {
        type: 'doughnut',
        data: data3,
        options: options3
    });
});

// 운동목표 모달 열기
function fnOpenModal(){
    document.getElementById('modal_bg').style.display = 'block';
    document.getElementById('goalModal').style.display = 'block';
}

// 운동목표 모달 닫기
function fnCloseModal(){
    document.getElementById('modal_bg').style.display = 'none';
    document.getElementById('goalModal').style.display = 'none';
}