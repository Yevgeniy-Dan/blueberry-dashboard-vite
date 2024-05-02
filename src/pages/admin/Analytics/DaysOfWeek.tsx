import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

const DaysOfWeek = () => {
  const options: ApexOptions = {
    series: [
      {
        name: "Events",
        data: [10, 15, 12, 18, 20],
        color: "rgb(112, 12, 236)",
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    xaxis: {
      categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    },
    yaxis: {
      title: {
        text: "Number of Events",
      },
    },
    plotOptions: {
      bar: {
        dataLabels: {
          position: "top",
        },
      },
    },
    title: {
      text: "Days of the Week",
      align: "left",
      margin: 10,
      offsetY: 20,
      style: {
        fontSize: "14px",
      },
    },
  };

  return (
    <div>
      {" "}
      <Chart
        options={options}
        series={options.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default DaysOfWeek;
