
//find HTML with those classes
const exploreButtons = document.querySelectorAll(".explore-btn");
const exploreContent = document.getElementById("explore-content");

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

exploreButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    exploreButtons.forEach(function (item) {
      item.classList.remove("active");
    });

    button.classList.add("active");

    let topic = button.dataset.topic;

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

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (window.innerWidth < 992) {
      const collapse = bootstrap.Collapse.getInstance(nav);

      if (collapse) {
        collapse.hide();
      }
    }
  });
});
