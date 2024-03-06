import { useRef } from "react"
import Modal from "./Modal"
import Input from "./Input"

export default function NewProject({ onAdd, onCancel }) {
	const dialog = useRef()
	const title = useRef()
	const description = useRef()
	const dueDate = useRef()

	function handleSave() {
		const entredTitle = title.current.value
		const entredDescription = description.current.value
		const entredDueDate = dueDate.current.value

		if (
			entredTitle.trim() === "" ||
			entredDescription.trim() === "" ||
			entredDueDate.trim() === ""
		) {
			dialog.current.open()
			return
		}
		onAdd({
			title: entredTitle,
			description: entredDescription,
			dueDate: entredDueDate,
		})
	}

	return (
		<>
			<Modal ref={dialog} buttonCaption='Okay'>
				<h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
				<p className='text-stone-600 mb-4'>
					Oops ... Looks like you forgot to enter a value.
				</p>
				<p className='text-stone-600 mb-4'>
					Please make sure you provide a valid value for every input field.
				</p>
			</Modal>
			<div className='w-[35rem] mt-16'>
				<menu className='flex items-center justify-end gap-4 my-4'>
					<li>
						<button
							onClick={onCancel}
							className='text-stone-800 hover:text-stone-950'
						>
							Cancel
						</button>
					</li>
					<li>
						<button
							onClick={handleSave}
							className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
						>
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input type='text' ref={title} label='Title' />
					<Input ref={description} label='Description' textarea />
					<Input type='date' ref={dueDate} label='Duo Date' />
				</div>
			</div>
		</>
	)
}
