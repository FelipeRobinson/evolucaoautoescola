/* FUNÇÃO SCROLL */
window.addEventListener("scroll", function () {
    const nav = document.getElementById("navbar");
    if (window.scrollY > window.innerHeight * 0.8) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});


/* MENU HAMBURGUER */
const hamburguer = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburguer.classList.toggle("active");
});

/* ANIMAÇÃO QUEM SOMOS */
const historyTitle = document.querySelector(".history-title");

if (historyTitle) {
    const showHistoryTitle = () => {
        historyTitle.classList.add("show");
    };

    if ("IntersectionObserver" in window) {
        const historyObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    showHistoryTitle();
                    observer.unobserve(entry.target);
                }
            });
        }, 
    {
            threshold: 0.5
        });
        historyObserver.observe(historyTitle);
    } 
    else {
        showHistoryTitle();
    }
}


/* FUNÇÃO CONTATO ALEATÓRIO */
document.addEventListener("DOMContentLoaded", function () {

    const cadastroForm = document.querySelector(".cadastro");

    if (cadastroForm) {
        cadastroForm.addEventListener("submit", function(e) {
            e.preventDefault();
        });
    }

    const numeros = [
        "5519989132598",
        "5519992947773"
    ];

    const botoes = document.querySelectorAll("#botao, #botao-menu, .whatsapp-btn");

    const abrirWhatsAppAleatorio = (mensagem) => {
        const numeroEscolhido = numeros[Math.floor(Math.random() * numeros.length)];
        const url = `https://wa.me/${numeroEscolhido}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");
    };

    botoes.forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();

            let mensagem = "Olá, vim pelo site e gostaria de mais informações sobre adquirir a minha CNH!";

            if (btn.classList.contains("signup-submit")) {
                const email = document.getElementById("cadastro-email")?.value.trim();
                const numero = document.getElementById("cadastro-numero")?.value.trim();

                mensagem = "Olá, vim pelo site e gostaria de fazer meu cadastro.";

                if (email) {
                    mensagem += ` Meu e-mail: ${email}.`;
                }

                if (numero) {
                    mensagem += ` Meu telefone: ${numero}.`;
                }
            }

            abrirWhatsAppAleatorio(mensagem);
        });
    });
});

