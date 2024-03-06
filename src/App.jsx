import { useState } from "react"
import NewProject from "./components/NewProject"
import NoProjectSelected from "./components/NoProjectSelected"
import ProjectSidebar from "./components/ProjectSidebar"
import SelectedProject from "./components/SelectedProject"

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
	function handleCancelAddProject() {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
			}
		})
	}

	function handleSelectProject(id) {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: id,
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
	const selectedProject = projectState.projects.find(
		project => project.id === projectState.selectedProjectId
	)
	let content = <SelectedProject project={selectedProject} />
	if (projectState.selectedProjectId === null) {
		content = (
			<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
		)
	} else if (projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartNewProject} />
	}

	return (
		<main className='h-screen my-8 flex gap-8'>
			<ProjectSidebar
				onStartAddProject={handleStartNewProject}
				projects={projectState.projects}
				onSelectProject={handleSelectProject}
			/>
			{content}
		</main>
	)
}

export default App
