document.addEventListener('DOMContentLoaded', () => {
    const actorDetails = {
        1: {
            name: "Cha Eun-woo",
            description: "Cha Eun-woo é um ator e cantor sul-coreano. Ele é membro do grupo de K-pop ASTRO e é conhecido por seus papéis em dramas como 'My ID is Gangnam Beauty' e 'True Beauty'.",
            curiosities: [
                "Ele começou sua carreira como trainee da Fantagio Entertainment.",
                "Cha Eun-woo ganhou popularidade por sua aparência visual e habilidades de atuação.",
                "Ele é conhecido por seu papel como Lee Su-ho em 'True Beauty'."
            ]
        },
        2: {
            name: "Park Seo-jun",
            description: "Park Seo-jun é um ator sul-coreano conhecido por seus papéis em dramas como 'What's Wrong with Secretary Kim', 'Itaewon Class' e 'Fight for My Way'.",
            curiosities: [
                "Ele começou sua carreira como modelo antes de se tornar ator.",
                "Park Seo-jun é conhecido por sua versatilidade e carisma em papéis principais.",
                "Ele ganhou vários prêmios por suas performances."
            ]
        },
        3: {
            name: "Kim Soo-hyun",
            description: "Kim Soo-hyun é um ator sul-coreano conhecido por seus papéis em dramas como 'My Love from the Star', 'Moon Embracing the Sun' e 'It's Okay to Not Be Okay'.",
            curiosities: [
                "Ele é um dos atores mais bem pagos da Coreia do Sul.",
                "Kim Soo-hyun é conhecido por sua habilidade em interpretar uma ampla gama de personagens.",
                "Ele fez seu retorno dramático em 'It's Okay to Not Be Okay' após seu serviço militar."
            ]
        },
        4: {
            name: "Kang Tae-oh",
            description: "Kang Tae-oh é um ator sul-coreano e membro do grupo de K-pop 5urprise. Ele é conhecido por seus papéis em dramas como 'The Tale of Nokdu' e 'My First First Love'.",
            curiosities: [
                "Ele começou sua carreira como idol e estreou como ator em 2013.",
                "Kang Tae-oh é conhecido por sua personalidade enérgica e carismática.",
                "Ele é o irmão mais novo do ator Kim Young-kwang."
            ]
        },
        5: {
            name: "Kim Seok-woo (Rowoon)",
            description: "Kim Seok-woo, conhecido como Rowoon, é um cantor e ator sul-coreano, membro do grupo de K-pop SF9. Ele é conhecido por seus papéis em dramas como 'Extraordinary You' e 'She Would Never Know'.",
            curiosities: [
                "Ele fez sua estreia como ator em 2017 com o drama 'Click Your Heart'.",
                "Rowoon é conhecido por sua altura impressionante e visual atraente.",
                "Ele ganhou reconhecimento por sua atuação em 'Extraordinary You'."
            ]
        }
    };

    const actressDetails = {
        6: {
            name: "Park Min-young",
            description: "Park Min-young é uma atriz sul-coreana conhecida por seus papéis em dramas como 'What's Wrong with Secretary Kim', 'Her Private Life' e 'Healer'.",
            curiosities: [
                "Ela começou sua carreira de atriz em 2006 com o drama 'Unstoppable High Kick'.",
                "Park Min-young é conhecida por sua habilidade em química romântica com seus co-atores.",
                "Ela estudou Teatro e Cinema na Universidade de Dongguk."
            ]
        },
        7: {
            name: "Kim Ji-won",
            description: "Kim Ji-won é uma atriz sul-coreana conhecida por seus papéis em dramas como 'Descendants of the Sun', 'Fight for My Way' e 'Arthdal Chronicles'.",
            curiosities: [
                "Ela começou sua carreira como modelo de comerciais de TV.",
                "Kim Ji-won é conhecida por sua atuação versátil e expressiva.",
                "Ela estudou Drama na Universidade de Dongguk."
            ]
        },
        8: {
            name: "Mun Ka-young",
            description: "Mun Ka-young é uma atriz sul-coreana conhecida por seus papéis em dramas como 'The Great Seducer', 'Find Me in Your Memory' e 'True Beauty'.",
            curiosities: [
                "Ela nasceu na Alemanha e se mudou para a Coreia do Sul quando tinha 10 anos.",
                "Mun Ka-young começou sua carreira como atriz infantil em 2006.",
                "Ela ganhou popularidade por seu papel em 'True Beauty'."
            ]
        },
        9: {
            name: "Kim Se-jeong",
            description: "Kim Se-jeong é uma cantora e atriz sul-coreana, ex-integrante do grupo de K-pop Gugudan. Ela é conhecida por seus papéis em 'School 2017' e 'The Uncanny Counter'.",
            curiosities: [
                "Ela ganhou o segundo lugar no programa de sobrevivência 'Produce 101'.",
                "Kim Se-jeong é conhecida por seu talento em canto e atuação.",
                "Ela também é ativa em musicais."
            ]
        },
        10: {
            name: "Seol In-ah",
            description: "Seol In-ah é uma atriz sul-coreana conhecida por seus papéis em dramas como 'Strong Woman Do Bong-soon', 'School 2017' e 'Mr. Queen'.",
            curiosities: [
                "Ela estudou Drama na Universidade de Artes de Seul.",
                "Seol In-ah ganhou popularidade por seu papel em 'Mr. Queen'.",
                "Ela começou sua carreira como atriz em 2015."
            ]
        }
    };


    const actorImages = document.querySelectorAll('#actors-carousel img');
    const actressImages = document.querySelectorAll('#actresses-carousel img');
    const actorInfo = document.getElementById('actor-info');
    const actressInfo = document.getElementById('actress-info');
    const actorDetailsParagraph = document.getElementById('actor-details');
    const actressDetailsParagraph = document.getElementById('actress-details');
    let selectedImage = null;

    
    actorImages.forEach(image => {
        image.addEventListener('click', (e) => {
            const actorId = e.target.getAttribute('data-actor');
            if (actorDetails[actorId]) {
                const actor = actorDetails[actorId];
                actorInfo.querySelector('h2').innerText = actor.name;
                actorDetailsParagraph.innerHTML = `<p>${actor.description}</p><h3>Curiosidades:</h3><ul>${actor.curiosities.map(curiosity => `<li>${curiosity}</li>`).join('')}</ul>`;
                
                if (selectedImage) {
                    selectedImage.classList.remove('selected');
                }
                selectedImage = e.target;
                selectedImage.classList.add('selected');
            }
        });
    });

   
    actressImages.forEach(image => {
        image.addEventListener('click', (e) => {
            const actressId = e.target.getAttribute('data-actress');
            if (actressDetails[actressId]) {
                const actress = actressDetails[actressId];
                actressInfo.querySelector('h2').innerText = actress.name;
                actressDetailsParagraph.innerHTML = `<p>${actress.description}</p><h3>Curiosidades:</h3><ul>${actress.curiosities.map(curiosity => `<li>${curiosity}</li>`).join('')}</ul>`;
                
                if (selectedImage) {
                    selectedImage.classList.remove('selected');
                }
                selectedImage = e.target;
                selectedImage.classList.add('selected');
            }
        });
    });
});
