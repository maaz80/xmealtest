import React, { useEffect, useState } from 'react'
import TaskManager from './SupaBaseComponents/TaskManager'
import Login from './SupaBaseComponents/Login'
import { supabase } from './supabase-client'

const App = () => {
  const [session, setSession] = useState(null)

  const fetchSession = async () => {
    const currentSession = await supabase.auth.getSession()
    setSession(currentSession.data.session)
    console.log(currentSession)
  }

  useEffect(() => {
    fetchSession()
    const { data: Listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)

      return () => {
        Listener.subscription.unsubscribe()
      }
    })
  }, [])

  const logout = async () => {
    supabase.auth.signOut()
  }
  return (
    <div>
      {session ?
        <>
          <button onClick={logout}>Logout</button>
          <TaskManager session={session}/>
        </>
        : <Login />}


    </div>
  )
}

export default App