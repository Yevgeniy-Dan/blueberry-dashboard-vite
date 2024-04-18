// import { ApexOptions } from "apexcharts";
// import Chart from "react-apexcharts";

const InvoicesStatistic = () => {
  // const options: ApexOptions = {
  //   series: [
  //     {
  //       name: "Canceled",
  //       data: [60, 60, 80, 30, 52, 58],
  //     },
  //     {
  //       name: "Appointments",
  //       data: [80, 70, 55, 95, 70, 15],
  //     },
  //   ],
  //   chart: {
  //     type: "bar",
  //     height: 350,
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  //   plotOptions: {
  //     bar: {
  //       horizontal: false,
  //       columnWidth: "50%",
  //       borderRadius: 7,
  //     },
  //   },

  //   dataLabels: {
  //     enabled: false,
  //     offsetX: -6,
  //     style: {
  //       fontSize: "12px",
  //       colors: ["#fff"],
  //     },
  //   },
  //   colors: ["#5ECFFF", "#38E25D"],
  //   legend: {
  //     show: false,
  //     position: "top",
  //     fontSize: "14px",
  //     fontFamily: "'Open Sans' Sans-serif",
  //     fontWeight: 400,
  //     offsetY: 5,
  //     labels: {
  //       colors: "#A5A5A5",
  //       useSeriesColors: false,
  //     },
  //     markers: {
  //       width: 13,
  //       height: 13,
  //       offsetX: -10,
  //       offsetY: 0,
  //     },
  //     itemMargin: {
  //       horizontal: 25,
  //       vertical: 0,
  //     },
  //     onItemClick: {
  //       toggleDataSeries: true,
  //     },
  //     onItemHover: {
  //       highlightDataSeries: true,
  //     },
  //   },
  //   stroke: {
  //     show: true,
  //     width: 4,
  //     colors: ["transparent"],
  //   },
  //   xaxis: {
  //     categories: ["January", "February", "March", "April", "May", "June"],
  //   },
  //   yaxis: {
  //     labels: {
  //       show: true,
  //       // rotate: -45,
  //       // rotateAlways: false,
  //       // hideOverlappingLabels: true,
  //       // showDuplicates: false,
  //       // trim: false,
  //       // minHeight: undefined,
  //       // maxHeight: 120,
  //       style: {
  //         colors: ["#A5A5A5"],
  //         fontSize: "14px",
  //         fontFamily: "'Public Sans' Sans-serif",
  //         fontWeight: 600,
  //         cssClass: "apexcharts-yaxis-label",
  //       },
  //     },
  //   },
  //   fill: {
  //     opacity: 1,
  //   },
  //   tooltip: {
  //     y: {
  //       formatter: function (val: number) {
  //         return val + " Invoices";
  //       },
  //     },
  //   },
  //   responsive: [
  //     {
  //       breakpoint: 991,
  //       options: {
  //         plotOptions: {
  //           bar: {
  //             horizontal: true,
  //             columnWidth: "100%",
  //             borderRadius: 5,
  //           },
  //         },
  //         legend: {
  //           position: "bottom",
  //           horizontalAlign: "center",
  //         },
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="card border-0 shadow-sm">
      <div className="card-header bg-transparent border-0 p-5 pb-0 d-flex align-items-center justify-content-between gap-3 flex-wrap">
        <h4 className="mb-0">Appointment Analytics</h4>
      </div>

      <div className="card-body pt-2">
        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
          <div>
            <div className="d-flex align-items-baseline gap-3 gap-xxl-7 mb-3">
              <p className="mb-0">
                <span className="indicator bg-success"></span> Appointments
              </p>
              <h4 className="fs-20 mb-0">1,567</h4>
            </div>
            <div className="d-flex align-items-baseline gap-3 gap-xxl-7">
              <p className="mb-0">
                <span className="indicator bg-info"></span> Canceled
              </p>
              <h4 className="fs-20 mb-0">569</h4>
            </div>
          </div>
        </div>
        {/* <Chart
          options={options}
          series={options.series}
          type="bar"
          height={350}
        /> */}
      </div>
    </div>
  );
};

export default InvoicesStatistic;
