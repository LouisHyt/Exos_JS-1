const carre = document.querySelector(".carre");

carre.addEventListener("click", e => {
    let elem = e.target;

    let classe = elem.classList.value;
    let width = elem.offsetWidth;
    let height = elem.offsetHeight;
    
    const styles = getComputedStyle(elem)
    let backgroundColor = styles.backgroundColor;
    let fontSize = styles.fontSize;
    let fontFamily = styles.fontFamily;
    let display = styles.display;
    let color = styles.color;
    alert(`Class: ${classe}
    - Background Color: ${backgroundColor}
    - Color: ${color}
    - Height: ${height}
    - Width: ${width}
    - Display: ${display}
    - Font :  ${fontFamily} ${fontSize}
    `)
})