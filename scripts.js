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
    const inf = {
        labels: data.map((chart) => chart.day),
        datasets: [
            {
                data: data.map((chart) => chart.amount),
                backgroundColor: [
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(186, 34%, 60%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)'
                ],

                hoverBackgroundColor: [
                    'hsl(10, 84%, 75%)',
                    'hsl(10, 84%, 75%)',
                    'hsl(186, 58%, 73%)',
                    'hsl(10, 84%, 75%)',
                    'hsl(10, 84%, 75%)',
                    'hsl(10, 84%, 75%)',
                    'hsl(10, 84%, 75%)'
                ],

                borderRadius: 4,

            },
        ],
    };
    const titTooltip = (e) => `$${e[0].formattedValue}`;
    const labTooltip = (e) => "";
    const options = {
        scales: {
            y: {
                ticks: {
                    display: false,
                },

                display: false,

                grid: {
                    display: false,
                    drawTicks: true,
                    drawBorder: true
                },
            },
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                border: {
                    color: 'hsl(0, 0%, 100%)',
                }
            },
        },
        plugins: {
            legend: { display: false }, // Tira a legenda do topo do gráfico
            tooltip: {
                yAlign: 'none',
                backgroundColor: 'hsl(25, 47%, 15%)',
                cornerRadius: 3,
               
                callbacks: {
                    title: titTooltip,
                    label: labTooltip,
                },

            },
        },
    };

    const config = {
        type: "bar",
        data: inf,
        options,
    };
    const myChart = new Chart(document.getElementById("myChart"), config);
}
localChart();