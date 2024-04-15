// import React from "react";

// const CardGrid: React.FC<{ title: string; data: any; page: number }> = ({
//   title,
//   data,
//   page,
// }) => {
//   return (
//     <>
//       <div className="row">
//         {data.map(() => (
//           <div className="col-xxl-3 col-lg-4">
//             <div className="card border-0 shadow-sm">
//               <div className="card-body">
//                 <div className="mb-5 text-center">
//                   <div className="card-content mt-3">
//                     <h5 className="mb-0">
//                       <a href="#" className="text-dark">
//                         {title}
//                       </a>
//                     </h5>
//                   </div>
//                 </div>

//                 <div>
//                   <div>
//                     <div className="fw-semibold text-center">
//                       <p className="bg-muted rounded-1 d-inline-block text-center text-primary lh-36 px-2 py-0 me-2">
//                         <i className="bi bi-telephone-fill"></i>
//                       </p>{" "}
//                       <p>+12 345 6789 0</p>
//                     </div>
//                   </div>
//                   <div>
//                     <div className="fw-semibold text-center">
//                       <p className="bg-muted rounded-1 d-inline-block text-center text-primary lh-36 px-2 py-0 me-2">
//                         <i className="bi bi-envelope-fill"></i>
//                       </p>{" "}
//                       <p>samantha@mail.com</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="row">
//         <div className="col-sm-6">
//           <span>
//             {" "}
//             Showing {page * 10 + 1}-{Math.min((page + 1) * 10, data?.total)}{" "}
//             from {data?.total} data
//           </span>
//         </div>
//         <nav
//           aria-label="Page navigation"
//           className="col-sm-6 d-flex justify-content-end"
//         >
//           <ul className="pagination">
//             <li className="page-item">
//               <a className="page-link" href="#" aria-label="Previous">
//                 <span aria-hidden="true">&laquo;</span>
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 1
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 2
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#">
//                 3
//               </a>
//             </li>
//             <li className="page-item">
//               <a className="page-link" href="#" aria-label="Next">
//                 <span aria-hidden="true">&raquo;</span>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default CardGrid;
