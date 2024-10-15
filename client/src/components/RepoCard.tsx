import { Repo } from "../types/RepoType";
import { Lang } from "../types/LangType";
import { Link } from "react-router-dom";
import './RepoCard.css';

function RepoCard({ name, url, id, languages, isFavorite }: Repo) {
    return (
      <div className="card">
        <h2>{name}</h2>
        <a href={url}>Voir le repo</a>
        <ul>
          {languages.map((lang: Lang) => (
            <li key={lang.label}>{lang.label}</li>
          ))}
        </ul>
        <br/>
        <Link to={`/detail/${id}`}>Détails</Link>
      </div>
    );
}
  
export default RepoCard;