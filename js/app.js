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
      var subject = $("<a href='" + link + "'>").text($(this).data("subject"));
      var title = $("<a href='" + link + "'>").text($(this).data("title"));
      var subtitle = $("<a href='" + link + "'>").text($(this).data("subtitle"));

      var popup = $("<div class='popup'>");
      var point = $("<div class='point'>");
      popup.append(point);
      var content = $("<div class='content'>");
      content.append($("<div class='subject'>").html(subject));
      content.append($("<div class='title'>").html(title));
      content.append($("<div class='subtitle'>").html(subtitle));
      var anchor = $("<a class='r' href='" + link + "'>Read</a>");
      content.append(anchor);
      popup.append(content);

      popup.on("click", function (e) {
        if (e.target !== anchor[0] && e.target !== subject[0] && e.target !== title[0] && e.target !== subtitle[0]) {
          return false;
        }
      });

      $(this).parent().append(popup);
    }

    return false;
  });
});
