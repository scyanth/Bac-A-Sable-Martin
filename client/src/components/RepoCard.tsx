import { Repo } from "../types/RepoType";
import { Link } from "react-router-dom";
import './RepoCard.css';

function RepoCard({ name, url, id, languages }: Repo) {
    return (
      <div className="card">
        <h2>{name}</h2>
        <a href={url}>Voir le repo</a>
        <br/>
        <Link to={`/detail/${id}`}>Détails</Link>
      </div>
    );
}
  
export default RepoCard;