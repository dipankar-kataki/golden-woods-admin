import { useEffect} from "react";
import { fetchProjectList } from "../../store/action/projectAction";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import ProjectCard from "../../components/ProjectCard";

const OurProjects = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projectList = useSelector((state:any)=> state.project);
  console.log("projectList", projectList)
  useEffect(()=>{
    dispatch(fetchProjectList())
  },[])
  return (
    <>Our Projects
    
    {projectList?.projects?.data?.data && projectList?.projects?.data?.data.length > 0 && projectList?.projects?.data?.data.map((project:any)=>(
     <ProjectCard image={project.projectImage} name={project.projectName} status={project.status} id={project.id}/>
    ))}
    </>
  )
};

export default OurProjects;
