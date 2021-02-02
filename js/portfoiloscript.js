const projects = [
     { 
       number: 1,
       Name: 'Accordion',
       imgLink: 'accordion.png',
     },
     {
         number: 2,
         Name:'Animated_nav',
         imgLink:'animated_nav.png',
     },
     {
         number: 3,
         Name: 'Auto_slide',
         imgLink: 'auto_slide.png',
     },
     {
         number : 4 ,
         Name : 'Fillter',
         imgLink : 'fillter.png',
     },
     {
         number : 5,
         Name : 'Fillter_gallery',
         imgLink:'fillter_gallery.png',
     },
     {
         number: 6,
         Name : 'Form',
         imgLink: 'form.png',
     },
     {
         number : 7 ,
         Name : 'Magnificent_glass',
         imgLink:'magnificent_glass.png',
     },
     {
         number: 8,
         Name:'Netflix_mobile',
         imgLink : 'netflix_mobile.png',
     },
     {
         number: 9,
         Name : 'Quiz_app',
         img_name: 'Quiz_app.png',
     },{
         number: 10 ,
         Name : 'Rotating_nav',
         imgLink: 'rotating_nav.png',
     },
     {
         number: 11,
         Name: 'Slide',
         imgLink: 'slide.png',
     },
     {
         number: 12,
         Name: 'Slide_gallery.png',
         imgLink: 'slide_gallery.png',
     },
     {
         number: 13,
         Name: 'Tab',
         imgLink: 'tab.png',
     },
     {
         number: 14,
         Name: 'Todo_list',
         imgLink:'todo_list.png',
     },
     {
         number: 15,
         Name: 'Zoom',
         imgLink: 'zoom.png',
     }
]

const gridElement = document.getElementById("projectEl")

      projects.forEach(project => {
         newElement = document.createElement("div")
           
         newElement.innerHTML= `
                          <span class="project_nmuber">${project.number}</span>
                          <img src="img/${project.imgLink} alt="${project.Name}">
                          <h4> ${project.Name} </h4>
                          <div class="content">  <a 
                          href="/GitHub/Decrown-Tech/${project.Name}"
                          target="_blank"
                          class="btn btn-primary">Live Demo </a>   
                          </div>`

          gridElement.appendChild(newElement)
      });