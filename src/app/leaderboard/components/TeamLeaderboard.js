"use client"
import { useState, useEffect } from "react"
import { Ripple } from "@/components/magicui/ripple"
import { motion } from "framer-motion"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { getUser } from "@/app/actions/auth"
import axios from "axios"
import toast from "react-hot-toast"
export default function TeamLeaderboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [userUUID, setUserUUID] = useState(null)
  const [user, setUser] = useState(null)
  const [teamCode, setTeamCode] = useState(null)
  const [teamData, setTeamData] = useState([])
  const [teamsPerPage, setTeamsPerPage] = useState(5)
  const [selectedTeam, setSelectedTeam] = useState(null)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/api/teams/get/paginated?page=${currentPage}&limit=${teamsPerPage}`)

        if (!response.ok) {
          throw new Error("Failed to fetch teams")
        }

        const data = await response.json()

        setTeams(data.teams)
        setTotalPages(data.totalPages)
      } catch (error) {
        console.error("Error fetching teams:", error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTeams()
  }, [currentPage, teamsPerPage])

  useEffect(() => {
    const fetchUserUUID = async () => {
      if (session?.user?.email) {
        try {
          const user = await getUser()
          setUserUUID(user.uuid)
          setUser(user)
          // console.log(user);
        } catch (error) {
          console.error("Error fetching UUID:", error)
        }
      }
    }
    fetchUserUUID()
  }, [session])

  useEffect(() => {
    if (userUUID) {
      axios
        .get(`/api/user/get?uuid=${userUUID}`)
        .then((res) => {
          setTeamCode(res.data.teamCode)
          setLoading(false)
        })
        .catch((err) => {
          console.error(err)
          setLoading(false)
        })
    }
  }, [userUUID])

  setTimeout(() => {
    setLoading(false)
  }, 6000)

  useEffect(() => {
    if (teamCode) {
      axios
        .get(`/api/teams/get?teamCode=${teamCode}`)
        .then((res) => {
          // Handle the response data as needed
          const team = res.data.team
          // console.log(team)
          setTeamData(team)
          // console.log(teamData)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [teamCode])

  if (status === "loading") {
    return <div className='text-center text-white'>Checking authentication...</div>
  }

  if (!session) {
    router.push("/login")
    return <div className='text-center text-white'>Redirecting to login...</div>
  }

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  const handleTeamsPerPageChange = (event) => {
    setTeamsPerPage(parseInt(event.target.value))
    setCurrentPage(1) // Reset to first page when changing limit
  }

  const displayTeamMembers = async (teamCode) => {
    try {
      const response = await axios.get(`/api/teams/get?teamCode=${teamCode}`)
      const selteam = response.data.team
      setSelectedTeam(selteam)
      toast.dismiss() // Dismiss any existing toast before showing a new one
      const teamName = selteam.teamName
      const teamMembers = selteam?.members?.map((member) => `${member.name} - ${member.rollNumber}, Mob: ${member.mobileNumber}`)

      toast.custom(
        (t) => (
          <div className='bg-[rgba(140,126,102,0.4)] text-white/70 backdrop-blur-md rounded-lg p-4 border border-[rgba(239,202,78,0.2)] max-w-[400px] text-center relative'>
            <button onClick={() => toast.dismiss(t.id)} className='absolute top-2 right-2 text-white bg-transparent hover:text-yellow-400 transition duration-200'>
              ✖
            </button>
            <p className='text-2xl font-bold text-yellow-400 mb-1'>
              Team Name:
              <span className='font-normal text-white ml-1'>{teamName}</span>
            </p>

            <p className='text-xl font-bold text-yellow-400 my-2'>Team Members:</p>
            <div className='text-white text-sm space-y-4'>{teamMembers?.length ? teamMembers.map((member, index) => <div key={index}>{member}</div>) : <div>No members available.</div>}</div>
          </div>
        ),
        { duration: Infinity }
      )
    } catch (error) {
      console.error("Error fetching team members:", error)
      toast.error("Error fetching team members. Please try again.")
    }
  }

  if (loading) {
    return (
      <div className='relative flex h-[480px] w-full flex-col items-center justify-center border mb-4 border-[#EFCA4E]/20 rounded-3xl bg-[#1A0B2E]/50 backdrop-blur-xl shadow-xl hover:border-[#EFCA4E]/40 transition-all duration-300 group overflow-hidden max-w-[480px] mx-auto'>
        <p className='text-[#F6F1E2]/70'>Fetching Ranks</p>
        <motion.img
          src='/bitotsav-logo.svg'
          alt='Bitotsav Logo'
          className='w-56 mx-auto opacity-50 group-hover:opacity-100 transition-all duration-300 relative z-10 drop-shadow-2xl transform group-hover:scale-110'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <Ripple />
        <div className='absolute inset-0 bg-gradient-to-r from-[#EFCA4E]/5 via-transparent to-[#EFCA4E]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className='backdrop-blur-sm p-6 rounded-2xl border border-red-500/20 mb-8 text-center bg-[#1A0B2E]/70 text-red-400'>
        <p>Error: {error}</p>
        <button
          onClick={() => window.location.reload()}
          className='mt-2 bg-red-500/30 hover:bg-red-500/40 text-[#F6F1E2] font-bold py-1 px-4 rounded border border-red-500/20 transition-colors duration-300'
        >
          Try Again
        </button>
      </div>
    )
  }

  // Compute ranks with ties handling
  const computeRanksWithTies = () => {
    // Create a copy of teams array to avoid modifying the original
    const teamsWithRanks = [...teams]

    // Sort teams by points in descending order (highest first)
    teamsWithRanks.sort((a, b) => b.points - a.points)

    let currentRank = (currentPage - 1) * teamsPerPage + 1
    let currentPoints = teamsWithRanks.length > 0 ? teamsWithRanks[0].points : null
    let sameRankCount = 0

    // Assign ranks to teams
    teamsWithRanks.forEach((team, index) => {
      if (index > 0 && team.points < currentPoints) {
        // Different points than previous team, so rank changes
        currentRank += sameRankCount + 1
        sameRankCount = 0
        currentPoints = team.points
      } else if (index > 0) {
        // Same points as previous team
        sameRankCount++
      }

      // Add rank property to team object
      team.rank = currentRank
    })

    return teamsWithRanks
  }

  const calculateTimeDifference = (inputTime) => {
    try {
      const currentTime = new Date()
      const [datePart, timePart] = inputTime.split(" ")
      const [day, month] = datePart.split("/").map(Number)
      const [hours, minutes] = timePart.split(":").map(Number)

      if (isNaN(day) || isNaN(month) || isNaN(hours) || isNaN(minutes) || day < 1 || day > 31 || month < 1 || month > 12 || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return "Invalid time format"
      }

      const targetTime = new Date(currentTime.getFullYear(), month - 1, day, hours, minutes, 0, 0)

      const differenceInMilliseconds = targetTime - currentTime
      const differenceInMinutes = Math.abs(Math.floor(differenceInMilliseconds / (1000 * 60)))
      const hoursDifference = Math.floor(differenceInMinutes / 60)
      const minutesDifference = differenceInMinutes % 60

      return `${hoursDifference}h ${minutesDifference}m`
    } catch (error) {
      console.error("Error in calculateTimeDifference:", error)
      return "Error calculating time difference"
    }
  }

  const teamsWithRanks = computeRanksWithTies()

  return (
    <div className='bg-[#1A0B2E]/30 backdrop-blur-xl p-8 rounded-2xl border border-[#EFCA4E]/10 shadow-xl'>
      <div className='flex flex-col items-center justify-center mb-6'>
        <h1 className='text-4xl md:text-5xl text-center font-bold tracking-wide mb-2'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#EFCA4E] via-[#F6F1E2] to-[#EFCA4E]'>BITOTSAV'25 Leaderboard</span>
        </h1>
        <p className='text-xl text-[#F6F1E2]/60 text-center'>Rankings based on team points</p>
      </div>
      {/* Teams per page selector */}
      <div className='flex justify-end mb-4'>
        <div className='flex items-center space-x-2'>
          <label htmlFor='teamsPerPage' className='text-[#F6F1E2]/70 text-sm'>
            Teams per page:
          </label>
          <select
            id='teamsPerPage'
            value={teamsPerPage}
            onChange={handleTeamsPerPageChange}
            className='bg-[#1A0B2E] border border-[#EFCA4E]/20 text-[#F6F1E2] rounded-md px-2 py-1 text-sm focus:outline-none focus:border-[#EFCA4E]/50'
          >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
          </select>
        </div>
      </div>
      <div className='flex justify-center mb-6'>
        <div className='text-center'>
          <h2 className='text-2xl font-bold text-[#EFCA4E]'>Your Team</h2>
          {teamData ? (
            <div className='mt-4 p-4 bg-[#1A0B2E]/50 border border-[#EFCA4E]/20 rounded-lg'>
              <p className='text-lg font-semibold text-[#EFCA4E]'>
                Team Name: <span className='text-white/70'>{teamData.teamName}</span>
              </p>
              <p className='text-md text-[#EFCA4E]'>
                Points: <span className='text-white/70'>{teamData.points}</span>
              </p>
              <p className='text-md text-[#EFCA4E]'>
                Leader: <span className='text-white/70'>{teamData.leaderName}</span>
              </p>
              {/*<p className='text-md text-[#EFCA4E]'>
                Rank: <span className='text-white/70'>{teamsWithRanks.find((team) => team.teamCode === teamData.teamCode)?.rank || "Loading..."}</span>
              </p>*/}
            </div>
          ) : (
            <p className='text-sm text-[#F6F1E2]/70'>You are not part of any team.</p>
          )}
        </div>
      </div>
      <span className='text-white/60 flex text-center align-center justify-center self-center'>Last Updated: {calculateTimeDifference("21/03 12:00")} </span>
      <div className='backdrop-blur-sm p-6 rounded-2xl border border-[#EFCA4E]/10 mb-4 bg-[#0A0118]/50 overflow-x-auto'>
        <span className='text-white/60 pl-1'>Click on Team Name to view Members</span>
        <table className='w-full border-collapse text-[#F6F1E2]/90'>
          <thead>
            <tr className='p-6 bg-gradient-to-br from-[#2D1E0F]/50 to-[#1A0B2E]/50 border-b border-[#EFCA4E]/10 text-[#EFCA4E]'>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>Rank</th>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>Team</th>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>Leader</th>
              <th className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider'>Points</th>
            </tr>
          </thead>
          <tbody>
            {teamsWithRanks.map((team) => {
              const rank = team.rank
              const rankColors = {
                1: "bg-[#EFCA4E]/40 border-[#EFCA4E]/60 text-[#EFCA4E]",
                2: "bg-[#C0C0C0]/30 border-[#C0C0C0]/50 text-[#C0C0C0]",
                3: "bg-[#CD7F32]/30 border-[#CD7F32]/50 text-[#CD7F32]",
              }

              const rowHighlight =
                rank <= 3 ? `border-b border-[#EFCA4E]/20 bg-gradient-to-r from-[#1A0B2E]/30 to-transparent hover:from-[#2D1E0F]/30` : `border-b border-[#EFCA4E]/5 hover:bg-[#2D1E0F]/20`

              return (
                <tr key={team._id} className={`${rowHighlight} transition-colors duration-500 cursor-pointer`}>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='flex items-center'>
                      <div
                        className={`
                        flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center font-bold border
                        ${rank <= 3 ? rankColors[rank] : "bg-[#1A0B2E]/50 border-[#EFCA4E]/10 text-[#F6F1E2]/70"}
                      `}
                      >
                        {rank}
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm font-medium text-[#EFCA4E] hover:text-[#F6F1E2] transition-colors duration-300 cursor-pointer' onClick={() => displayTeamMembers(team.teamCode)}>
                      {team.teamName}
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-sm text-[#F6F1E2]/70'>{team.leaderName}</div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                    <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#2D1E0F]/50 text-[#EFCA4E] border border-[#EFCA4E]/20'>{team.points} pts</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {/* Pagination controls */}
      <div className='flex items-center justify-between'>
        <div className='text-[#F6F1E2]/60 text-sm'>
          Page {currentPage} of {totalPages}
        </div>
        <div className='flex space-x-2'>
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md text-[#F6F1E2] text-sm border ${
              currentPage === 1 ? "border-[#EFCA4E]/10 bg-[#1A0B2E]/30 cursor-not-allowed opacity-50" : "border-[#EFCA4E]/30 bg-[#1A0B2E]/70 hover:bg-[#2D1E0F]/50 hover:border-[#EFCA4E]/50"
            } transition-colors`}
          >
            First
          </button>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md text-[#F6F1E2] text-sm border ${
              currentPage === 1 ? "border-[#EFCA4E]/10 bg-[#1A0B2E]/30 cursor-not-allowed opacity-50" : "border-[#EFCA4E]/30 bg-[#1A0B2E]/70 hover:bg-[#2D1E0F]/50 hover:border-[#EFCA4E]/50"
            } transition-colors`}
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md text-[#F6F1E2] text-sm border ${
              currentPage === totalPages ? "border-[#EFCA4E]/10 bg-[#1A0B2E]/30 cursor-not-allowed opacity-50" : "border-[#EFCA4E]/30 bg-[#1A0B2E]/70 hover:bg-[#2D1E0F]/50 hover:border-[#EFCA4E]/50"
            } transition-colors`}
          >
            Next
          </button>
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md text-[#F6F1E2] text-sm border ${
              currentPage === totalPages ? "border-[#EFCA4E]/10 bg-[#1A0B2E]/30 cursor-not-allowed opacity-50" : "border-[#EFCA4E]/30 bg-[#1A0B2E]/70 hover:bg-[#2D1E0F]/50 hover:border-[#EFCA4E]/50"
            } transition-colors`}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  )
}
