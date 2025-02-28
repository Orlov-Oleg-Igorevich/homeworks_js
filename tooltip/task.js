let activeTarget = null;

function createTooltip(title) {
  let tooltip = document.createElement('div');
  tooltip.className = "tooltip";
  tooltip.classList.add('tooltip_active');
  tooltip.style.position = "absolute";
  tooltip.textContent = title;
  return tooltip;
}

document.addEventListener('click', (event) => {
  event.preventDefault();
  let target = event.target;
  target = target.closest('.has-tooltip');
  if (!target) return;
  if (activeTarget == target) {
    document.querySelector('.tooltip').remove();
    activeTarget = null;
    return;
  }
  let tooltip = document.querySelector('.tooltip');
  if (!tooltip) {
    tooltip = createTooltip(target.title);
    document.body.append(tooltip);
  } else {
    tooltip.textContent = target.title;
  }
  activeTarget = target;
  targetCoords = target.getBoundingClientRect();

  switch (target.dataset.position) {
    case 'top': case undefined:
      if (targetCoords.top  - tooltip.offsetHeight > 0) {
        tooltip.style.top = window.scrollY + targetCoords.top - tooltip.offsetHeight + 'px';
        tooltip.style.left = targetCoords.left + 'px'; 
        break;
      }
    case 'bottom':
      if (targetCoords.bottom  + tooltip.offsetHeight < document.documentElement.clientHeight) {
        tooltip.style.top = window.scrollY + targetCoords.bottom + 'px';
        tooltip.style.left = targetCoords.left + 'px'; 
        break;
      }
    case 'left':
      if (targetCoords.left  - tooltip.offsetWidth > 0) {
        tooltip.style.top = window.scrollY + targetCoords.top + 'px';
        tooltip.style.left = targetCoords.left  - tooltip.offsetWidth + 'px'; 
        break;
      }
    case 'right':
      if (targetCoords.left + target.offsetWidth + tooltip.offsetWidth < document.documentElement.clientWidth) {
        tooltip.style.top = window.scrollY + targetCoords.top + 'px';
        tooltip.style.left = targetCoords.left + target.offsetWidth + 'px';
        break;
      }
  
    default:
      break;
  }
})