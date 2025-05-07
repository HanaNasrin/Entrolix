// import React from 'react';
// import axios from 'axios';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const StudentEligibilityTable = () => {
//   const students = [
//     {
//       name: 'Asha Thomas',
//       income: '₹1,80,000',
//       course: 'B.Tech (Computer Science)',
//       category: 'Merit',
//       egrantz: '✅ Yes',
//       pms: '✅ Yes',
//       mcm: '✅ Yes',
//       css: '✅ Yes',
//     },
//     {
//       name: 'Farhan M',
//       income: '₹1,50,000',
//       course: 'B.Tech (Electrical)',
//       category: 'Merit',
//       egrantz: '✅ Yes',
//       pms: '✅ Yes',
//       mcm: '✅ Yes',
//       css: '✅ Yes',
//     },
//     {
//       name: 'Neha Rahim',
//       income: '₹1,95,000',
//       course: 'B.Tech (Civil Engineering)',
//       category: 'Merit',
//       egrantz: '✅ Yes',
//       pms: '✅ Yes',
//       mcm: '✅ Yes',
//       css: '✅ Yes',
//     },
//     {
//       name: 'Arun S',
//       income: '₹1,20,000',
//       course: 'B.Tech (Mechanical)',
//       category: 'Merit',
//       egrantz: '✅ Yes',
//       pms: '✅ Yes',
//       mcm: '✅ Yes',
//       css: '✅ Yes',
//     },
//     {
//       name: 'Diya Joseph',
//       income: '₹1,00,000',
//       course: 'B.Tech (Electronics)',
//       category: 'Merit',
//       egrantz: '✅ Yes',
//       pms: '✅ Yes',
//       mcm: '✅ Yes',
//       css: '✅ Yes',
//     },
//   ];
//   const [studentss, setStudentss] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8000/api/student-eligibility/")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//         // Convert income to ₹ format
//         const formattedData = data.map((student) => ({
//           ...student,
//           income: `₹${student.income.toLocaleString("en-IN")}`,
//         }));
//         setStudentss(formattedData);
        
//       })
//       .catch((error) => {
//         console.error("Error fetching student eligibility data:", error);
//       });
//   }, []);
  
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Student Eligibility Table</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border border-gray-300 rounded-md shadow-sm">
//           <thead className="bg-blue-100 text-left">
//             <tr>
//               <th className="p-3 border">Student Name</th>
//               <th className="p-3 border">Annual Income</th>
//               <th className="p-3 border">Course Name</th>
//               <th className="p-3 border">Category</th>
//               <th className="p-3 border">E-Grantz</th>
//               <th className="p-3 border">PMS</th>
//               <th className="p-3 border">MCM</th>
//               <th className="p-3 border">CSS</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white">
//             {students.map((student, index) => (
//               <tr key={index} className="hover:bg-gray-100">
//                 <td className="p-3 border">{student.name}</td>
//                 <td className="p-3 border">{student.income}</td>
//                 <td className="p-3 border">{student.course}</td>
//                 <td className="p-3 border">{student.category}</td>
//                 <td className="p-3 border">{student.egrantz}</td>
//                 <td className="p-3 border">{student.pms}</td>
//                 <td className="p-3 border">{student.mcm}</td>
//                 <td className="p-3 border">{student.css}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StudentEligibilityTable;
import React, { useEffect, useState } from 'react';

const StudentEligibilityTable = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/student-eligibility/")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);

        const formattedData = data.map((student) => {
          const incomeValue = parseInt(student.income); // assuming backend gives number or numeric string

          return {
            ...student,
            incomeFormatted: `₹${incomeValue.toLocaleString("en-IN")}`,
            egrantz: incomeValue <= 100000 ? "✅ Yes" : "❌ No",
            pms: incomeValue <= 200000 ? "✅ Yes" : "❌ No",
            mcm: incomeValue <= 250000 ? "✅ Yes" : "❌ No",
            css: incomeValue <= 800000 ? "✅ Yes" : "❌ No",
          };
        });

        setStudents(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching student eligibility data:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Scholarship Eligible Students</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-md shadow-sm">
          <thead className="bg-blue-100 text-left">
            <tr>
              <th className="p-3 border">Student Name</th>
              <th className="p-3 border">Annual Income</th>
              <th className="p-3 border">Course Name</th>
              <th className="p-3 border">E-Grantz</th>
              <th className="p-3 border">PMS</th>
              <th className="p-3 border">MCM</th>
              <th className="p-3 border">CSS</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {students.map((student, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-3 border">{student.name}</td>
                <td className="p-3 border">{student.incomeFormatted}</td>
                <td className="p-3 border">{student.course}</td>
                <td className="p-3 border">{student.egrantz}</td>
                <td className="p-3 border">{student.pms}</td>
                <td className="p-3 border">{student.mcm}</td>
                <td className="p-3 border">{student.css}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentEligibilityTable;
