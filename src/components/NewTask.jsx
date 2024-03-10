import { useState } from "react"

export default function NewTask({ onAdd }) {
	const [entredTask, setEntredTask] = useState("")

	function handleChange(event) {
		setEntredTask(event.target.value)
	}

	function handleClick() {
		if (entredTask.trim() === "") {
			return
		}
		onAdd(entredTask)
		setEntredTask("")
	}

	return (
		<div className='flex items-center gap-4'>
			<input
				onChange={handleChange}
				value={entredTask}
				type='text'
				className='w-64 py-1 rounded-sm bg-stone-200'
			/>
			<button
				onClick={handleClick}
				className='text-stone-700 hover:text-stone-950'
			>
				Add Task
			</button>
		</div>
	)
}
