import { useState, useRef, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {updateDoc, getDoc, doc} from 'firebase/firestore';
import {db} from '../firebase/config'
// styles
import './create.css'

export default function EditArticle() {  
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')

  const { urlId } = useParams();
  
  const navigate = useNavigate()
  
  useEffect(() => {
    getDoc(doc(db, "articles", urlId))
      .then((sn) => {
        setTitle(sn.data().title)
        setAuthor(sn.data().author)
        setDescription(sn.data().description)
      });
  }, []);

  const handleSubmit = async (e) => {
    const updateRef = await updateDoc(doc(db, "articles", urlId), {
      title: title,
      author: author,
      description: description
    });

    navigate('/')
  }

  return (
    <div className="create">
      <h2 className="page-title">Edit an Article</h2>
      <form>
        <label>
          <span>Title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        
        <label>
          <span>Author:</span>
          <input 
            type="text" 
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            required
          />
        </label>

        <label>
          <span>Description:</span>
          <textarea 
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>
      </form>
      <button onClick={handleSubmit} className="btn">update</button>
    </div>
  )
}