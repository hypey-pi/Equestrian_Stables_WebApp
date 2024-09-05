function createCommentElement(commentText) {
    const commentElement = document.createElement('div');
    event.preventDefault();
    commentElement.classList.add('comment');
    commentElement.innerHTML = `
      <p>${commentText}</p>
      <button class="delete-btn">Delete</button>
    `;
  
    const deleteButton = commentElement.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function() {
      commentElement.remove(); 
    });
  
    return commentElement;
  }
  
  document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();
  
    if (commentText !== '') {
      const commentsList = document.getElementById('comments-list');
      const newComment = createCommentElement(commentText);
      commentsList.appendChild(newComment);
      commentInput.value = ''; 
      }
  });