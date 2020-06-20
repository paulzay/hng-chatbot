function getResponse() {
  let userText = $("#textInput").val();
  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";
  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document
    .getElementById("userInput")
    .scrollIntoView({ block: "start", behavior: "smooth" });
  $.get("/get", { msg: userText }).done(function (data) {
    var botHtml = '<p class="botText"><span>' + data + "</span></p>";
    $("#chatbox").append(botHtml);
    document
      .getElementById("userInput")
      .scrollIntoView({ block: "start", behavior: "smooth" });
  });
}
$("#textInput").keypress(function (e) {
  //if enter key is pressed
  if (e.which == 13) {
    getResponse();
  }
});
$("#buttonInput").click(function () {
  getResponse();
});
