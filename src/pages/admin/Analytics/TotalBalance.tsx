// import { ApexOptions } from "apexcharts";
// import Chart from "react-apexcharts";

const TotalBalance = () => {
  // const options: ApexOptions = {
  //   series: [100],
  //   chart: {
  //     height: 180,
  //     width: 180,
  //     type: "radialBar",
  //   },
  //   colors: ["#ffffff"],
  //   plotOptions: {
  //     radialBar: {
  //       hollow: {
  //         size: "65%",
  //         margin: 15,
  //         background: "#ffffff",
  //       },
  //       track: {
  //         background: "#ffffff",
  //       },
  //       dataLabels: {
  //         name: {
  //           show: true,
  //           fontFamily: "'Cairo' Sans-serif",
  //           fontSize: "9px",
  //           fontWeight: 700,
  //           color: "#333333",
  //         },
  //         value: {
  //           offsetY: 10,
  //           fontFamily: "'Cairo' Sans-serif",
  //           fontSize: "18px",
  //           fontWeight: 700,
  //           color: "#333333",
  //           formatter: function (val: number) {
  //             // Remove the "%" symbol from the value
  //             return val.toString().replace(/%/g, "");
  //           },
  //         },
  //       },
  //     },
  //   },
  //   labels: ["Appointments"],
  //   responsive: [
  //     {
  //       breakpoint: 1399,
  //       options: {
  //         plotOptions: {
  //           radialBar: {
  //             hollow: {
  //               size: "70%",
  //               margin: 10,
  //               background: "#ffffff",
  //             },
  //             track: {
  //               background: "#ffffff",
  //             },
  //             dataLabels: {
  //               name: {
  //                 show: true,
  //                 fontFamily: "'Cairo' Sans-serif",
  //                 fontSize: "9px",
  //                 fontWeight: 700,
  //                 color: "#333333",
  //               },
  //               value: {
  //                 offsetY: 10,
  //                 fontFamily: "'Cairo' Sans-serif",
  //                 fontSize: "18px",
  //                 fontWeight: 600,
  //               },
  //             },
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
    <div className="card border-0 shadow-sm py-2 bg-primary">
      <div className="card-body py-0">
        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
          <div className="d-flex align-items-center gap-0 flex-wrap p-5 justify-content-center">
            {/* <Chart
              options={options}
              series={options.series}
              type="radialBar"
              height={180}
              width={180}
            /> */}
            {/* <div> */}
            <h2 className="fs-38 mb-0  text-white lh-base">
              Total Revenue: $21,560.57
            </h2>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBalance;
