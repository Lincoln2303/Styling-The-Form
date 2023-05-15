// II.02. First we're saving all the labels:
const labels = document.querySelectorAll('.form-control label');
// II.12. We're adding inline style to span, and set the delay, with using the index and multiply it with 50ms for each letter:

// II.03. Since it is a no list we can use forEach on them:
labels.forEach(label => {
    // II.04. For each label we're going to take the innerHtml and set it:
    // NOTE: First we want the innerText (which is going to be each letter)
    label.innerHTML = label.innerText // II.05. We  split it into an array: (NOTE: Empty strings, which puts all item in the array )
        .split('') // II.06. Then we're mapping into an array with span around it :
        .map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`) // II.07. Then we use join(): (NOTE: Turning it back to a string  )
        .join('') // AFTER: We're going back to our css, styling span first (II.08.)
})








