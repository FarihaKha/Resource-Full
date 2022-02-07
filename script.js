var submitBtn = $('.submit-btn');
var submittedMsg = $('.submitted-msg');

submitBtn.on('click', sendSumbittedMsg);

function sendSumbittedMsg(event) {
  event.preventDefault();
  var firstNameInput = $('.first-name-input').val();
  var lastNameInput = $('.last-name-input').val();
  var emailAddressInput = $('.email-address-input').val();
  var rateExperienceInput = $('.rate-experience-input').val();
  var questionsCommentsInput = $('.questions-comments-input').val();

  submittedMsg.text(`Thank you, ${firstNameInput} ${lastNameInput}! We appreciate your feedback!`);
}
// button
var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
