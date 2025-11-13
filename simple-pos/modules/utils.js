
export { formatRupiah, getDateStr, getTimeStr, togglePopup, showNotif, hideNotif }

const formatRupiah = angka => angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
const getDateStr = () => new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
const getTimeStr = () => new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
const togglePopup = no => {
  const id = no === "notif" ? "notifModal" : no === "invoice" ? "invoiceModal" : no === "detail" ? "detailModal" : `popupModal${no}`;
  const el = document.getElementById(id);
  if (el) el.classList.toggle("hidden");
};
const showNotif = (message, type = "warning", duration = 3000) => {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.innerText = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");
  toast.classList.add(`toast-${type}`);
  window.clearTimeout(toast._timer);
  toast._timer = window.setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
    toast.classList.remove(`toast-${type}`);
  }, duration);
};
const hideNotif = () => {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.classList.remove("show");
  toast.classList.add("hidden");
};
