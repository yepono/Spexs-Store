export const CATEGORIAS = [
  'Acción',
  'Aventura',
  'RPG',
  'Shooter',
  'Deportes',
  'Multijugador',
  'Plataformas',
  'Terror',
  'Estrategia',
  'Carreras',
  'Sandbox'
];

export const JUEGOS = [
  {
    id: '1',
    nombre: 'The Legend of Zelda: Tears of the Kingdom',
    precio: '$1,299 MXN',
    categoria: 'Aventura',
    descripcion_corta: 'Una épica aventura a través de la tierra y los cielos de Hyrule.',
    descripcion_larga: 'En esta secuela del aclamado Breath of the Wild, los jugadores explorarán los vastos cielos y las misteriosas profundidades de Hyrule, utilizando nuevas habilidades para resolver acertijos y derrotar a las fuerzas oscuras.',
    
    imagen_juego: 'https://media.es.wired.com/photos/645d4a69a566376ee967bb98/16:9/w_2560%2Cc_limit/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg',

    imagenes: {
      hero: 'https://media.es.wired.com/photos/645d4a69a566376ee967bb98/16:9/w_2560%2Cc_limit/Zelda-Tears-Of-The-Kingdom-Culture-TotK_3rd_54.jpg',
      poster: 'https://m.media-amazon.com/images/I/61m+z+XRvZL._AC_UF894,1000_QL80_.jpg',
      logo: 'https://i.pinimg.com/736x/d6/a8/23/d6a823380920b4cc838e52682d80ba72.jpg'
    },

    clasificacion_edad: 'E10+',
    requerimientos_minimos: 'Nintendo Switch',
    etiquetas: ['Mundo abierto', 'Fantasía', 'Exploración'],
    fecha_lanzamiento: '12 de mayo de 2023',
    compania: 'Nintendo',
    descuento: null
  },
  {
    id: '2',
    nombre: 'God of War Ragnarök',
    precio: '$1,399 MXN',
    categoria: 'Acción',
    descripcion_corta: 'Kratos y Atreus deben viajar a cada uno de los nueve reinos en busca de respuestas.',
    descripcion_larga: 'El Fimbulvetr está en marcha. Kratos y Atreus deben viajar a cada uno de los Nueve Reinos en busca de respuestas mientras las fuerzas asgardianas se preparan para una batalla profetizada.',
    
    imagen_juego: 'https://images3.alphacoders.com/127/1273405.jpg',

    imagenes: {
      hero: 'https://images3.alphacoders.com/127/1273405.jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTQ5YTA1ZmUtYzVlNC00YjI2LWJhYjgtNWE4MjY2OWEzMGQwXkEyXkFqcGc@._V1_.jpg',
      logo: 'https://hips.hearstapps.com/hmg-prod/images/ragnarok-1600291665.png?crop=0.540xw:1.00xh;0.242xw,0&resize=1200:*'
    },

    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Intel i5-4670K / GPU: GTX 1060 / RAM: 8GB',
    etiquetas: ['Acción', 'Mitología', 'Un solo jugador'],
    fecha_lanzamiento: '9 de noviembre de 2022',
    compania: 'Santa Monica Studio',
    descuento: '20%'
  },
  {
    id: '3',
    nombre: "Marvel's Spider-Man 2",
    precio: '$1,349 MXN',
    categoria: 'Acción',
    descripcion_corta: 'Peter Parker y Miles Morales unen fuerzas para proteger Nueva York.',
    descripcion_larga: 'Los Spider-Men Peter Parker y Miles Morales se enfrentan a la prueba definitiva de fuerza dentro y fuera de la máscara mientras luchan para salvar la ciudad, a los demás y a sus seres queridos del monstruoso Venom.',
    
    imagen_juego: 'https://m.media-amazon.com/images/M/MV5BODgwNDc4NjYtYmI2NS00ZWEwLTgxNzAtYzU1NGU3ZjhiN2NlXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg',

    imagenes: {
      hero: 'https://m.media-amazon.com/images/M/MV5BODgwNDc4NjYtYmI2NS00ZWEwLTgxNzAtYzU1NGU3ZjhiN2NlXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg',
      poster: 'https://cdn.marvel.com/content/2x/marvelsspiderman2_lob_mas_mob_02-1.webp',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Marvel%27s_Spider-Man_2_%282025%29_logo_official_%28SGDB_124347%29.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'T (Adolescentes)',
    requerimientos_minimos: 'PlayStation 5',
    etiquetas: ['Superhéroes', 'Mundo abierto', 'Acción'],
    fecha_lanzamiento: '20 de octubre de 2023',
    compania: 'Insomniac Games',
    descuento: null
  },
  {
    id: '4',
    nombre: "Uncharted 4: A Thief's End",
    precio: '$799 MXN',
    categoria: 'Aventura',
    descripcion_corta: 'Nathan Drake emprende su última gran cacería de tesoros.',
    descripcion_larga: 'Años después de su última aventura, el cazatesoros retirado Nathan Drake se ve obligado a regresar al mundo de los ladrones cuando su hermano Sam reaparece pidiendo ayuda para salvar su vida.',
     
    imagen_juego: 'https://wallpapercat.com/w/full/b/f/0/119138-3840x2160-desktop-4k-uncharted-wallpaper-image.jpg',

    imagenes: {
      hero: 'https://wallpapercat.com/w/full/b/f/0/119138-3840x2160-desktop-4k-uncharted-wallpaper-image.jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BNTFmN2M0MGMtMTI5Ny00NzRlLWFlZGYtZDM0N2VmOTUwYTdmXkEyXkFqcGc@._V1_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'T (Adolescentes)',
    requerimientos_minimos: 'CPU: Intel i5-4330 / GPU: GTX 960 / RAM: 8GB',
    etiquetas: ['Aventura', 'Historia', 'Tercera persona'],
    fecha_lanzamiento: '10 de mayo de 2016',
    compania: 'Naughty Dog',
    descuento: '50%'
  },
  {
    id: '5',
    nombre: "Assassin's Creed Valhalla",
    precio: '$999 MXN',
    categoria: 'Acción',
    descripcion_corta: 'Lidera una banda de vikingos en busca de gloria en Inglaterra.',
    descripcion_larga: 'Ponte en la piel de Eivor, una leyenda vikinga en busca de gloria. Explora un mundo abierto dinámico y hermoso ambientado en la despiadada Inglaterra de los años oscuros.',
     
    imagen_juego: 'https://www.nme.com/wp-content/uploads/2020/05/assassins-creed-valhalla-credit-ubisoft@2000x1270-3-1.jpg',

    imagenes: {
      hero: 'https://www.nme.com/wp-content/uploads/2020/05/assassins-creed-valhalla-credit-ubisoft@2000x1270-3-1.jpg',
      poster: 'https://cdn.europosters.eu/image/1300/96340.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Assassin%27s_Creed_Valhalla_text_logo.svg/960px-Assassin%27s_Creed_Valhalla_text_logo.svg.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=thumbnail'
    },

    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Ryzen 3 1200 / GPU: GTX 960 / RAM: 8GB',
    etiquetas: ['Mundo abierto', 'RPG', 'Vikingos'],
    fecha_lanzamiento: '10 de noviembre de 2020',
    compania: 'Ubisoft',
    descuento: '75%'
  },
  {
    id: '6',
    nombre: 'Elden Ring',
    precio: '$1,199 MXN',
    categoria: 'RPG',
    descripcion_corta: 'Explora las Tierras Intermedias y conviértete en el Señor del Círculo.',
    descripcion_larga: 'Un nuevo mundo de fantasía creado por Hidetaka Miyazaki y George R. R. Martin. Explora vastos paisajes interconectados, descubre oscuros secretos y enfréntate a enemigos formidables.',
    
    imagen_juego: 'https://i.guim.co.uk/img/media/579318570c74cd4dbc08f82db78e8291f3977f9b/0_100_3305_1983/master/3305.jpg?width=1200&quality=85&auto=format&fit=max&s=6d06ad98f7ef3314064d50ca7293a709',

    imagenes: {
      hero: 'https://i.guim.co.uk/img/media/579318570c74cd4dbc08f82db78e8291f3977f9b/0_100_3305_1983/master/3305.jpg?width=1200&quality=85&auto=format&fit=max&s=6d06ad98f7ef3314064d50ca7293a709',
      poster: 'https://steamforged.com/cdn/shop/collections/ER-collection-2000x1125-780428.png?v=1743077065',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Intel i5-8400 / GPU: GTX 1060 / RAM: 12GB',
    etiquetas: ['RPG de acción', 'Mundo abierto', 'Fantasía oscura'],
    fecha_lanzamiento: '25 de febrero de 2022',
    compania: 'FromSoftware',
    descuento: '30%'
  },
  {
    id: '7',
    nombre: 'Cyberpunk 2077',
    precio: '$899 MXN',
    categoria: 'RPG',
    descripcion_corta: 'Sumérgete en Night City como un mercenario urbano.',
    descripcion_larga: 'Cyberpunk 2077 es un RPG de acción y aventura de mundo abierto ambientado en la megalópolis de Night City, donde juegas como un mercenario ciberpunk envuelto en una lucha de supervivencia a vida o muerte.',
    
    imagen_juego: 'https://espirituracer.com/archivos/2020/12/coches-de-cyberpunk-2077-2.jpg',

    imagenes: {
      hero: 'https://espirituracer.com/archivos/2020/12/coches-de-cyberpunk-2077-2.jpg',
      poster: 'https://store-images.s-microsoft.com/image/apps.47379.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.89bb995b-b066-4a53-9fe4-0260ce07e894',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Core i7-6700 / GPU: GTX 1060 / RAM: 12GB',
    etiquetas: ['Cyberpunk', 'Ciencia Ficción', 'Mundo abierto'],
    fecha_lanzamiento: '10 de diciembre de 2020',
    compania: 'CD Projekt Red',
    descuento: '50%'
  },
  {
    id: '8',
    nombre: 'The Witcher 3: Wild Hunt',
    precio: '$599 MXN',
    categoria: 'RPG',
    descripcion_corta: 'Geralt de Rivia busca a Ciri en un mundo abierto lleno de monstruos.',
    descripcion_larga: 'Eres Geralt de Rivia, un cazador de monstruos a sueldo. Ante ti tienes un continente devastado por la guerra y plagado de monstruos que puedes explorar a voluntad.',
    
    imagen_juego: 'https://store-images.s-microsoft.com/image/apps.46303.65858607118306853.39ed2a08-df0d-4ae1-aee0-c66ffb783a34.1fbbd7b6-6399-4b79-99f0-f48c6ada8a2b?h=862&format=jpg',

    imagenes: {
      hero: 'https://store-images.s-microsoft.com/image/apps.46303.65858607118306853.39ed2a08-df0d-4ae1-aee0-c66ffb783a34.1fbbd7b6-6399-4b79-99f0-f48c6ada8a2b?h=862&format=jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BNTQ2NjNkMTItNjViYy00MjhlLTgxMTEtOTM1ODJiNmFiMmJhXkEyXkFqcGc@._V1_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Intel i5-2500K / GPU: GTX 660 / RAM: 6GB',
    etiquetas: ['Fantasía', 'Historia', 'Mundo abierto'],
    fecha_lanzamiento: '18 de mayo de 2015',
    compania: 'CD Projekt Red',
    descuento: '80%'
  },
  {
    id: '9',
    nombre: "Baldur's Gate 3",
    precio: '$1,199 MXN',
    categoria: 'RPG',
    descripcion_corta: 'Reúne un grupo y decide el destino de los Reinos Olvidados.',
    descripcion_larga: 'Forma tu equipo y regresa a los Reinos Olvidados en un relato de compañerismo y traición, sacrificio y supervivencia, además de la atracción de un poder absoluto.',
    
    imagen_juego: 'https://gameinformer.com/sites/default/files/styles/content_header_l/public/2023/08/16/e92f072f/bg3_party.jpg.webp',

    imagenes: {
      hero: 'https://gameinformer.com/sites/default/files/styles/content_header_l/public/2023/08/16/e92f072f/bg3_party.jpg.webp',
      poster: 'https://m.media-amazon.com/images/M/MV5BN2I0N2Y3MWUtNjJiNy00NjRjLWE4ZTctOTQ2YWVhM2VhMTM4XkEyXkFqcGc@._V1_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Intel i5-4690 / GPU: GTX 970 / RAM: 8GB',
    etiquetas: ['CRPG', 'Elecciones importan', 'Fantasía'],
    fecha_lanzamiento: '3 de agosto de 2023',
    compania: 'Larian Studios',
    descuento: '10%'
  },
  {
    id: '10',
    nombre: 'DOOM Eternal',
    precio: '$799 MXN',
    categoria: 'Shooter',
    descripcion_corta: 'El Slayer regresa para enfrentar a las fuerzas del infierno.',
    descripcion_larga: 'Los ejércitos del infierno han invadido la Tierra. Ponte en la piel del Slayer en una épica campaña para un jugador y cruza dimensiones para aniquilar demonios.',
    
    imagen_juego: 'https://i.blogs.es/7526d7/doom-eternal/1366_2000.jpeg',

    imagenes: {
      hero: 'https://i.blogs.es/7526d7/doom-eternal/1366_2000.jpeg',
      poster: 'https://m.media-amazon.com/images/M/MV5BZGY4ODZmZjMtNjY0NS00MWMzLTkzNGUtZTAxZDI0YzU1YWJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Intel Core i5 @ 3.3 GHz / GPU: GTX 1050 Ti / RAM: 8GB',
    etiquetas: ['Acción frenética', 'Demonios', 'FPS'],
    fecha_lanzamiento: '20 de marzo de 2020',
    compania: 'id Software',
    descuento: '70%'
  },
  {
    id: '11',
    nombre: 'Counter-Strike 2',
    precio: 'Gratis',
    categoria: 'Shooter',
    descripcion_corta: 'El shooter táctico competitivo más jugado del mundo.',
    descripcion_larga: 'Durante más de dos décadas, Counter-Strike ha ofrecido una experiencia competitiva de primer nivel forjada por millones de jugadores de todo el mundo. Ahora comienza el siguiente capítulo.',
    
    imagen_juego: 'https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/cs2/maps/dust2_back_plat_s1.jpg',

    imagenes: {
      hero: 'https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/cs2/maps/dust2_back_plat_s1.jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BYjdlZjZlMTQtMTQwNS00MTBjLWE3YjQtM2Y3NjQ5ZWEzMzRmXkEyXkFqcGc@._V1_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Intel Core i5-750 / GPU: 1GB VRAM / RAM: 8GB',
    etiquetas: ['Multijugador', 'Competitivo', 'Shooter táctico'],
    fecha_lanzamiento: '27 de septiembre de 2023',
    compania: 'Valve',
    descuento: null
  },
  {
    id: '12',
    nombre: 'Apex Legends',
    precio: 'Gratis',
    categoria: 'Shooter',
    descripcion_corta: 'Battle royale de héroes con habilidades únicas.',
    descripcion_larga: 'Conquista con estilo en Apex Legends, un shooter de héroes gratuito donde personajes legendarios con poderosas habilidades se unen para luchar por la fama y la fortuna en los confines de la Frontera.',
    
    imagen_juego: 'https://theaverageviewer.home.blog/wp-content/uploads/2019/02/992033.jpg',

    imagenes: {
      hero: 'https://theaverageviewer.home.blog/wp-content/uploads/2019/02/992033.jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BM2Q5YmMzM2ItNzY2OS00OWQ3LTkzMzMtYzJiYTE4NDVjODgzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'T (Adolescentes)',
    requerimientos_minimos: 'CPU: Intel Core i3-6300 / GPU: GT 640 / RAM: 6GB',
    etiquetas: ['Battle Royale', 'Multijugador', 'Hero Shooter'],
    fecha_lanzamiento: '4 de febrero de 2019',
    compania: 'Respawn Entertainment',
    descuento: null
  },
  {
    id: '13',
    nombre: 'EA Sports FC 25',
    precio: '$1,099 MXN',
    categoria: 'Deportes',
    descripcion_corta: 'El fútbol más realista con las mejores ligas del mundo.',
    descripcion_larga: 'EA SPORTS FC 25 te ofrece más formas de ganar para el club. Forma equipo con amigos en tus modos favoritos con el nuevo Rush 5v5, y gestiona tu club hacia la victoria con un control táctico más realista.',
    
    imagen_juego: 'https://img.somosxbox.com/somosxbox/2024/07/23102942/ea-sports-fc-25-logo-filtrado-2-somosxbox.jpeg',

    imagenes: {
      hero: 'https://img.somosxbox.com/somosxbox/2024/07/23102942/ea-sports-fc-25-logo-filtrado-2-somosxbox.jpeg',
      poster: 'https://m.media-amazon.com/images/M/MV5BMjNiMWJjYzgtZWRjMy00MWZlLWE2ZjEtMTRkYWYxZTdjMDEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'E (Todos)',
    requerimientos_minimos: 'CPU: Intel Core i5-6600K / GPU: GTX 1050 Ti / RAM: 8GB',
    etiquetas: ['Fútbol', 'Deportes', 'Multijugador'],
    fecha_lanzamiento: '27 de septiembre de 2024',
    compania: 'EA Sports',
    descuento: '25%'
  },
  {
    id: '14',
    nombre: 'Rocket League',
    precio: 'Gratis',
    categoria: 'Multijugador',
    descripcion_corta: 'Fútbol con autos a alta velocidad.',
    descripcion_larga: '¡Descarga y compite en este trepidante híbrido de fútbol arcade y caos automovilístico! Desbloquea objetos en el Rocket Pass, sube tu rango competitivo y compite en torneos.',
    
    imagen_juego: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_RocketLeague_S16.jpg',

    imagenes: {
      hero: 'https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_RocketLeague_S16.jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BNTkyNjdlM2ItMGEwZS00NzYyLTlmOGYtZThlOTExN2E4NGYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'E (Todos)',
    requerimientos_minimos: 'CPU: Dual Core 2.5 GHz / GPU: GTX 760 / RAM: 4GB',
    etiquetas: ['Deportes', 'Autos', 'Competitivo'],
    fecha_lanzamiento: '7 de julio de 2015',
    compania: 'Psyonix',
    descuento: null
  },
  {
    id: '15',
    nombre: 'Super Mario Odyssey',
    precio: '$1,099 MXN',
    categoria: 'Plataformas',
    descripcion_corta: 'Acompaña a Mario en una aventura global para rescatar a la Princesa Peach.',
    descripcion_larga: 'Explora increíbles lugares lejos del Reino Champiñón con Mario y su nuevo aliado, Cappy, en una aventura en 3D enorme que te llevará por todo el mundo usando asombrosas habilidades.',
    
    imagen_juego: 'https://ecranpartage.ca/wp-content/uploads/2022/07/Super-Mario-Odyssey-Featured-Ecran-Partage.jpg',

    imagenes: {
      hero: 'https://ecranpartage.ca/wp-content/uploads/2022/07/Super-Mario-Odyssey-Featured-Ecran-Partage.jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BMGUyNGFjZDgtNzYyNi00ZjdjLTlkY2ItOWRiMTM2ZWY1Y2Y2XkEyXkFqcGc@._V1_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'E10+',
    requerimientos_minimos: 'Nintendo Switch',
    etiquetas: ['Plataformas 3D', 'Exploración', 'Familiar'],
    fecha_lanzamiento: '27 de octubre de 2017',
    compania: 'Nintendo',
    descuento: null
  },
  {
    id: '16',
    nombre: 'Hollow Knight',
    precio: '$249 MXN',
    categoria: 'Plataformas',
    descripcion_corta: 'Explora un vasto reino subterráneo lleno de criaturas e insectos.',
    descripcion_larga: 'Desciende al mundo de Hallownest. Hollow Knight es una aventura de acción clásica en estilo 2D que se desarrolla en un vasto mundo interconectado. Explora cavernas, enfréntate a criaturas y haz nuevos amigos.',
    
    imagen_juego: 'https://images3.alphacoders.com/806/thumb-1920-806257.jpg',

    imagenes: {
      hero: 'https://images3.alphacoders.com/806/thumb-1920-806257.jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BMGIyYmJmZDgtOWQ1Ny00NDFiLTk2OTgtM2Q2ZWQ4OWIxZjg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'E10+',
    requerimientos_minimos: 'CPU: Intel Core 2 Duo E5200 / GPU: 9800GTX+ / RAM: 4GB',
    etiquetas: ['Metroidvania', 'Difícil', '2D'],
    fecha_lanzamiento: '24 de febrero de 2017',
    compania: 'Team Cherry',
    descuento: '50%'
  },
  {
    id: '17',
    nombre: 'Resident Evil 4 Remake',
    precio: '$999 MXN',
    categoria: 'Terror',
    descripcion_corta: 'Leon S. Kennedy debe rescatar a la hija del presidente.',
    descripcion_larga: 'Sobrevive es solo el principio. Seis años después de la catástrofe biológica en Raccoon City, el agente Leon S. Kennedy ha sido enviado a rescatar a la hija del presidente, secuestrada.',
    
    imagen_juego: 'https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg',
    
    imagenes: {
      hero: 'https://images3.alphacoders.com/806/thumb-1920-806257.jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BMGIyYmJmZDgtOWQ1Ny00NDFiLTk2OTgtM2Q2ZWQ4OWIxZjg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Ryzen 3 1200 / GPU: GTX 1050 Ti / RAM: 8GB',
    etiquetas: ['Terror de supervivencia', 'Zombis', 'Acción'],
    fecha_lanzamiento: '24 de marzo de 2023',
    compania: 'Capcom',
    descuento: '25%'
  },
  {
    id: '18',
    nombre: 'Age of Empires IV',
    precio: '$799 MXN',
    categoria: 'Estrategia',
    descripcion_corta: 'Construye imperios y libra batallas históricas en tiempo real.',
    descripcion_larga: 'Uno de los juegos de estrategia en tiempo real más queridos vuelve a la gloria poniendo en el centro de épicas batallas históricas que dieron forma al mundo moderno.',
    
    imagen_juego: 'https://cdn.akamai.steamstatic.com/steam/apps/1466860/header.jpg',
    
    imagenes: {
      hero: 'https://images3.alphacoders.com/806/thumb-1920-806257.jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BMGIyYmJmZDgtOWQ1Ny00NDFiLTk2OTgtM2Q2ZWQ4OWIxZjg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'T (Adolescentes)',
    requerimientos_minimos: 'CPU: Intel Core i5-6300U / GPU: Intel HD 520 / RAM: 8GB',
    etiquetas: ['RTS', 'Historia', 'Multijugador'],
    fecha_lanzamiento: '28 de octubre de 2021',
    compania: 'Relic Entertainment',
    descuento: null
  },
  {
    id: '19',
    nombre: 'Forza Horizon 5',
    precio: '$1,099 MXN',
    categoria: 'Carreras',
    descripcion_corta: 'Explora un mundo abierto en México repleto de autos.',
    descripcion_larga: '¡La aventura Horizon definitiva te espera! Explora los vibrantes paisajes del mundo abierto de México con acción de conducción ilimitada y divertida en cientos de los mejores autos del mundo.',
    
    imagen_juego: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg',
    
    imagenes: {
      hero: 'https://images3.alphacoders.com/806/thumb-1920-806257.jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BMGIyYmJmZDgtOWQ1Ny00NDFiLTk2OTgtM2Q2ZWQ4OWIxZjg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'E (Todos)',
    requerimientos_minimos: 'CPU: Ryzen 3 1200 / GPU: GTX 970 / RAM: 8GB',
    etiquetas: ['Carreras', 'Mundo abierto', 'Multijugador'],
    fecha_lanzamiento: '8 de noviembre de 2021',
    compania: 'Playground Games',
    descuento: '40%'
  },
  {
    id: '20',
    nombre: 'Minecraft',
    precio: '$499 MXN',
    categoria: 'Sandbox',
    descripcion_corta: 'Construye, explora y sobrevive en mundos infinitos.',
    descripcion_larga: 'Explora mundos generados procedimentalmente y construye desde la más simple de las casas hasta el más grandioso de los castillos. Juega en modo creativo o extrae en las profundidades en el modo supervivencia.',
    
    imagen_juego: 'https://th.bing.com/th?id=OIF.1E9cwUjOhkmNT4P%2fGdI2BQ&w=334&h=182&c=7&r=0&o=7&pid=1.7&rm=3',
    
    imagenes: {
      hero: 'https://images3.alphacoders.com/806/thumb-1920-806257.jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BMGIyYmJmZDgtOWQ1Ny00NDFiLTk2OTgtM2Q2ZWQ4OWIxZjg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=original'
    },

    clasificacion_edad: 'E10+',
    requerimientos_minimos: 'CPU: Intel Core i3-3210 / GPU: Intel HD Graphics 4000 / RAM: 4GB',
    etiquetas: ['Supervivencia', 'Construcción', 'Mundo abierto'],
    fecha_lanzamiento: '18 de noviembre de 2011',
    compania: 'Mojang Studios',
    descuento: null
  }
];