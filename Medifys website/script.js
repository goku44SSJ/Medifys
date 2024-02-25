document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
      const secondSection = document.querySelector(".second");
      const thirdSection = document.querySelector(".third");
      const geminiLogo = document.querySelector(".gemini_logo");
      const thirdTitle = document.querySelector(".third_title");
      const thirdPara = document.querySelector(".third_para");
      const fourthSection = document.querySelector(".fourth");
      const laptop = document.querySelector(".laptop");
      const textPara = document.querySelector(".text_para");
  
      const sectionPositionSecond = secondSection.getBoundingClientRect();
      const sectionPositionThird = thirdSection.getBoundingClientRect();
      const geminiPosition = geminiLogo.getBoundingClientRect();
      const titlePosition = thirdTitle.getBoundingClientRect();
      const paraPosition = thirdPara.getBoundingClientRect();
      const sectionPosition = fourthSection.getBoundingClientRect();
      const laptopPosition = laptop.getBoundingClientRect();
      const textParaPosition = textPara.getBoundingClientRect();
  
  
      const screenPosition = window.innerHeight;
  
      if (sectionPositionSecond.top < screenPosition && sectionPositionSecond.bottom >= 0) {
        secondSection.classList.add("fade-in");
        const listItems = document.querySelectorAll(".second ul li");
        listItems.forEach((item, index) => {
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
          }, index * 300);
        });
      }
  
      if (sectionPositionThird.top < screenPosition && sectionPositionThird.bottom >= 0) {
        thirdSection.classList.add("fade-in"); 
      }

      if (geminiPosition.top < screenPosition && geminiPosition.bottom >= 0) {
        geminiLogo.classList.add("fade-in");
      }
  
      if (titlePosition.top < screenPosition && titlePosition.bottom >= 0) {
        thirdTitle.classList.add("fade-in");
      }
  
      if (paraPosition.top < screenPosition && paraPosition.bottom >= 0) {
        thirdPara.classList.add("fade-in");
      }

      if (sectionPosition.top < screenPosition && sectionPosition.bottom >= 0) {
        fourthSection.classList.add("fade-in");
      }
  
      if (laptopPosition.top < screenPosition && laptopPosition.bottom >= 0) {
        laptop.classList.add("fade-in");
      }
  
      if (textParaPosition.top < screenPosition && textParaPosition.bottom >= 0) {
        textPara.classList.add("fade-in");
      }
    });
  });
  