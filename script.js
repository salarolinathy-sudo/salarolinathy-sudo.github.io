// Função para scroll suave até os cursos
function scrollCursos() {
    document.querySelector('#cursos').scrollIntoView({
        behavior: 'smooth'
    });
}

// Efeito simples de mudar o cabeçalho ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#000';
        header.style.padding = '0.5rem 5%';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.padding = '1rem 5%';
    }
});

// Mensagem de boas-vindas no console (Easter Egg)
console.log("Level Up Academy carregada! Boa sorte no seu projeto escolar!");