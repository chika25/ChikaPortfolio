// toggle main items
const about = document.getElementById('about');
const aboutBtn = document.getElementById('aboutBtn');
const aboutContent = document.getElementById('aboutContent');

const works = document.getElementById('works');
const worksBtn = document.getElementById('worksBtn');
const worksContent = document.getElementById('worksContent');

const skills = document.getElementById('skills');
const skillsBtn = document.getElementById('skillsBtn');
const skillsContent = document.getElementById('skillsContent');

const resume = document.getElementById('resume');
const resumeBtn = document.getElementById('resumeBtn');
const resumeContent = document.getElementById('resumeContent');

const contact = document.getElementById('contact');
const contactBtn = document.getElementById('contactBtn');
const contactContent = document.getElementById('contactContent');

aboutBtn.addEventListener('click', () => {
    aboutContent.classList.toggle('show');
    about.classList.toggle('active'); 

   if (aboutContent.classList.contains('show')) {
    // wait one frame so layout updates, then scroll
    requestAnimationFrame(() => {
      aboutContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});

worksBtn.addEventListener('click', () => {
    worksContent.classList.toggle('show');
    works.classList.toggle('active'); 

    if (worksContent.classList.contains('show')) {
        worksContent.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

skillsBtn.addEventListener('click', () => {
    skillsContent.classList.toggle('show');
    skills.classList.toggle('active'); 

    if (skillsContent.classList.contains('show')) {
        skillsContent.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

resumeBtn.addEventListener('click', () => {
    resumeContent.classList.toggle('show');
    resume.classList.toggle('active'); 

    if (resumeContent.classList.contains('show')) {
        resumeContent.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    
});

contactBtn.addEventListener('click', () => {
    contactContent.classList.toggle('show');
    contact.classList.toggle('active'); 

   if (contactContent.classList.contains('show')) {
    // wait one frame so layout updates, then scroll
    requestAnimationFrame(() => {
      contactContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
});

