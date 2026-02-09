import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import solar from "../../assets/Image/auth.jpeg";
import axios from "axios";
import { Base_Url } from "../../API/Base_Url";
import logo from '../../assets/Image/newlogocolored.png'

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ===== EDIT MODE CHECK =====
  const isEdit = location.state?.edit;
  const editData = location.state?.data;

  // ================= STATES =================
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");

  const [pan, setPan] = useState(null);
  const [aadhaar, setAadhaar] = useState(null);
  const [electricityBill, setElectricityBill] = useState(null);

  const [loading, setLoading] = useState(false);

  // ================= SET DATA IN EDIT =================
  useEffect(() => {
    if (isEdit && editData) {
      setName(editData.full_name || "");
      setEmail(editData.email || "");
      setMobile(editData.mobile || "");
      setCity(editData.city || "");
      setAddress(editData.installation_address || "");
    }
  }, [isEdit, editData]);

  // ================= FILE HANDLER =================
  const handleFile = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (type === "pan") setPan(file);
    if (type === "aadhaar") setAadhaar(file);
    if (type === "electricity_bill") setElectricityBill(file);
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("full_name", name);
      formData.append("email", email);
      formData.append("mobile", mobile);
      formData.append("city", city);
      formData.append("installation_address", address);

      if (pan) formData.append("pan", pan);
      if (aadhaar) formData.append("aadhaar", aadhaar);
      if (electricityBill)
        formData.append("electricity_bill", electricityBill);

      const token = localStorage.getItem("token");

      if (isEdit) {
        // 🔄 UPDATE PROFILE
        await axios.put(`${Base_Url}api/profile`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        // ➕ CREATE PROFILE
        await axios.post(`${Base_Url}api/profile`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
      }

      navigate("/profile-detail");
    } catch (error) {
      alert(error?.response?.data?.message || "Profile save failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#f0f9ff] via-[#e6f0ff] to-[#d0e4ff] px-4">
      <div className="relative w-full max-w-5xl bg-white/80 backdrop-blur rounded-3xl shadow-xl overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-2 bg-[linear-gradient(180deg,#00C6FF_0%,#FFD200_100%)]"></div>

        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3">


              <h2 className="text-3xl font-extrabold text-gray-900">
                {isEdit ? "Edit Solar Profile" : "Solar Profile"}
              </h2>
              <img
                src={logo}
                alt="Holsol"
                className="h-8 w-auto"
              />
            </div>


            <p className="text-gray-600 mt-3">
              Complete your profile to move forward with your solar installation.
            </p>
            <div className="mt-8 space-y-4">
              {["Verified personal information", "Secure document upload", "Faster installation process",].map((text, i) => (<div key={i} className="flex items-center gap-3"> <span className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r from-[#00C6FF] to-[#0047FF] text-white text-sm"> ✓ </span> <p className="text-sm text-gray-700">{text}</p> </div>))} </div>

            <div className="mt-5">
              <img src={solar} className="rounded-lg" />
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="w-full rounded-xl border px-4 py-3"
              required
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full rounded-xl border px-4 py-3"
              required
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile"
                className="rounded-xl border px-4 py-3"
                required
              />
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="rounded-xl border px-4 py-3"
                required
              />
            </div>

            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows="3"
              placeholder="Installation Address"
              className="w-full rounded-xl border px-4 py-3"
              required
            />

            {/* FILES */}
            <div className="grid grid-cols-3 gap-3">
              <label className="border-2 border-dashed rounded-xl py-4 text-center cursor-pointer">
                PAN
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFile(e, "pan")}
                />
              </label>

              <label className="border-2 border-dashed rounded-xl py-4 text-center cursor-pointer">
                Aadhaar
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFile(e, "aadhaar")}
                />
              </label>

              <label className="border-2 border-dashed rounded-xl py-4 text-center cursor-pointer">
                Electricity Bill
                <input
                  type="file"
                  hidden
                  onChange={(e) => handleFile(e, "electricity_bill")}
                />
              </label>
            </div>

            <button
              disabled={loading}
              className="w-full py-3 rounded-xl text-white bg-gradient-to-r from-[#00C6FF] to-[#0047FF]"
            >
              {loading
                ? "Saving..."
                : isEdit
                  ? "Update Profile"
                  : "Continue"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
