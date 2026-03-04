function show(id) {
  document
    .querySelectorAll(".panel")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".tabs > .tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("panel-" + id).classList.add("active");
  event.target.classList.add("active");
}

function switchActivity(id, btn) {
  ["register", "grade", "period"].forEach(function (name) {
    var el = document.getElementById("act-" + name);
    if (el) el.style.display = "none";
  });
  var target = document.getElementById("act-" + id);
  if (target) target.style.display = "block";

  document.querySelectorAll("#panel-activity .tab-btn").forEach(function (b) {
    b.classList.remove("active");
  });
  btn.classList.add("active");
}
