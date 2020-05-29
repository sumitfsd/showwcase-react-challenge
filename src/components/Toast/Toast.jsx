import Swal from 'sweetalert2';
import './index.css';

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3000,
});

export default Toast;
