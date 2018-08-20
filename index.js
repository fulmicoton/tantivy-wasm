const tantivy = import("./tantivy_wasm.js");

tantivy.then(tantivy => {
  var searchEl = $("#search");
  var hits = $("#hits");
  searchEl.keypress(function (e) {
    if (e.which == 13) {
        var query = searchEl.val();
        var results = {"hits": JSON.parse(tantivy.query(query))};
        var tpl = "<ul>{{#hits}}<li><h3>{{command}} / {{book}}</li>{{/hits}}</ul>";
        var html = Mustache.to_html(tpl, results);
        hits.html(Mustache.to_html(tpl, results));
        return false;
    }
  });
});
