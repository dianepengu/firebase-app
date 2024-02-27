import { Link } from 'react-router-dom'
import { getDocs, collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase/config'
import { useEffect, useState } from 'react';
import DeleteIcon from '../assets/delete.svg'

// styles
import './Home.css'

export default function Home() {

  const [uname, setUname] = useState("");
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("uname");

    if (user) {
      setUname(user);
    } else {
      setUname("Guest");
    }

    const ref = collection(db, 'articles');
    getDocs(ref)
      .then((snapshot) => {
        let results = []
        console.log(snapshot)
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setArticles(results);
      })
  }, [])


  const handleDelete = async (id) => {
    const ref = doc(db, 'articles', id)
    await deleteDoc(ref);
  }

  return (
    <div className="home">
      <h1>Welcome, {uname}</h1>
      <h2>Articles</h2>
      {articles && articles.map(article => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>Written by {article.author}</p>
          <Link to={`/articles/${article.id}`}>
            <button>Read More...</button>
          </Link>
          <br></br>
          <Link to={`/articles/edit/${article.id}`}>
            <button>Update</button>
          </Link>
          <img
            className="icon"
            onClick={() => handleDelete(article.id)}
            src={DeleteIcon} alt="delete icon"
          />
        </div>
      ))}
    </div>
  )
}
