const revealItems = document.querySelectorAll('.reveal-on-scroll');
const giftSubmit = document.querySelector('[data-gift-submit]');
const giftForm = document.querySelector('[data-gift-form]');
const giftResult = document.querySelector('[data-gift-result]');
const giftInput = document.querySelector('#skin-input');
const giftResultText = document.querySelector('[data-gift-result-text]');

const updateRevealState = () => {
  const viewportHeight = window.innerHeight;

  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const ratio = Number(item.dataset.revealOffset || '0.82');
    const triggerLine = viewportHeight * ratio;
    const isVisible = rect.top <= triggerLine && rect.bottom >= viewportHeight * 0.08;

    item.classList.toggle('is-visible', isVisible);
  });
};

updateRevealState();
window.addEventListener('scroll', updateRevealState, { passive: true });
window.addEventListener('resize', updateRevealState);

if (giftSubmit && giftForm && giftResult && giftInput && giftResultText) {
  giftSubmit.addEventListener('click', () => {
    const value = giftInput.value.trim();

    if (!value) {
      giftInput.focus();
      return;
    }

    giftResultText.textContent = value;
    giftForm.hidden = true;
    giftResult.hidden = false;
  });
}