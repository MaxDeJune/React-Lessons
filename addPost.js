  //компонент для создания поста из инпута

import "./styles.css";
import {useState} from 'react'; 

export default function App() {
  
  const [post, setPost] = useState([{id: 1, title: 'Название поста', body: 'Сам пост здесь'}]);
  
  //Создаем переменную newPost для изменения состояния новых постов
  const [newPost, setNewPost] = useState({title: '', body: ''});
  
  const addPost =(e) => {
    e.preventDefault(); 
    setPost([...post, {...newPost, id: Date.now()}]); 
    setNewPost({title:'', body:''}); 
  }
  
  return (
    <div className="App">
      <form>
        <input value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})}/> 
        <input value={newPost.body} onChange={e => setNewPost({...newPost, body: e.target.value})}/>
        <button onClick={addPost}>Добавить пост</button>
      </form>
  //index используем для нумерации постов в списке
      {post.map((e, index) => <div key={newPost.id}>{index + 1} | {e.title} | {e.body}</div>)}
    </div>
  );
}
