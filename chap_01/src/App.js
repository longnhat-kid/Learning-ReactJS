import './App.css';
import Course from './components/Course'

function App() {
	const courses = [
		{
			name: "ReactJS",
			isFree: true,
			desc: "ReactJS is very simple"
		},
		{
			name: "PHP",
			isFree: false,
			desc: "This is PHP"
		},
		{
			name: "Ruby",
			isFree: true,
			desc: "Description"
		},
	]
	var courseJSX = courses.map((course,index) => <Course name={course.name} isFree={course.isFree} key={index}>{course.desc}</Course>)
	return (
		<div className="App">
			<div className="row">
				{courseJSX}
			</div>
		</div>
	);
}

export default App;
