// draggable initial
interact('.draggable').draggable({
  onmove: dragMoveListener,
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent',
      endOnly: true,
    }),
  ],
});

// drag move listener
function dragMoveListener(event) {
  const { target } = event;
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

  // change component style
  const transform = (target.style.webkitTransform = target.style.transform = `translate(${x}px,${y}px)`);

  // set data-x and data-y
  const dataX = target.setAttribute('data-x', x);
  const dataY = target.setAttribute('data-y', y);

  // let getdataX = dataX.getAttribute('data-x', x);
  // console.log(transform);
}

// dropzone initial
interact('.dropzone').dropzone({
  // only allow element with classname draggable
  accept: '.draggable',
  // minimum 75% element overlap for a drop
  overlap: 0.75,
  // on drop listener
  ondrop: function (event) {
    const target = event.relatedTarget;
    // target.textContent = 'Dropped';
    target.style.backgroundColor = 'red';
  },
  // on drag lave
  ondragleave: function (event) {
    const target = event.relatedTarget;
    // target.textContent = 'drag me';
    target.style.backgroundColor = 'rgb(124, 124, 124)';
  },
});
