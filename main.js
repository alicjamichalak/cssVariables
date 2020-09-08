let isDark = false;

let button = document.querySelector('.homework__button');

button.addEventListener('click', () => {
    if(isDark){
        document.documentElement.style.setProperty('--background-color','#fefefe');
        document.documentElement.style.setProperty('--text-color','#333333');
        isDark = false;
    } else {
        document.documentElement.style.setProperty('--background-color','#333333');
        document.documentElement.style.setProperty('--text-color','#fefefe');
        isDark = true;
    }
});

fetch("https://api.github.com/users/alicjamichalak/repos")
  .then(resp => resp.json())
  .then(resp => {
    for(let repo of resp){
     const {name, html_url} = repo;
      const repositoryList = document.querySelector('.list--js');
      const myTemplate = `<li>
        ${name} <a href="${html_url}" title= "link do repozytorium na githubie">link do githuba </a>
      </li>`;
      repositoryList.innerHTML += myTemplate;
    }
  })
  .catch(error => {
    console.log('nie udało się pobrać');
  })