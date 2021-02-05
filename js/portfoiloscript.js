const projects = [
     { 
       number: 1,
       Name: 'accordion',
       imgLink: 'accordion.png',
     },
     {
         number: 2,
         Name:'animated_navbar',
         imgLink:'animated_nav.png',
     },
     {
         number: 3,
         Name: 'auto_slide',
         imgLink: 'auto_slide.png',
     },
     {
         number : 4 ,
         Name : 'filter',
         imgLink : 'fillter.png',
     },
     {
         number : 5,
         Name : 'filter_gallery',
         imgLink:'fillter_gallery.png',
     },
     {
         number: 6,
         Name : 'login',
         imgLink: 'form.png',
     },
     {
         number : 7 ,
         Name : 'magnificent_glass',
         imgLink:'magnificent_glass.png',
     },
     {
         number: 8,
         Name:'NetflixCopy',
         imgLink : 'netflix_mobile.png',
     },
     {
         number: 9,
         Name : 'QuizApp',
         img_name: 'Quizpp.png',
     },{
         number: 10 ,
         Name : 'rotating_nav',
         imgLink: 'rotating_nav.png',
     },
     {
         number: 11,
         Name: 'slide',
         imgLink: 'slide.png',
     },
     {
         number: 12,
         Name: 'grallery',
         imgLink: 'slide_gallery.png',
     },
     {
         number: 13,
         Name: 'tab',
         imgLink: 'tab.png',
     },
     {
         number: 14,
         Name: 'todo-list',
         imgLink:'todo_list.png',
     },
     {
         number: 15,
         Name: 'zoom',
         imgLink: 'zoom.png',
     }
]

const gridElement = document.getElementById("projectEl")

      projects.forEach(project => {
         newElement = document.createElement("div")
           
         newElement.innerHTML = `
                          <span class="project_nmuber">${project.number}</span>
                          <img src="img/${project.imgLink}" alt="${project.Name}">
                          <div class="content">
                          <h4> ${project.Name} </h4>
                          <a
                          href="/Decrown-Tech/${project.Name}.html"
                          target="_blank"
                          class="btn btn-primary"
                          >Live Demo</a
                           >
                          </div>
                          `;

          gridElement.appendChild(newElement)
      });