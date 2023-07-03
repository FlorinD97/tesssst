$(document).ready(function () {
  // Gets the video src from the data-src on each button //

  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it //
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video.
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  // stop playing the youtube video when I close the modal //
  $("#myModal").on("hide.bs.modal", function (e) {
    //
    $("#video").attr("src", $videoSrc);
  });
});
//

// Action when the form submits //
$(document).ready(function () {
  $("form").submit((event) => {
    event.preventDefault();
    // get the data from the form //

    let HP_Security = $("#HP-Security").val();
    let HP_Lifecycle = $("#HP-Lifecycle").val();
    let HP_Manage = $("#HP-Manage").val();
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let emailAddress = $("#emailAddress").val();
    let phoneNumber = $("#phoneNumber").val();
    let company = $("#company").val();
    let JobTitle = $("#JobTitle").val();
    let floatingTextarea2 = $("#floatingTextarea2").val();
    let terms = $("#terms").val();
    let email_radio = $("#email-radio").val();
    let tel_radio = $("#tel-radio").val();
    let post_radio = $("#post-radio").val();

    // send request to the server with the data packed //
    $.post(
      "process.php",
      {
        HP_Lifecycle: HP_Lifecycle,
        HP_Security: HP_Security,
        HP_Manage: HP_Manage,
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        company: company,
        JobTitle: JobTitle,
        floatingTextarea2: floatingTextarea2,
        terms: terms,
        email_radio: email_radio,
        tel_radio: tel_radio,
        post_radio: post_radio,
      },
      (data) => {
        console.log(data);
        $("#result").html(data);
      }
    );
  });
});
// if the post is sucessfull you should see it in console log//
