document.addEventListener("DOMContentLoaded", function (event) {
  //do ork
  const imgs = document.querySelectorAll(
    'img[src$="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]'
  );

  const svg_images =
    "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27302%27%20height=%27320%27/%3e";
  Array.from(document.querySelectorAll(`img[src$="${svg_images}"]`)).map(
    (item) => item.remove()
  );
  Array.from(imgs).map((img) => {
    var child = document.createElement("div");
    child.innerHTML = img.nextSibling.innerHTML;
    // child = child.firstChild;
    // document.getElementById('test').appendChild(child);
    img.parentNode.insertBefore(child, img.nextSibling);
    // console.log(img.nextSibling.innerHTML)
  });
});
