import {useState} from 'react'
function LikeButton() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

   function handleLike() {
     if (liked) { setLikes(likes - 1);
         setLiked(false); } 
         else { setLikes(likes + 1);
             setLiked(true);
             }
             }
              return (
                 <div>
                  <button onClick={handleLike}>
             {liked ? "Unlike" : "Like"}
              </button>
               <p>{likes} likes</p> 
               </div>
            );
         } 
    export default LikeButton;