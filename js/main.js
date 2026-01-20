/* License ID: DEVOMATE-SRC-20260120-WDUXQAF9EG | ashyben10@gmail.com | 2026-01-20 01:03:41 */
function changeImage(el) {
  const mainImage = document.getElementById("mainProductImage");
  if (!mainImage) return;

  mainImage.src = el.src;

  // active border
  document.querySelectorAll(".thumbnail, img[onclick='changeImage(this)']")
    .forEach(img => img.classList.remove("border-primary"));

  el.classList.add("border-primary");
}



let qty = 1;

function increaseQty() {
    qty++;
    document.getElementById("qty").innerText = qty;
}

function decreaseQty() {
    if (qty > 1) {
        qty--;
        document.getElementById("qty").innerText = qty;
    }
}

