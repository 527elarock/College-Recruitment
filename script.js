
//find HTML with those classes
const exploreButtons = document.querySelectorAll(".explore-btn");
const exploreContent = document.getElementById("explore-content");

//Object for when they click the explore buttons
const exploreInfo = {
  academics: {
    title: "Academics",
    text: "Explore Purdue's academic pathways, including First-Year Engineering and professional engineering programs.",
  },

  research: {
    title: "Research",
    text: "Purdue connects students with research and discovery across disciplines, giving students opportunities to investigate questions and build new ideas.",
  },

  community: {
    title: "Community",
    text: "Student organizations, athletics, campus traditions, and everyday connections create opportunities to become part of the Boilermaker community.",
  },
};

//loops through every button in exploreButtons and adds click event.
//makes sure previous aren't active 
exploreButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    exploreButtons.forEach(function (item) {
      item.classList.remove("active");
    });
    
    button.classList.add("active");
    //removes data-topic 
    let topic = button.dataset.topic;
    
    //changes html inside element stored in exploreContent
    //creates and closes h3 and paragraph
    exploreContent.innerHTML =
      "<h3>" +
      exploreInfo[topic].title +
      "</h3>" +
      "<p>" +
      exploreInfo[topic].text +
      "</p>";
  });
});


const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const nav = document.getElementById("mainNav");

//goes through nav links and adds click event
//if narrower that 992 pixels, go mobile
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (window.innerWidth < 992) {
      //if collapsed, close mobile menu
      const collapse = bootstrap.Collapse.getInstance(nav);

      if (collapse) {
        collapse.hide();
      }
    }
  });
});
