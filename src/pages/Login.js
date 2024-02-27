import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDocs, collection} from 'firebase/firestore';
import {db} from '../firebase/config'
// styles
import './create.css'

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        pass: ""
    })

    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem("uname")
    }, [])

    const handleFormChange = (e) => {
        const name = e.target.name
        const val = e.target.value

        setFormData(prev => ({
            ...prev,
            [name]: val
        }))
    }

    const handleSubmit = () => {
        getDocs(collection(db, "accounts"))
            .then((sn) => {
                sn.docs.forEach((doc) => {
                    if (doc.data().email === formData.email) {
                        if (doc.data().pass === formData.pass) {
                            localStorage.setItem("uname", doc.data().uname)

                            navigate("/")
                        }
                    }
                });
            })
    }

    return (
        <div className="create">
          <h2 className="page-title">Login</h2>
          <form>
            <label>
              <span>Email</span>
              <input 
                type="text" 
                name="email"
                onChange={handleFormChange}
                value={formData.email}
                required
              />
            </label>
            
            <label>
              <span>Pass</span>
              <input 
                type="text" 
                name="pass"
                onChange={handleFormChange}
                value={formData.pass}
                required
              />
            </label>
          </form>
          <button onClick={handleSubmit} className="btn">login</button>
        </div>
      )
}