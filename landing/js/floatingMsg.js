const floatingMsg = document.querySelector('.floating-msg');

const TRANSITION_SPEED = 800;

function setTransition() {
  floatingMsg.style.transition = `transform ${TRANSITION_SPEED}ms ease`;
}

function hideMsg() {
  floatingMsg.style.transform = `translateY(100%)`;
}

function showMsg() {
  floatingMsg.style.transform = '';
}

function onClickOk() {
  hideMsg();
  setTimeout(() => floatingMsg.style.display = 'none', TRANSITION_SPEED);
}

hideMsg();

window.onload = () => {
  setTransition();
  showMsg();
};
