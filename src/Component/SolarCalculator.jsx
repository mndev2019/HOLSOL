





// import { useState } from "react";

// const SolarCalculator = () => {
//   const [pincode, setPincode] = useState("");
//   const [bill, setBill] = useState(2400);

  
//   const unitRate = 9;          // ₹ per unit (as per client)
//   const unitsPerKW = 120;      // monthly units per 1 kW
//   const roofPerKW = 80;        // sq.ft per 1 kW
//   const savingPercent = 1;     // 100% saving (table based)

//   const monthlyUnits = bill / unitRate;

//   // System size in KW (rounded up like 3KW, 4KW, 5KW...)
//   const systemSize = Math.ceil(monthlyUnits / unitsPerKW);

//   // Roof area calculation
//   const roofArea = systemSize * roofPerKW;

//   // Savings
//   const monthlySavings = Math.round(bill * savingPercent);
//   const yearlySavings = monthlySavings * 12;


//   return (
//     <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">

//       {/* LEFT SECTION */}
//       <div>
//         <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
//           ⚡ Calculate Your Solar Savings Now!
//         </h1>
//         <p className="text-gray-600 mb-6">
//           Unlock savings, build that dream fund, and start ticking off your checklist.
//         </p>

//         <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">

//           {/* PINCODE */}
//           <label className="block text-sm font-medium mb-2">
//             Pin code
//           </label>
//           <input
//             type="text"
//             placeholder="Enter 6-digit pincode"
//             maxLength={6}
//             value={pincode}
//             onChange={(e) =>
//               setPincode(e.target.value.replace(/\D/g, ""))
//             }
//             className="w-full border border-[#EDEEF4] rounded-lg p-3 mb-1"
//           />
//           <p className="text-xs text-gray-500 mb-6">
//             We support all Indian pincodes
//           </p>

//           {/* ELECTRICITY BILL */}
//           <label className="block text-sm font-medium mb-2">
//             Avg electricity bill
//           </label>

//           <div className="flex justify-between text-xs text-gray-500 mb-1">
//             <span>Min ₹500</span>
//             <span>Max ₹10,000</span>
//           </div>

//           <input
//             type="range"
//             min="500"
//             max="10000"
//             step="100"
//             value={bill}
//             onChange={(e) => setBill(Number(e.target.value))}
//             className="w-full accent-blue-600"
//           />

//           <div className="mt-4 text-center">
//             <span className="inline-block bg-blue-900 text-white px-4 py-2 rounded-lg">
//               ₹{bill}
//             </span>
//           </div>
//         </div>

//         <p className="text-center mt-6 text-gray-700">
//           Take control of your electricity bill with{" "}
//           <span className="font-semibold">Solar Energy</span>
//         </p>
//       </div>

//       {/* RIGHT SECTION */}
//       <div className="border border-[#EDEEF4] rounded-2xl p-6 shadow-sm">

//         {/* SYSTEM SIZE */}
//         <h2 className="text-xl font-semibold mb-4">
//           Required System Size
//         </h2>

//         <div className="flex justify-between bg-blue-50 p-5 rounded-xl mb-6">
//           <div>
//             <p className="text-sm text-gray-600">System Size</p>
//             <p className="text-2xl font-bold">{systemSize} kW</p>
//           </div>
//           <div>
//             <p className="text-sm text-gray-600">Roof Area</p>
//             <p className="text-2xl font-bold">{roofArea} sq.ft.</p>
//           </div>
//         </div>

//         {/* SAVINGS */}
//         <h2 className="text-xl font-semibold mb-4">
//           Your Solar Savings
//         </h2>

//         <div className="border border-[#EDEEF4] rounded-xl p-5 text-center">
//           <div className="flex justify-around mb-4">
//             <div>
//               <p className="text-sm text-gray-500">Monthly</p>
//               <p className="text-2xl font-bold text-green-600">
//                 ₹{monthlySavings}
//               </p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Yearly</p>
//               <p className="text-2xl font-bold text-green-600">
//                 ₹{yearlySavings}
//               </p>
//             </div>
//           </div>

//           <div className="bg-yellow-50 p-4 rounded-lg text-sm">
//             Estimates may vary based on location & roof conditions
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SolarCalculator;



import { useState } from "react";

const SolarCalculator = () => {
  const [pincode, setPincode] = useState("");
  const [bill, setBill] = useState(2400);

  // ===== CLIENT EXACT CONSTANTS =====
  const UNIT_RATE = 9;        // ₹ per unit
  const UNITS_PER_KW = 120;   // units per KW per month
  const ROOF_PER_KW = 80;     // sq.ft per KW

  // ===== CLIENT EXACT LOGIC =====
  // Step 1: Convert bill to units
  const monthlyUnits = bill / UNIT_RATE;

  // Step 2: Decide KW (ROUND UP like client table)
  const systemSize = Math.ceil(monthlyUnits / UNITS_PER_KW);

  // Step 3: FINAL BILL FROM KW (IMPORTANT)
  const finalBill = systemSize * UNITS_PER_KW * UNIT_RATE;

  // Step 4: Roof & Savings
  const roofArea = systemSize * ROOF_PER_KW;
  const monthlySavings = finalBill;
  const yearlySavings = finalBill * 12;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">

      {/* LEFT SECTION */}
      <div>
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
          ⚡ Calculate Your Solar Savings Now!
        </h1>
        <p className="text-gray-600 mb-6">
          Unlock savings, build that dream fund, and start ticking off your checklist.
        </p>

        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">

          {/* PINCODE */}
          <label className="block text-sm font-medium mb-2">
            Pin code
          </label>
          <input
            type="text"
            placeholder="Enter 6-digit pincode"
            maxLength={6}
            value={pincode}
            onChange={(e) =>
              setPincode(e.target.value.replace(/\D/g, ""))
            }
            className="w-full border border-[#EDEEF4] rounded-lg p-3 mb-1"
          />
          <p className="text-xs text-gray-500 mb-6">
            We support all Indian pincodes
          </p>

          {/* ELECTRICITY BILL */}
          <label className="block text-sm font-medium mb-2">
            Avg electricity bill
          </label>

          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Min ₹500</span>
            <span>Max ₹10,000</span>
          </div>

          <input
            type="range"
            min="500"
            max="10000"
            step="100"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="w-full accent-blue-600"
          />

          <div className="mt-4 text-center">
            <span className="inline-block bg-blue-900 text-white px-4 py-2 rounded-lg">
              ₹{finalBill}
            </span>
          </div>
        </div>

        <p className="text-center mt-6 text-gray-700">
          Take control of your electricity bill with{" "}
          <span className="font-semibold">Solar Energy</span>
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="border border-[#EDEEF4] rounded-2xl p-6 shadow-sm">

        {/* SYSTEM SIZE */}
        <h2 className="text-xl font-semibold mb-4">
          Required System Size
        </h2>

        <div className="flex justify-between bg-blue-50 p-5 rounded-xl mb-6">
          <div>
            <p className="text-sm text-gray-600">System Size</p>
            <p className="text-2xl font-bold">{systemSize} kW</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Roof Area</p>
            <p className="text-2xl font-bold">{roofArea} sq.ft.</p>
          </div>
        </div>

        {/* SAVINGS */}
        <h2 className="text-xl font-semibold mb-4">
          Your Solar Savings
        </h2>

        <div className="border border-[#EDEEF4] rounded-xl p-5 text-center">
          <div className="flex justify-around mb-4">
            <div>
              <p className="text-sm text-gray-500">Monthly</p>
              <p className="text-2xl font-bold text-green-600">
                ₹{monthlySavings}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Yearly</p>
              <p className="text-2xl font-bold text-green-600">
                ₹{yearlySavings}
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg text-sm">
            Estimates may vary based on location & roof conditions
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;

