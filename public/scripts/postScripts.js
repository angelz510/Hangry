const postsContainer = document.querySelector('.userposts');
document.getElementById('button').addEventListener('click', createPost)
postsContainer.addEventListener('click', handleClick)
const updateForm = document.querySelector('.userEditPost')
updateForm.addEventListener('click', updateHandleClick)


window.onload = (event) => {
  showAllPosts();
};
//index
function showAllPosts(){
  fetch('/api/v1/posts')
    .then (response => response.json())
    .then (res => render(res))
    .catch (err => console.log(err))

    function render(postsArr){
      
      const postsTemplate = postsArr.map((posts) => {
        return getPostsTemplate(posts);
      }).join('');
      
      postsContainer.insertAdjacentHTML('beforeend', postsTemplate);
    }

    function getPostsTemplate(posts){
      return `
      <div class="post" data-id="${posts._id}">
          <p> ${posts.rating} </p>
          <p> ${posts.comment} </p>
          <button class="edit" id="${posts._id}">edit</button>
          <button class="delete">delete</button>          
      </div>
      `
    }
}


//Add post
function createPost(e){
  e.preventDefault();
  const rating = document.querySelector('#rating').value;
  const comment = document.querySelector('#comment').value;
  const newPost = {rating, comment};

  fetch ('/api/v1/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
  .then (stream => stream.json())
  .catch((err) => console.log(err))

 window.location.reload()
}

////////////////////////HANDLE POSTS/////////////////////////

function handleClick(e){
  
  if (event.target.classList.contains('delete')){
    deletePost(e)
  } else if(event.target.classList.contains('edit')){
    renderUpdateForm(e)
  }
}

//DELETE POSTS

function deletePost(e){
  const postId = e.target.parentNode.dataset.id

  fetch('api/v1/posts/' + postId,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  })
    .then (stream => stream.json())
    .catch((err) => console.log(err))
    location.reload();
}

// UPDATE POSTS
function renderUpdateForm(e){
  e.preventDefault()
  const updateForm = document.querySelector('.userEditPost')
  updateForm.insertAdjacentHTML('beforeend', 
  `
  <h2>edit post here</h2>
  <form id="postPlaceholder emptyForm" class="postContainer">
  Rating<br>
  <input id="updateRating" value="${e.target.parentNode.childNodes[1].innerText}"><br>
  Comment<br>
  <input id="updateComment" value="${e.target.parentNode.childNodes[3].innerText}"> <br>
  </form>
  <button id="editButton">update</button>
  `
  );
}



// update button HandleClick
function updateHandleClick(e){
  if (event.target.textContent === 'update'){
    editPost(e)
 }
}

function editPost(e){

  const postId = (document.querySelector("#posts > div.userposts > div:nth-child(5) > button.edit ")).id
  const placeholderText = document.getElementById('postPlaceholder')
  const updateRating = document.querySelector('#updateRating').value;
  const updateComment = document.querySelector('#updateComment').value;
  const updatePost = {rating: updateRating, comment: updateComment};

  fetch('api/v1/posts/' + postId,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatePost)
  })
    .then (stream => stream.json())
    .catch((err) => console.log(err))
    location.reload();
}


