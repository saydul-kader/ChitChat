import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import img from './chit.png';
import './App.css';
const projectID = 'c051def3-4bf3-401a-9b4a-38297a0db81d';
function App() {
  const handleLogOut= ()=> {
      localStorage.clear();
      window.location.reload();
  }
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div >
       <div class="button-container">
         <img src={img} alt="logo"/>
        <button class="btn" onClick={handleLogOut}><span className="btn-word">Log out</span></button>
       </div>
    <ChatEngine
          height="93vh"
          projectID={projectID}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
          onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
   </div> 
  );
}

export default App;
