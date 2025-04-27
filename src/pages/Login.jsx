import React, { useState } from "react";
import { supabase } from "../supabase-client";
import { useNavigate } from "react-router-dom";

function Login() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [session, setSession] = useState(null);
    const navigate = useNavigate();



    //  OTP sending
    const sendOtp = async () => {
        const { error } = await supabase.auth.signInWithOtp({
            phone: phone,
        });

        if (error) {
            console.error("Error sending OTP: ", error);
            alert("Error sending OTP: Check console.");
        } else {
            alert("OTP sent successfully!");
        }
    };

    // OTP verify
    const verifyOtp = async () => {
        const { data, error } = await supabase.auth.verifyOtp({
            phone: phone,
            token: otp,
            type: "sms",
        });

        if (error) {
            console.error("Error verifying OTP: ", error);
            alert("OTP not varified!");
        } else {
            console.log("Login successful:", data);
            setSession(data.session); 
            navigate("/");
            fetchTasks();
        }
    };

    return (
        <div className="flex items-center justify-center h-[540px] bg-gray-100 p-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Welcome to XMeals</h2>
            <p className="text-gray-500 text-center">Login with your phone number</p>
    
            <div className="space-y-4">
              <input
                type="tel"
                placeholder="+91XXXXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none text-gray-700"
              />
    
              <button
                onClick={sendOtp}
                className="w-full bg-pink-500 hover:bg-pink-600 transition duration-300 text-white font-semibold py-3 rounded-lg"
              >
                Send OTP
              </button>
    
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-pink-400 outline-none text-gray-700"
              />
    
              <button
                onClick={verifyOtp}
                className="w-full bg-green-500 hover:bg-green-600 transition duration-300 text-white font-semibold py-3 rounded-lg"
              >
                Verify OTP
              </button>
            </div>
    
         
          </div>
        </div>
      );
    };
    
    export default Login;