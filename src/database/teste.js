const dataBase = require('./db')
const saveOrphanage = require('./saveOrphanage')
const fakedata = require('./fakedata')

dataBase.then(async db => {

    // inserir dados na tabela

    /*
    await saveOrphanage(db,

        {
        id: 1,
        lat: "-19.9004344", 
        lng: "-44.012903",
        name: "Ministério Programa Criança Feliz",
        about: "Onde toda criança é feliz!",
        whatsapp: "+553134964985",
        images: [
         "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1536825919521-ab78da56193b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527821468487-b724210d296a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "1"
    },
    {
        id: 2,
        lat: "-19.9132623", 
        lng: "-43.9529097",
        name: "Casa de Caridade Herdeiros de Jesus",
        about: "A CCHJ é composta pelo Grupo Espírita Francisca de Paula de Jesus e pelos Lares (unidades 1, 2 e 3) para acolhimento de crianças e jovens.",
        whatsapp: "+553134447222",
        images: [
            "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1563832708562-aaee7c31d8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1573666008508-3825beb91997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1528058730271-6c69eb362b46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1600880291298-8481039492bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "0"
    },
    {
        id: 3,
        lat: "-19.9238435", 
        lng: "-43.9310903",
        name: "Casa da Santíssima",
        about: "Uma ONG que trabalha pelo crescimento pessoal e de aprendizado, com inclusão social, por meio de ações culturais, artísticas e ...",
        whatsapp: "+553132441847",
        images: [
            "https://images.unsplash.com/photo-1584568518279-d781778d1481?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1564051741945-452df4e721bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1603354350266-a8de3496163b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1584789874194-b82d600b16f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1518842023089-50e9ac314ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "1"
    },
    {
        id: 4,
        lat: "-19.9583319", 
        lng: "-44.0522799",
        name: "Casa dos Meninos",
        about: "A Casa dos Meninos tem por finalidade principal promover o atendimento de crianças e adolescentes, sob medida de...",
        whatsapp: "+553133820697",
        images: [
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1536825919521-ab78da56193b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527821468487-b724210d296a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "0"
    },
    {
        id: 5,
        lat: "-19.885882", 
        lng: "-44.0328349",
        name: "Abrigo Lar Cristão de Belo Horizonte",
        about: "Abrigo (Lar Cristão) institucional responsável por 45 crianças de 0 a 6 anos enquanto viabiliza-se o retorno à família de origem ou encaminhamento à família ... http://abrigolarcristao.com.br/",
        whatsapp: "+553134476509",
        images: [
            "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1563832708562-aaee7c31d8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1573666008508-3825beb91997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1528058730271-6c69eb362b46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1600880291298-8481039492bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "1"
    },
    {
        id: 6,
        lat: "-19.9314869", 
        lng: "-43.9866791",
        name: "Abrigo de Crianças e Adolescentes Lar Marista João Batista",
        about: "A missão do Lar Marista é educar e evangelizar crianças e jovens ... O Lar Marista é um abrigo para crianças de 6 a 12 do sexo masculino",
        whatsapp: "+553133832023",
        images: [
            "https://images.unsplash.com/photo-1584568518279-d781778d1481?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1564051741945-452df4e721bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1603354350266-a8de3496163b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1584789874194-b82d600b16f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1518842023089-50e9ac314ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "0"
    },
    {
        id: 7,
        lat: "-19.9138322", 
        lng: "-43.9473171",
        name: "Abrigo Pró Criança",
        about: "Onde toda criança é feliz!",
        whatsapp: "+553134229058",
        images: [
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1536825919521-ab78da56193b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527821468487-b724210d296a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "1"
    },
    {
        id: 8,
        lat: "-19.9531314", 
        lng: "-44.0454403",
        name: "Orfanato Santa Maria",
        about: "Orfanato Santa Maria",
        whatsapp: "+553133828172",
        images: [
            "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1563832708562-aaee7c31d8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1573666008508-3825beb91997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1528058730271-6c69eb362b46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1600880291298-8481039492bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "0"
    },
    {
        id: 9,
        lat: "-19.8927917", 
        lng: "-43.9661579",
        name: "Casa Lucas",
        about: " A Associação Lucas Magalhães Karam – CASA LUCAS – é um espaço de acolhimento de crianças de 0 a 6 anos, em situação de ... contato@casalucas.org / http://www.casalucas.org/  ...",
        whatsapp: "+553134910152",
        images: [
            "https://images.unsplash.com/photo-1584568518279-d781778d1481?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1564051741945-452df4e721bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1603354350266-a8de3496163b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1584789874194-b82d600b16f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1518842023089-50e9ac314ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "1"
    },
    {
        id: 10,
        lat: "-19.9216224", 
        lng: "-43.9797199",
        name: "Associação Irmão Sol",
        about: "Desde 1989, a Associação Irmão Sol acolhe, em suas unidades, crianças e adolescentes que, por negligência ou algum tipo de violência, precisam ser afastadas de suas famílias e lares de origem. Venha conhecer nosso trabalho e seja um voluntário! https://www.irmaosol.org.br/",
        whatsapp: "+553134113103",
        images: [
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1536825919521-ab78da56193b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527821468487-b724210d296a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "0"
    },
    {
        id: 11,
        lat: "-19.9273996", 
        lng: "-43.9451687",
        name: "Centro de Voluntariado de Apoio ao Menor",
        about: "O Centro de Voluntariado de Apoio ao Menor (CEVAM) é uma entidade sem fins lucrativos idealizada e concretizada por um grupo de voluntários, que constataram dificuldades na viabilização e execução de programas às crianças e aos adolescentes acolhidos institucionalmente. Fundada em Belo Horizonte, em 1982, mas oficializada em cartório apenas em 1986, o CEVAM tem como missão a promoção e a defesa do direitos das crianças e dos adolescentes acolhidos. https://cevambrasil.com.br/site/",
        whatsapp: "+553132241022",
        images: [
            "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1563832708562-aaee7c31d8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1573666008508-3825beb91997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1528058730271-6c69eb362b46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1600880291298-8481039492bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 09h as 17hs",
        open_on_weekends: "1"
    },
    {
        id: 12,
        lat: "-19.8948941", 
        lng: "-43.9540484",
        name: "Abrigo São Paulo",
        about: "Destina-se a acolher pessoas em situação de rua, bem como oferecer condições e oficinas para a reinserção na sociedade e no mercado de trabalho. https://ssvpcmbh.org.br/obrasociais/abrigo/abrigo-sao-paulo/",
        whatsapp: "+553134334993",
        images: [
            "https://images.unsplash.com/photo-1584568518279-d781778d1481?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1564051741945-452df4e721bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1603354350266-a8de3496163b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1584789874194-b82d600b16f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1518842023089-50e9ac314ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "0"
    },
    {
        id: 13,
        lat: "-19.8336276", 
        lng: "-44.0052922",
        name: "Projeto Social Lar Batista Regular",
        about: "http://larbatistaregular.blogspot.com/",
        whatsapp: "+553138790905",
        images: [
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1536825919521-ab78da56193b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527821468487-b724210d296a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "1"
    },
    {
        id: 14,
        lat: "-19.9076993", 
        lng: "-43.9093009",
        name: "Casa do Homem de Nazaré",
        about: "A CHN tem por finalidade a assistência social para proteger, amparar, educar e instruir crianças, adolescentes e suas famílias em situação de risco social. Através de atividades complementares a escola, uma casa de socialização infanto-juvenil, onde as crianças recebem formação humana e cidadã, para que possam crescer com dignidade, construindo novas realidades sociais, melhorando a qualidade de vida de seu núcleo familiar. http://chn.org.br/",
        whatsapp: "+553134630315",
        images: [
            "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1563832708562-aaee7c31d8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1573666008508-3825beb91997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1528058730271-6c69eb362b46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1600880291298-8481039492bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 17hs",
        open_on_weekends: "0"
    },
    {
        id: 15,
        lat: "-19.9242656", 
        lng: "-43.9145874",
        name: "Casa de Apoio Aura",
        about: "Cuidar da vida com profissionalismo, dignidade, esperança, respeito e amor.",
        whatsapp: "+553132365900",
        images: [
            "https://images.unsplash.com/photo-1584568518279-d781778d1481?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1564051741945-452df4e721bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1603354350266-a8de3496163b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1584789874194-b82d600b16f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1518842023089-50e9ac314ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "1"
    },
    {
        id: 16,
        lat: "-19.8288068", 
        lng: "-43.9803999",
        name: "Associação Assistencial Caminho da Luz",
        about: "R. Manoel Cesário Franco, 183 - Santa Mônica, Belo Horizonte - MG, 31530-030 - Telefone: (31) 3450-3571",
        whatsapp: "+553134503571",
        images: [
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1536825919521-ab78da56193b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527821468487-b724210d296a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "0"
    },
    {
        id: 17,
        lat: "-19.9383317", 
        lng: "-43.9522807",
        name: "Fundação Sara Albuquerque",
        about: "Prestar assistência social às crianças e adolescentes com câncer e ser agente de promoção de conhecimentos e de melhorias do tratamento oncológico. ... https://www.fundacaosara.org.br/",
        whatsapp: "+553132847690",
        images: [
            "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1563832708562-aaee7c31d8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1573666008508-3825beb91997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1528058730271-6c69eb362b46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1600880291298-8481039492bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 17hs",
        open_on_weekends: "1"
    },
    {
        id: 18,
        lat: "-19.9746516", 
        lng: "-44.0227615",
        name: "Instituição Espírita Abrigo da Luz Bezerra de Menezes",
        about: "A Instituição Espírita Abrigo da Luz Bezerra de Menezes é uma casa sem fins lucrativos Prestando auxílio às pessoas carente através de ajuda material e... https://abrigodaluzbezerramenezes.blogspot.com.br/",
        whatsapp: "+553133846032",
        images: [
            "https://images.unsplash.com/photo-1584568518279-d781778d1481?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1564051741945-452df4e721bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1603354350266-a8de3496163b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1584789874194-b82d600b16f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1518842023089-50e9ac314ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 20hs",
        open_on_weekends: "0"
    },
    {
        id: 19,
        lat: "-19.920091", 
        lng: "-43.9798398",
        name: "TJ Criança Abriga",
        about: "O TJ Criança Abriga acolhe e proporciona condições para o desenvolvimento integral de crianças, de três a seis anos, que passaram por... http://www.tjcriancaabriga.org.br/",
        whatsapp: "+553134615868",
        images: [
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1536825919521-ab78da56193b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527490087278-9c75be0b8052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1527821468487-b724210d296a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "1"
    },
    {
        id: 20,
        lat: "-19.9392489", 
        lng: "-44.1077537",
        name: "Casa de Apoio à Criança Carente de Contagem",
        about: "R. Paineiras, 1448 - Eldorado, Contagem - MG, 32310-400 – 3395-3524 - http://www.casadeapoio.org.br/",
        whatsapp: "+553133953524",
        images: [
            "https://images.unsplash.com/photo-1560541919-eb5c2da6a5a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1563832708562-aaee7c31d8f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1573666008508-3825beb91997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1528058730271-6c69eb362b46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1600880291298-8481039492bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        ],
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas: Das 08h as 18hs",
        open_on_weekends: "0"
    }
    
    )
   */
    

    // consultar TODOS os dados da tabela
    //const selecionaTodos = await db.all("SELECT * FROM orphanages")
    //console.log(selecionaTodos)

    // consultar ALGUM dados da tabela
    //const selecionaAlgum = await db.all("SELECT * FROM orphanages WHERE id='4'")
    //console.log(selecionaAlgum)

    // deletar ALGUM dados da tabela
    //await db.run("DELETE FROM orphanages")

    // deletar a tabela
    //await db.run("DROP TABLE orphanages")

    // deletar o banco de dados
    //await db.run("DROP DATABASE orphanages")

})