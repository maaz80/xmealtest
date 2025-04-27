import React, { useEffect } from 'react'
import { useState } from 'react'
import { supabase } from '../supabase-client'

const TaskManager = ({ session }) => {
  const [newTask, setNewTask] = useState({ title: "", description: "" })
  const [tasks, setTasks] = useState([])
  const [newDescription, setNewDescription] = useState("")
  const [imageUrl, setImageUrl] = useState(null)


  // Image Upload 
  const uploadImage = async (file) => {
    const filePath = `${file.name}-${Date.now()}`
    const { error } = await supabase.storage.from('tasks-images').upload(filePath, file)

    if (error) {
      console.log(error)
      return null
    }
    const { data } = supabase.storage.from('tasks-images').getPublicUrl(filePath)
    return data.publicUrl
  }

  // Form Submit 
  const handleSubmit = async (e) => {
    e.preventDefault()

    let imageUrlHere = null
    if (imageUrl) {
      imageUrlHere = await uploadImage(imageUrl)
    }

    const { error } = await supabase.from('tasks').insert({ ...newTask, email: session.user.email, image_url: imageUrlHere })

    if (error) {
      console.log(error)
      return
    }

    setNewTask({ title: "", description: "" })
    setImageUrl(null)
    fetchTasks()
  }

  // Set Image url 
  const handleUploadImage = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageUrl(e.target.files[0])
    }
  }

  // Delete Function 
  const handleDelete = async (id) => {
    const { error } = await supabase.from('tasks').delete().eq('id', id)
    if (error) {
      console.log(error)
      return
    }
    fetchTasks()
  }

  // Edit Function 
  const handleEdit = async (id) => {
    const { error } = await supabase.from('tasks').update({ description: newDescription }).eq('id', id)
    if (error) {
      console.log(error)
      return
    }
    fetchTasks()
  }

  // Fetching Task 
  const fetchTasks = async () => {
    const { error, data } = await supabase.from('tasks').select('*').order('id', { ascending: false })
    if (error) {
      console.log(error)
      return
    }
    setTasks(data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  // Real time fetching 
  useEffect(() => {
    const channel = supabase.channel('tasks-channel')
    channel.on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'tasks' }, (payload) => {
      const newTask = payload.new
      setTasks((prev) => [newTask, ...prev])
    })
      .subscribe((status) => {
        console.log("Subscription", status)
      })
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Task Manager</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 mb-8 space-y-4">
        <input type="text" placeholder="Title"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setNewTask((prev) => ({ ...prev, title: e.target.value }))} value={newTask.title} />

        <input type="text" placeholder="Description"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setNewTask((prev) => ({ ...prev, description: e.target.value }))} value={newTask.description} />

        <input type="file" accept="image/*"
          className="w-full text-gray-700"
          onChange={handleUploadImage} />

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Add Task
        </button>
      </form>

      <div className="space-y-6">
        {tasks.map(task => (
          <div key={task.id} className="bg-white shadow rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
              <p className="text-gray-600 mb-2">{task.description}</p>
              {task.image_url && <img src={task.image_url} alt="Task" className="w-48 rounded-lg mt-2" />}
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <input type="text" placeholder="New Description"
                className="p-2 border border-gray-300 rounded focus:outline-none"
                onChange={(e) => setNewDescription(e.target.value)} />

              <button onClick={() => handleEdit(task.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
                Edit
              </button>

              <button onClick={() => handleDelete(task.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskManager
