const skillData = {
  writing: "Clear, narrative-driven storytelling across news, features, and long-form journalism.",
  interview: "Conducting interviews that extract insight, clarity, and human perspective.",
  investigative: "Deep research and fact-driven reporting to uncover complex stories.",
  editing: "Improving structure, clarity, tone, and accuracy in writing.",
  multimedia: "Using photo, video, and audio tools to enhance storytelling."
};

function showSkill(key){
  const box = document.getElementById("skill-info");

  box.style.display = "block";
  box.innerText = skillData[key];
}

/* Smooth scroll reveal animation */
const sections = document.querySelectorAll("section, header");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
},{threshold:0.15});

sections.forEach(sec=>{
  sec.style.opacity = 0;
  sec.style.transform = "translateY(20px)";
  sec.style.transition = "0.6s ease";
  observer.observe(sec);
});
