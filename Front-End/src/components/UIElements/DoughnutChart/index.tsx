import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from 'chart.js'
Chart.register(ArcElement, Tooltip);

interface Props {
    value: number
}

const DoughnutChartComponent: React.FC<Props> = ({ value }) => {
    return (
        <Doughnut
            data={{
                datasets: [

                    {

                        backgroundColor: [
                            "#e60049",
                            "#50e991",
                            "#b3d4ff",
                        ],
                        borderWidth: [.5, .5],
                        borderColor: [
                            '#00000055'
                        ],
                        hoverBackgroundColor: [
                            "#b30000",
                            "#5ad45a",
                            "#0d88e6"
                        ],
                        data: [40, 40, 40],
                    },
                ],
            }}
            options={{
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                aspectRatio: 1,
                responsive: true,
                maintainAspectRatio: false,
            }}
        />
    );
};

export default DoughnutChartComponent;