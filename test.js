document.addEventListener('DOMContentLoaded', () => {
    const performanceChartCtx = document.getElementById('performanceChart').getContext('2d');
    const question1ChartCtx = document.getElementById('question1Chart').getContext('2d');
    const question2ChartCtx = document.getElementById('question2Chart').getContext('2d');
    const question3ChartCtx = document.getElementById('question3Chart').getContext('2d');
    const studentTrendsChartCtx = document.getElementById('studentTrendsChart').getContext('2d');
    
    // Overall Assessment Performance Chart
    new Chart(performanceChartCtx, {
        type: 'bar',
        data: {
            labels: ['Assessment 1', 'Assessment 2', 'Assessment 3'],
            datasets: [{
                label: 'Scores',
                data: [75, 82, 78],
                backgroundColor: '#007bff',
                borderColor: '#0056b3',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Question-Level Analysis Charts
    new Chart(question1ChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [60, 40],
                backgroundColor: ['#28a745', '#dc3545'],
                borderColor: ['#1e7e34', '#c82333'],
                borderWidth: 1
            }]
        }
    });

    new Chart(question2ChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [80, 20],
                backgroundColor: ['#28a745', '#dc3545'],
                borderColor: ['#1e7e34', '#c82333'],
                borderWidth: 1
            }]
        }
    });

    new Chart(question3ChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
                data: [55, 45],
                backgroundColor: ['#28a745', '#dc3545'],
                borderColor: ['#1e7e34', '#c82333'],
                borderWidth: 1
            }]
        }
    });

    // Student Performance Trends Chart
    new Chart(studentTrendsChartCtx, {
        type: 'line',
        data: {
            labels: ['Month 1', 'Month 2', 'Month 3'],
            datasets: [{
                label: 'Student A',
                data: [65, 70, 75],
                fill: false,
                borderColor: '#007bff'
            },
            {
                label: 'Student B',
                data: [60, 72, 78],
                fill: false,
                borderColor: '#28a745'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Export Reports
    document.getElementById('exportBtn').addEventListener('click', () => {
        // Implement the export functionality here
        alert('Exporting analytics report...');
    });

    // Comparison Tools
    document.getElementById('compareBtn').addEventListener('click', () => {
        const selectedAssessment = document.getElementById('compareAssessments').value;
        // Implement the comparison functionality here
        document.getElementById('comparisonResults').innerHTML = `<p>Comparison results for ${selectedAssessment} will be displayed here.</p>`;
    });
});
