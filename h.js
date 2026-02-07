const heart = document.querySelector('.heart');

document.addEventListener('click', (e) => {
  if (heart.classList.contains('burst')) return;

  heart.classList.add('burst');

  const rect = heart.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < 25; i++) {
    const fragment = document.createElement('div');
    fragment.classList.add('fragment');

    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 300;

    fragment.style.left = centerX + 'px';
    fragment.style.top = centerY + 'px';
    fragment.style.setProperty('--x', x + 'px');
    fragment.style.setProperty('--y', y + 'px');

    document.body.appendChild(fragment);

    setTimeout(() => fragment.remove(), 800);
  }
});
