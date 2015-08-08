$(function () {

  $(document).on("click", function () {
    $(".popup").remove();
  });


  $("#pins a").on("click", function (e) {
    if ($(this).parent().find(".popup").length !== 0) {
      $(".popup").remove();
    } else {
      $(".popup").remove();

      var link = $(this).attr("href");
      var subject = $(this).data("subject");
      var title = $(this).data("title");
      var subtitle = $(this).data("subtitle");

      var popup = $("<div class='popup'>");
      var point = $("<div class='point'>");
      popup.append(point);
      var content = $("<div class='content'>");
      content.append($("<div class='subject'>").text(subject));
      content.append($("<div class='title'>").text(title));
      content.append($("<div class='subtitle'>").text(subtitle));
      var anchor = $("<a class='r' href='" + link + "'>Read</a>");
      content.append(anchor);
      popup.append(content);

      popup.on("click", function (e) {
        if (e.target !== anchor[0]) {
          return false;
        }
      });

      $(this).parent().append(popup);
    }

    return false;
  });
});
