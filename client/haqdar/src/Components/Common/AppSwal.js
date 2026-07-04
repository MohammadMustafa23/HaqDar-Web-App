import Swal from "sweetalert2";

const AppSwal = Swal.mixin({
  buttonsStyling: false,
  reverseButtons: true,
  allowOutsideClick: false,
  allowEscapeKey: true,

  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },

  customClass: {
    popup: "hd-swal-popup",
    title: "hd-swal-title",
    htmlContainer: "hd-swal-text",
    confirmButton: "hd-swal-confirm",
    cancelButton: "hd-swal-cancel",
    actions: "hd-swal-actions",
  },
});

export default AppSwal;
