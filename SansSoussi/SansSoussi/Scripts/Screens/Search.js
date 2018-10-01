/// <reference path="../jquery-1.7.1-vsdoc.js" />

function search() {

    $.ajax({
        url: ResolveUrl("~/home/search"),
        type: "POST",
        data: { searchData: $("#searchBox").val() },
        success: function (searchData) {

            var results = "";
            $.each(searchData, function (index, item) { results += item + "<br/>"; });
            $("#ResultsBlock").html(results);

        },
        error: function (info) {
            alert(info);
        }
    });
}