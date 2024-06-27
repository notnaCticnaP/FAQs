$(document).ready(function() {
    // Optional: Open the first FAQ item by default
    // $(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown();

    // Event listener for FAQ question clicks
    $(".faq-question").on("click", function() {
        // Check if the clicked FAQ is already active
        if ($(this).parent().hasClass("active")) {
            // Slide up the answer and remove the 'active' class
            $(this).next().slideUp();
            $(this).parent().removeClass("active");
        } else {
            // Slide up all answers and remove 'active' class from all items
            $(".faq-answer").slideUp();
            $(".faq-singular").removeClass("active");

            // Slide down the clicked FAQ's answer and add 'active' class
            $(this).parent().addClass("active");
            $(this).next().slideDown();
        }
    });
});
