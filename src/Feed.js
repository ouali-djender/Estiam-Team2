   import React, { useState } from 'react'
   import './Feed.css';
   import CreateIcon from "@material-ui/icons/Create";
   import ImageIcon from "@material-ui/icons/Image";
   import InputOption from './InputOption';
   import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
   import EventNoteIcon from "@material-ui/icons/EventNote";
   import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
   import Post from './Post';
   
   function Feed(){
   
       const [posts, setPosts] = useState([]);
   
       const sendPost = (e) => {
           e.preventDefault();
       }
   
   
       return(
           <div className="feed" >
               <div className="feed__inputContainer">
                   <div className="feed__input">
                       <CreateIcon />
                       <form>
                           <input type="text"/>
                           <button Onclick={sendPost} type='submit'>Send</button>
                       </form>
                   </div>
                   <div className='feed__inputOptions'>
                   <InputOption Icon={ImageIcon} title='Photo' 
                   color="#70B5F9"/>
                   <InputOption Icon={SubscriptionsIcon} title='Video' 
                   color="#E7A33E"/>
                   <InputOption Icon={EventNoteIcon} title='Event' 
                   color="#C0CBCD"/>
   
                   <InputOption 
                   Icon={CalendarViewDayIcon} 
                   title="Write article" 
                   color="#7FC15E"/>
   
                   </div>
               </div> 
   
               
               { /* Posts */}
               {posts.map((post)=> (
                   <Post />
               ))}
   
               <Post 
               name="Opathon 2022"
               description="Ceci est un test"
               message="Wow ça vraiment fonctionné!"/>
   
           </div>
       );
   }
   
   export default Feed;