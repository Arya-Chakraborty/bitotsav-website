"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getUserUUID } from "@/app/actions/auth";
import axios from "axios";
import { motion } from "framer-motion";

export default function Register() {
  const [activeTab, setActiveTab] = useState("create");
  const [userUUID, setUserUUID] = useState("");
  const [teamCode, setTeamCode] = useState("");
  const { data: session } = useSession();

  useEffect(() => {
    const fetchUserUUID = async () => {
      if (session?.user?.email) {
        try {
          const uuid = await getUserUUID();
          setUserUUID(uuid);
        } catch (error) {
          console.error("Error fetching UUID:", error);
        }
      }
    };
    fetchUserUUID();
  }, [session]);

  useEffect(() => {
    if (userUUID) {
      axios
        .get(`/api/user/get?uuid=${userUUID}`)
        .then((res) => {
          console.log(res.data);
          setTeamCode(res.data.teamCode);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [userUUID]);

  const handleCreateTeam = (e) => {
    e.preventDefault();

    const teamName = e.target.elements.teamName.value; // Access input by name
    const leaderMobileNumber = e.target.elements.leaderMobileNumber.value;
    const rollNumber = e.target.elements.rollNumber.value;

    if (!teamName.trim() || !leaderMobileNumber || !rollNumber) {
      alert("Please fill all the fields.");
      return;
    }

    // extracting uuid form sesssion storage
    const leaderUUID = userUUID; // uuid;
    if (!leaderUUID) {
      window.location.href = "/coming-soon";
      // alert("User ID not found. Please log in again.");
      return;
    }

    axios
      .post("/api/teams/create", {
        teamName,
        leaderUUID,
        leaderMobileNumber,
        rollNumber,
      })
      .then((res) => {
        if (res.status === 201) {
          alert("Team created successfully");
          setTeamCode(res.data.teamCode);
        }
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("An error occurred. Please try again later.");
        }
      });
  };

  const handleJoinTeam = (e) => {
    e.preventDefault();
    const teamCode = e.target.elements.teamId.value.trim();

    if (!teamCode) {
      alert("Please enter a valid Team ID.");
      return;
    }

    // extracting uuid form sesssion storage
    if (!userUUID) {
      alert("User ID not found. Please log in again.");
      return;
    }

    axios
      .post("/api/teams/join", { teamCode, userUUID })
      .then((res) => {
        if (res.status === 200) {
          alert("Team joined successfully!");
          setTeamCode(res.data.teamCode);
        } else {
          alert(`Unexpected response: ${res.status}`);
        }
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("An error occurred. Please try again later.");
        }
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0118] via-[#2D1E0F] to-[#1A0B2E] text-[#F6F1E2] py-24 px-4 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.05] pointer-events-none"></div>
      <div className="absolute top-0 -left-4 w-96 h-96 bg-[#EFCA4E] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-[#2D1E0F] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#EFCA4E] via-[#F6F1E2] to-[#EFCA4E]">
            Team Registration
          </h1>
          <p className="text-[#F6F1E2]/70 text-lg">
            Create or join a team to participate in events
          </p>
        </div>

        {/* Team Code Display */}
        {teamCode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-[#EFCA4E]/20 text-center space-y-4"
          >
            <h4 className="text-2xl font-semibold text-[#EFCA4E]">Your Team Code</h4>
            <p className="text-3xl font-mono text-white">{teamCode}</p>
          </motion.div>
        )}

        {/* Team Creation/Join Forms */}
        {!teamCode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-[#EFCA4E]/20"
          >
            {/* Tabs */}
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveTab("create")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === "create" ? "bg-gradient-to-r from-[#EFCA4E] to-[#2D1E0F] text-white shadow-lg shadow-[#EFCA4E]/20" : "text-[#F6F1E2]/70 hover:text-[#F6F1E2] bg-white/5"}`}
              >
                Create Team
              </button>
              <button
                onClick={() => setActiveTab("join")}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === "join" ? "bg-gradient-to-r from-[#EFCA4E] to-[#2D1E0F] text-white shadow-lg shadow-[#EFCA4E]/20" : "text-[#F6F1E2]/70 hover:text-[#F6F1E2] bg-white/5"}`}
              >
                Join Team
              </button>
            </div>

            {/* Create Team Form */}
            {activeTab === "create" && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-md mx-auto"
              >
                <form className="space-y-4" onSubmit={handleCreateTeam}>
                  <h4 className="text-2xl font-semibold text-[#EFCA4E] mb-6">Create Your Team</h4>
                  <div className="space-y-4">
                    <input
                      className="w-full p-3 bg-white/5 border border-[#EFCA4E]/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#EFCA4E]/50 transition-all"
                      name="teamName"
                      placeholder="Team Name"
                    />
                    <input
                      className="w-full p-3 bg-white/5 border border-[#EFCA4E]/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#EFCA4E]/50 transition-all"
                      name="leaderMobileNumber"
                      placeholder="Leader Mobile Number"
                    />
                    <input
                      className="w-full p-3 bg-white/5 border border-[#EFCA4E]/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#EFCA4E]/50 transition-all"
                      name="rollNumber"
                      placeholder="Roll Number"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#EFCA4E] to-[#2D1E0F] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#EFCA4E]/20"
                    type="submit"
                  >
                    Create Team
                  </motion.button>
                </form>
              </motion.div>
            )}

            {/* Join Team Form */}
            {activeTab === "join" && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-md mx-auto"
              >
                <form className="space-y-4" onSubmit={handleJoinTeam}>
                  <h4 className="text-2xl font-semibold text-[#EFCA4E] mb-6">Join a Team</h4>
                  <input
                    className="w-full p-3 bg-white/5 border border-[#EFCA4E]/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#EFCA4E]/50 transition-all"
                    placeholder="Enter Team ID"
                    name="teamId"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#EFCA4E] to-[#2D1E0F] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#EFCA4E]/20"
                    type="submit"
                  >
                    Join Team
                  </motion.button>
                </form>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
