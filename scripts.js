const data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
];
function localChart() {
    const colours = data.map((value) => value < 50 ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)');
    const inf = {
        labels: data.map((chart) => chart.day),
        datasets: [
            {
                data: data.map((chart) => chart.amount),
                backgroundColor: colours,
                borderRadius: 4,
                hoverBackgroundColor: "hsl(10, 56%, 68%)",
            },
        ],
    };
    const options = {
        scales: {
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                    drawTicks: false,
                    drawBorder: false
                },
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
            },
        },
        Plugins: {
            legend: {
                display: false,
            },
        }
    };
    const config = {
        type: "bar",
        data: inf,
        options,
    };
    const myChart = new Chart(document.getElementById("myChart"), config);
}
localChart();