document.addEventListener('DOMContentLoaded', function() {
    const doramas = [
        {
            title: "O que Há de Errado com a Secretária Kim?",
            description: "Um vice-presidente narcisista e sua secretária perfeita entram em uma jornada de autodescoberta e romance.",
            image: "https://i.pinimg.com/originals/e0/91/5d/e0915d0f26a7ab34ad49c1098ed14e1e.jpg",
            watchLink: "https://www.viki.com/tv/35835c-whats-wrong-with-secretary-kim"
        },
        {
            title: "O Tempo Traz Você pra Mim",
            description: "Dois amigos de infância se reencontram e enfrentam desafios enquanto redescobrem seus sentimentos um pelo outro.",
            image: "https://i0.wp.com/hypando.com.br/wp-content/uploads/2023/08/eY8OLQ_2f.png?resize=696%2C1031&ssl=1",
            watchLink: "https://www.netflix.com/watch/81570037?source=35"
        },
        {
            title: "Desgraça ao seu dispor",
            description: "Um grupo de funcionários de uma funerária lida com situações cômicas e emocionais enquanto trabalham com a morte todos os dias.",
             image: "https://pbs.twimg.com/media/Fz1uXNRWIAAA5Qm.jpg:large",
            watchLink: "https://www.netflix.com/watch/81655038?source=35"
        },
        {
            title: "Rainha de Lágrimas",
            description: "Uma rainha condenada a ser uma 'rainha de lágrimas' encontra um homem que pode ver a dor dela e tenta salvar seu reino.",
             image: "https://uploads.jovemnerd.com.br/wp-content/uploads/2024/02/unnamed_17__192prl.jpg",
            watchLink: "https://www.netflix.com/watch/81707950?source=35"
        },
        {
            title: "Médicos em Colapso",
            description: "Um grupo de médicos e residentes trabalha em um hospital caótico, lidando com casos desafiadores e relacionamentos complicados.",
            image: "https://images.justwatch.com/poster/311479711/s332/temporada-1",
            watchLink: "https://www.netflix.com/watch/81698029?source=35"
        },
        {
            title: "Hometown Cha-Cha-Cha",
            description: "Um dentista urbano e uma empreendedora prática se encontram em uma vila costeira e começam a transformar suas vidas e a comunidade ao redor.",
            image: "https://momentokdrama.com.br/wp-content/uploads/2021/11/v4WmA90kL8MFa9lySXFUjtwfgC2-scaled-e1637871939600.jpg",
            watchLink: "#https://www.netflix.com/watch/81473199?source=35"
        },
        {
            title: "Minha Venus",
            description: "Uma advogada brilhante lida com questões de autoestima e relacionamentos enquanto busca equilibrar sua carreira e vida amorosa.",
            image: "https://images.justwatch.com/poster/305371713/s718/o-mai-bineoseu.jpg",
            watchLink: "https://www.netflix.com/watch/80188354?source=35"
        },
        {
            title: "Beleza Verdadeira",
            description: "Uma designer de moda talentosa e um homem misterioso com um segredo obscuro se encontram em um drama de romance e suspense.",
            image: "https://br.web.img2.acsta.net/pictures/22/05/09/19/18/4364019.jpg",
            watchLink: "https://www.netflix.com/watch/81410834?source=35"
        },
        {
            title: "Pretendente Surpresa",
            description: "Uma jovem se envolve em um triângulo amoroso inesperado quando seu primeiro amor e um novo pretendente entram em sua vida ao mesmo tempo.",
            image: "https://images.justwatch.com/poster/269914854/s592/temporada-1",
            watchLink: "https://www.netflix.com/watch/81509456?source=35"
        },       
        {
            title: "Tudo Bem Não Ser Normal",
            description: "Uma história sobre um grupo de pessoas que vivem em uma casa compartilhada e seus relacionamentos complexos e crescimento pessoal.",
            image: "https://br.web.img3.acsta.net/pictures/20/07/20/21/56/0290110.jpg",
            watchLink: "https://www.netflix.com/watch/81243992?source=35"
        },
        {
            title: "Love Alarm",
            description: "Em um mundo onde um aplicativo avisa quando alguém tem interesse em você em um raio de 10 metros, uma jovem lida com amor e amizade através da tecnologia.",
            image: "https://br.web.img3.acsta.net/pictures/19/08/08/17/33/0750158.jpg",
            watchLink: "https://www.netflix.com/watch/80168069?source=35"
        },
        {
            title: "Sorriso Real",
            description: "Um príncipe arrogante e uma professora do ensino médio se encontram por acaso e trocam de corpos. Uma história de romance e crescimento pessoal.",
            image: "https://pbs.twimg.com/media/F07AKg5acAMMecn.jpg",
            watchLink: "https://www.netflix.com/watch/81671440?source=35"
        },
        {
            title: "A Esposa do Meu Marido",
            description: "Uma mulher descobre que seu marido está casado com outra mulher e as duas formam uma aliança inesperada.",
            image: "https://image.tmdb.org/t/p/original/21UVSO3lmwyiw1iXdMkFmfQ7Qob.jpg",
            watchLink: "https://www.primevideo.com/dp/amzn1.dv.gti.575a83f3-2ef4-4e54-89c7-7a0e15517d33?autoplay=0&ref_=atv_cf_strg_wb"
        },
        {
            title: "Vinte e cinco vinte e um",
            description: "Um grupo de amigos de vinte e poucos anos navega pelas complexidades da vida adulta, amor e amizade enquanto enfrentam suas próprias jornadas.",
            image: "https://br.web.img3.acsta.net/pictures/22/03/24/20/53/1022010.jpg",
            watchLink: "https://www.netflix.com/watch/81517172?source=35"
        },
        {
            title: "Na direção do amor",
            description: "Um diretor de cinema obstinado e uma atriz talentosa se unem para criar uma obra-prima, enfrentando desafios pessoais e profissionais ao longo do caminho.",
            image: "https://i.mydramalist.com/B5OKq_4c.jpg",
            watchLink: "https://www.netflix.com/watch/81325312?source=35"
        },
        {
            title: "Pousando amor",
            description: "Uma atriz popular e um empresário frio se encontram em um acidente de avião e acabam vivendo juntos enquanto fingem ser um casal.",
            image: "https://doramauniverse.com/wp-content/uploads/2023/09/Fotos-Fofas-de-Filhotes-iPhone-Imagem-para-Blog-683x1024.jpg",
            watchLink: "https://www.netflix.com/watch/81159258?source=35"
        }
    ];

    const gridContainer = document.getElementById('dorama-grid');
    const numberOfDoramasToShow = 16;

    // Função para embaralhar o array de doramas
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Embaralhar o array de doramas
    const shuffledDoramas = shuffleArray(doramas);

    // Criar cards para os doramas embaralhados
    for (let i = 0; i < numberOfDoramasToShow && i < shuffledDoramas.length; i++) {
        const dorama = shuffledDoramas[i];

        const doramaCard = document.createElement('div');
        doramaCard.classList.add('dorama-card');

        const doramaImage = document.createElement('img');
        doramaImage.src = dorama.image ? dorama.image : `https://via.placeholder.com/250x350?text=${encodeURIComponent(dorama.title)}`;
        doramaImage.alt = dorama.title;

        const doramaTitle = document.createElement('h2');
        doramaTitle.textContent = dorama.title;

        const doramaDescription = document.createElement('p');
        doramaDescription.textContent = dorama.description;

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');

        const watchButton = document.createElement('a');
        watchButton.href = dorama.watchLink; 
        watchButton.textContent = "Assistir";
        watchButton.setAttribute('target', '_blank'); 

        buttonContainer.appendChild(watchButton);

        doramaCard.appendChild(doramaImage);
        doramaCard.appendChild(doramaTitle);
        doramaCard.appendChild(doramaDescription);
        doramaCard.appendChild(buttonContainer);

        gridContainer.appendChild(doramaCard);
    }
});
