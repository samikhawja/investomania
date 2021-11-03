// const newFormHandler = async (event) => {
//   event.preventDefault();

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/posts/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert('Failed to delete post');
//     }
//   }
// };

// document
//   .querySelector('#delete-project')
//   .addEventListener('click', delButtonHandler);
// }

let projectTitle;
let projectDesc;
let projectImg;
let saveBtn;
// let deleteBtn;

if(window.location.pathname === '/dashboard') {
  projectTitle = document.querySelector('#project-title');
  projectDesc = document.querySelector('#project-desc');
  projectImg = document.querySelector('#project-img');
  saveBtn = document.querySelector('#save-project');
  // deleteBtn = document.querySelector('.delete-project');
  // console.log(deleteBtn)
}

const saveProject = (event) => {
  event.preventDefault();
  let projects = {
    title: projectTitle.value.trim(),
    description: projectDesc.value.trim(),
    image: projectImg.value.trim(),
  }
  fetch('/api/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(projects)
  })
};

// const deleteProject = (event) => {
//   event.preventDefault();
//   console.log(event)
//   fetch(`/api/projects/${id}`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json'},
//   })
// };

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.delete-project')
  .addEventListener('click', delButtonHandler);


if(window.location.pathname === '/dashboard') 
{
  saveBtn.addEventListener('click', saveProject);
  // deleteBtn.addEventListener('click', deleteProject);
}