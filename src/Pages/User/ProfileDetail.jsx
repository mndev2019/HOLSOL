
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";
// import { Base_Url } from "../../API/Base_Url";


// const ProfileDetail = () => {
//     const [data, setdata] = useState([]);
//     const handleget = async () => {
//         try {
//             const token = localStorage.getItem("token");

//             const resp = await axios.get(
//                 `${Base_Url}api/profile/me`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             console.log(resp.data);
//             setdata(resp.data.data);

//         } catch (error) {
//             console.log(
//                 "Profile fetch error:",
//                 error.response?.data || error.message
//             );
//         }
//     };

//     useEffect(() => {
//         handleget();
//     }, [])
//     const steps = [
//         "Solar Order Received",
//         "Technician Assigned",
//         "Installation In Progress",
//         "Installation Completed",
//         "Delivered",
//     ];
//     const navigate = useNavigate();
//     const currentStatus = data?.status;
//     return (
//         <div className="min-h-screen bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff] px-4 py-10">
//             <div className="max-w-6xl mx-auto">

//                 {/* HERO HEADER */}
//                 <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-10 mb-10 overflow-hidden border border-blue-100">

//                     <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

//                     <h2 className="text-4xl font-extrabold text-gray-900">
//                         My Solar{" "}
//                         <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#00C6FF] to-[#0047FF]">
//                             Profile
//                         </span>
//                     </h2>

//                     <div className="w-20 h-1 bg-gradient-to-r from-[#00C6FF] to-[#0047FF] rounded-full mt-4"></div>

//                     <p className="text-gray-600 mt-4 max-w-xl">
//                         Below are the details you submitted for your solar installation.
//                         You can review them anytime.
//                     </p>

//                     <button
//                         onClick={() => navigate("/profile", { state: { edit: true, data } })}
//                         className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-b from-[#00C6FF] to-[#0047FF] text-white"
//                     >
//                         Edit Profile
//                     </button>
//                 </div>

//                 {/* INFO + DOCUMENTS */}
//                 <div className="grid lg:grid-cols-3 gap-8">

//                     {/* LEFT INFO */}
//                     <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8 border border-gray-100">

//                         <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
//                             <span className="w-1 h-6 bg-gradient-to-b from-[#00C6FF] to-[#0047FF] rounded-full"></span>
//                             Personal & Installation Details
//                         </h3>

//                         <div className="grid sm:grid-cols-2 gap-6">
//                             <div className="bg-gray-50 rounded-2xl p-5
//                              transition-all duration-300
//                            hover:bg-white hover:shadow-md hover:-translate-y-1">
//                                 <p className="text-xs uppercase tracking-wide text-gray-500">Full Name</p>
//                                 <p className="text-sm font-medium text-gray-900 mt-1">{data?.full_name}</p>
//                             </div>
//                             <div className="bg-gray-50 rounded-2xl p-5
//                              transition-all duration-300
//                            hover:bg-white hover:shadow-md hover:-translate-y-1">
//                                 <p className="text-xs uppercase tracking-wide text-gray-500">Email</p>
//                                 <p className="text-sm font-medium text-gray-900 mt-1">{data?.email}</p>
//                             </div>
//                             <div className="bg-gray-50 rounded-2xl p-5
//                              transition-all duration-300
//                            hover:bg-white hover:shadow-md hover:-translate-y-1">
//                                 <p className="text-xs uppercase tracking-wide text-gray-500">Mobile</p>
//                                 <p className="text-sm font-medium text-gray-900 mt-1">{data?.mobile}</p>
//                             </div>
//                             <div className="bg-gray-50 rounded-2xl p-5
//                              transition-all duration-300
//                            hover:bg-white hover:shadow-md hover:-translate-y-1">
//                                 <p className="text-xs uppercase tracking-wide text-gray-500">City</p>
//                                 <p className="text-sm font-medium text-gray-900 mt-1">{data?.city}</p>
//                             </div>


//                             <div className="sm:col-span-2">
//                                 <div className="bg-gray-50 rounded-2xl p-5
//                              transition-all duration-300
//                            hover:bg-white hover:shadow-md hover:-translate-y-1">
//                                     <p className="text-xs uppercase tracking-wide text-gray-500">Installation Address</p>
//                                     <p className="text-sm font-medium text-gray-900 mt-1">{data?.installation_address}</p>
//                                 </div>

//                             </div>
//                         </div>
//                         {/* TRACKING STATUS */}
//                         <div className="mt-10">
//                             <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-3">
//                                 <span className="w-1 h-6 bg-gradient-to-b from-[#00C6FF] to-[#0047FF] rounded-full"></span>
//                                 Installation Tracking
//                             </h3>

//                             <div className="relative pl-6 space-y-6">
//                                 {/* Vertical line */}
//                                 <div className="absolute left-[11px] top-0 h-full w-[2px] bg-gray-200"></div>

//                                 {steps.map((step, index) => {
//                                     const isActive = steps.indexOf(currentStatus) >= index;

//                                     return (
//                                         <div key={index} className="flex items-start gap-4">
//                                             {/* Dot */}
//                                             <div
//                                                 className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center
//                                                  ${isActive
//                                                         ? "bg-gradient-to-b from-[#00C6FF] to-[#0047FF]"
//                                                         : "bg-gray-300"
//                                                     }`}
//                                             >
//                                                 {isActive && (
//                                                     <span className="w-2 h-2 bg-white rounded-full"></span>
//                                                 )}
//                                             </div>

//                                             {/* Text */}
//                                             <div className="pb-2">
//                                                 <p
//                                                     className={`text-sm font-medium
//                                                ${isActive ? "text-gray-900" : "text-gray-400"}`}
//                                                 >
//                                                     {step}
//                                                 </p>

//                                                 {step === currentStatus && (
//                                                     <span className="inline-block mt-1 text-xs px-2 py-1 rounded-full
//               bg-blue-100 text-blue-700">
//                                                         Current Status
//                                                     </span>
//                                                 )}
//                                             </div>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>

//                     </div>

//                     {/* RIGHT DOCUMENTS */}
//                     <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">

//                         <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
//                             <span className="w-1 h-6 bg-gradient-to-b from-[#00C6FF] to-[#0047FF] rounded-full"></span>
//                             Uploaded Documents
//                         </h3>

//                         <div className="space-y-6">
//                             <div>
//                                 <div className="flex items-center justify-between mb-2">
//                                     {/* <p className="text-sm font-medium text-gray-700">{title}</p> */}
//                                     <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600">
//                                         Uploaded
//                                     </span>
//                                 </div>

//                                 <div className="group relative overflow-hidden rounded-2xl
//         border border-gray-200 bg-white shadow-sm">

//                                     <img
//                                         src={`${Base_Url}${data?.aadhaar_file}`}

//                                         className="w-full h-40 object-cover transition-transform duration-500
//                 group-hover:scale-110"
//                                     />

//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
//             opacity-0 group-hover:opacity-100 transition
//             flex items-end justify-center pb-4">
//                                         <span className="text-white text-sm font-medium">
//                                             View Document
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="flex items-center justify-between mb-2">
//                                     {/* <p className="text-sm font-medium text-gray-700">{title}</p> */}
//                                     <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600">
//                                         Uploaded
//                                     </span>
//                                 </div>

//                                 <div className="group relative overflow-hidden rounded-2xl
//                                    border border-gray-200 bg-white shadow-sm">

//                                     <img
//                                         src={`${Base_Url}${data?.pan_file}`}

//                                         className="w-full h-40 object-cover transition-transform duration-500
//                                      group-hover:scale-110"
//                                     />

//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
//                                      opacity-0 group-hover:opacity-100 transition
//                                      flex items-end justify-center pb-4">
//                                         <span className="text-white text-sm font-medium">
//                                             View Document
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="flex items-center justify-between mb-2">
//                                     {/* <p className="text-sm font-medium text-gray-700">{title}</p> */}
//                                     <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-600">
//                                         Uploaded
//                                     </span>
//                                 </div>

//                                 <div className="group relative overflow-hidden rounded-2xl
//                                  border border-gray-200 bg-white shadow-sm">

//                                     <img
//                                         src={`${Base_Url}${data?.electricity_bill_file}`}

//                                         className="w-full h-40 object-cover transition-transform duration-500
//                                          group-hover:scale-110"
//                                     />

//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
//                                         opacity-0 group-hover:opacity-100 transition
//                                          flex items-end justify-center pb-4">
//                                         <span className="text-white text-sm font-medium">
//                                             View Document
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };







// export default ProfileDetail;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    FaFilePdf,
    FaFileWord,
    FaFileAlt,
    FaShieldAlt,
} from "react-icons/fa";
import { Base_Url } from "../../API/Base_Url";
import logo from '../../assets/Image/newlogocolored.png'

const ProfileDetail = () => {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const fetchProfile = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${Base_Url}api/profile/me`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data.data);
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const steps = [
        "Solar Order Received",
        "Technician Assigned",
        "Installation In Progress",
        "Installation Completed",
        "Delivered",
    ];

    const currentStatus = data?.status;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-sky-100 px-4 py-10">
            <div className="max-w-7xl mx-auto space-y-12">

                {/* ================= HERO ================= */}
                <div className="relative bg-white/70 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-xl">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl" />

                    <div className="flex items-center gap-4">
                      

                        <h2 className="text-4xl font-extrabold text-gray-900">
                            My Solar{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                                Profile
                            </span>
                        </h2>
                          <img
                            src={logo}
                            alt="Holsol"
                            className="h-8 w-auto"
                        />
                    </div>


                    <p className="mt-3 text-gray-600 max-w-xl">
                        Track installation progress and securely access your verified documents.
                    </p>

                    <button
                        onClick={() => navigate("/profile", { state: { edit: true, data } })}
                        className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-b from-[#00C6FF] to-[#0047FF] text-white shadow-lg hover:scale-105 transition"
                    >
                        Edit Profile
                    </button>
                </div>

                {/* ================= MAIN GRID ================= */}
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                            <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                            Personal & Installation Details
                        </h3>

                        <div className="grid sm:grid-cols-3 gap-6">
                            <Info label="Full Name" value={data.full_name} />
                            <Info label="Email" value={data.email} />
                            <Info label="Mobile" value={data.mobile} />
                            <Info label="City" value={data.city} />
                            <div className="sm:col-span-2">
                                <Info label="Installation Address" value={data.installation_address} />
                            </div>
                        </div>

                        {/* ================= STATUS ================= */}
                        <div className="mt-12">
                            <h3 className="text-lg font-semibold mb-6">
                                Installation Progress
                            </h3>

                            <div className="relative pl-6 space-y-6">
                                <div className="absolute left-[11px] top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 to-indigo-500"></div>

                                {steps.map((step, index) => {
                                    const active = steps.indexOf(currentStatus) >= index;
                                    return (
                                        <div key={index} className="flex gap-4">
                                            <div
                                                className={`w-6 h-6 rounded-full flex items-center justify-center
                        ${active ? "bg-blue-600" : "bg-gray-300"}`}
                                            >
                                                {active && <span className="w-2 h-2 bg-white rounded-full" />}
                                            </div>

                                            <div>
                                                <p className={`text-sm font-medium ${active ? "text-gray-900" : "text-gray-400"}`}>
                                                    {step}
                                                </p>
                                                {step === currentStatus && (
                                                    <span className="text-xs mt-1 inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                                        Current Status
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}

                                <DocSection title="Admin Verified Documents" icon={<FaShieldAlt />}>
                                    {data?.admin_documents?.length ? (
                                        <div className="grid sm:grid-cols-3 gap-5">
                                            {data.admin_documents.map((doc) => (
                                                <DocCard
                                                    key={doc._id}
                                                    title={doc.type}
                                                    file={`${Base_Url}${doc.file}`}
                                                    verified
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-gray-500">
                                            No admin documents uploaded yet.
                                        </p>
                                    )}
                                </DocSection>

                            </div>
                        </div>
                    </div>

                    {/* ================= DOCUMENTS ================= */}
                    <div className="space-y-10">

                        <DocSection title="Your Documents">
                            <DocCard title="Aadhaar Card" file={`${Base_Url}${data?.aadhaar_file}`} />
                            <DocCard title="PAN Card" file={`${Base_Url}${data?.pan_file}`} />
                            <DocCard title="Electricity Bill" file={`${Base_Url}${data?.electricity_bill_file}`} />
                        </DocSection>



                    </div>
                </div>
            </div>
        </div>
    );
};

/* ================= REUSABLE COMPONENTS ================= */

const Info = ({ label, value }) => (
    <div className="bg-[#dff2fe] rounded-2xl p-5 hover:bg-white hover:shadow transition">
        <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-gray-900 mt-1">{value || "-"}</p>
    </div>
);

const DocSection = ({ title, children, icon }) => (
    <div className="bg-white rounded-3xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
            {icon && <span className="text-blue-600">{icon}</span>}
            {title}
        </h3>
        <div className="grid gap-5">{children}</div>
    </div>
);

const DocCard = ({ title, file, verified }) => {
    if (!file) return null;

    const ext = file.split(".").pop().toLowerCase();
    const isImage = ["jpg", "jpeg", "png", "webp"].includes(ext);

    return (
        <div
            onClick={() => window.open(file, "_blank")}
            className="cursor-pointer border rounded-2xl p-4 hover:shadow-xl transition bg-gradient-to-br from-white to-gray-50"
        >
            <div className="flex justify-between items-center mb-3">
                <p className="text-sm font-semibold capitalize">{title}</p>
                {verified && (
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                        Verified
                    </span>
                )}
            </div>

            {isImage ? (
                <img src={file} className="w-full h-32 object-cover rounded-xl" />
            ) : (
                <FileIcon ext={ext} />
            )}
        </div>
    );
};

const FileIcon = ({ ext }) => {
    if (ext === "pdf")
        return <IconBox icon={<FaFilePdf />} bg="bg-red-50" color="text-red-600" text="View PDF" />;

    if (["doc", "docx"].includes(ext))
        return <IconBox icon={<FaFileWord />} bg="bg-blue-50" color="text-blue-600" text="Download Document" />;

    return <IconBox icon={<FaFileAlt />} bg="bg-gray-100" color="text-gray-600" text="Open File" />;
};

const IconBox = ({ icon, bg, color, text }) => (
    <div className={`h-32 flex flex-col items-center justify-center ${bg} rounded-xl`}>
        <div className={`${color} text-5xl mb-2`}>{icon}</div>
        <p className="text-sm text-gray-600">{text}</p>
    </div>
);

export default ProfileDetail;
