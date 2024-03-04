import { useState } from "react"
import NewProject from "./components/NewProject"
import NoProjectSelected from "./components/NoProjectSelected"
import ProjectSidebar from "./components/ProjectSidebar"

function App() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
	})

	function handleStartNewProject() {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: null,
			}
		})
	}

	function handleAddProject(projectData) {
		setProjectState(prevState => {
			const newProject = {
				...projectData,
				id: Math.random(),
			}
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject],
			}
		})
	}

	let content
	if (projectState.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddProject} />
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartNewProject} />
	}

	return (
		<main className='h-screen my-8 flex gap-8'>
			<ProjectSidebar
				onStartAddProject={handleStartNewProject}
				projects={projectState.projects}
			/>
			{content}
		</main>
	)
}

export default App
