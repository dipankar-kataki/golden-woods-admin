import Button from "./Button";
import { useNavigate } from "react-router-dom";
interface ProjectCardProps {
  id: number;
  image: string;
  name: string;
  status: string;
}

const ProjectCard = ({image, name, status, id}:ProjectCardProps) => {
  const navigate = useNavigate();
  const handleProjecEdit = () => {
    navigate('/project/new_projects',{state:{project_id: id}})
}
  return (
    <article className="w-full md:w-max-[100px] bg-white rounded-xl shadow-md ">
      <img
        src={`http://localhost:8000/${image}`}
        alt="golden woods building image"
        className="h-[300px] object-cover"
      />
      <div className="p-6 flex flex-col gap-6">
        <div className="flex justify-between">
          <p>{status}</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-16 h-9 bg-gray-200 rounded-full peer dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2.6px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
        <h2>{name}</h2>
        <Button onClick={handleProjecEdit}>Edit</Button>
      </div>
    </article>
  );
};

export default ProjectCard;
