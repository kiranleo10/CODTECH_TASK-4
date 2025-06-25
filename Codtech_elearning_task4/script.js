const urlParams = new URLSearchParams(window.location.search);
const course = urlParams.get('course');

// Course data with YouTube video IDs
const courseData = {
  html: {
    title: "HTML Basics",
    video: "UB1O30fR-EE"
  },
  css: {
    title: "CSS Styling",
    video: "yfoY53QXEnI"
  },
  js: {
    title: "JavaScript Essentials",
    video: "PkZNo7MFNFg"
  }
};

// Update content if course exists
if (courseData[course]) {
  document.getElementById("course-title").textContent = courseData[course].title;
  document.getElementById("video-container").innerHTML = `
    <iframe width="560" height="315"
            src="https://www.youtube.com/embed/${courseData[course].video}"
            frameborder="0"
            allowfullscreen></iframe>`;
} else {
  document.getElementById("course-title").textContent = "Course Not Found";
}


