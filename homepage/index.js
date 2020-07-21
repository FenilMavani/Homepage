function greet() {
    let name = document.querySelector('#name').value;
    if (name === ' ')
    Hello, World
    document.querySelector('#result').innerHTML = `Hello, ${name} thank you so much for coming to this webpage`;
    
}