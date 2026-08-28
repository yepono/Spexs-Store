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
    especificaciones: {
      os: 'Nintendo Switch',
      minimos: {
        resolucion: '720p (Modo Portátil)',
        framerate: '30 FPS',
        almacenamiento: '18.2 GB'
      },
      recomendados: {
        resolucion: '1080p (Modo TV)',
        framerate: '30 FPS',
        almacenamiento: '18.2 GB'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$1,299 MXN', descuento: null }
    ],
    etiquetas: ['Mundo abierto', 'Fantasía', 'Exploración'],
    fecha_lanzamiento: '12 de mayo de 2023',
    compania: 'Nintendo',
    descuento: null,
    comentarios: [
      {
        id: 'c1',
        usuario: 'Carlos Mendoza',
        email: 'carlos@ejemplo.com',
        fecha: '15 de agosto de 2026',
        version: 'Estándar',
        texto: 'Un juego increíble, la exploración no tiene límites. Lo recomiendo totalmente.',
        likes: 14,
        likedBy: ['usuario1@test.com', 'usuario2@test.com']
      }
    ]
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
    especificaciones: {
      os: 'Windows',
      minimos: {
        procesador: 'Intel i5-4670K / Ryzen 3 1200',
        graficos: 'NVIDIA GTX 1060 / AMD RX 5500 XT',
        memoria_ram: '8 GB',
        almacenamiento: '190 GB SSD'
      },
      recomendados: {
        procesador: 'Intel i5-8600 / Ryzen 5 3600',
        graficos: 'NVIDIA RTX 2060 Super / AMD RX 5700',
        memoria_ram: '16 GB',
        almacenamiento: '190 GB SSD'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$1,399 MXN', descuento: '20%' },
      { nombre: 'Digital Deluxe', precio: '$1,699 MXN', descuento: '20%' }
    ],
    etiquetas: ['Acción', 'Mitología', 'Un solo jugador'],
    fecha_lanzamiento: '9 de noviembre de 2022',
    compania: 'Santa Monica Studio',
    descuento: 20,
    comentarios: [
      {
        id: 'c2',
        usuario: 'Ana Torres',
        email: 'ana@ejemplo.com',
        fecha: '10 de julio de 2026',
        version: 'Digital Deluxe',
        texto: 'La historia es una obra maestra y el combate se siente brutal. 10/10.',
        likes: 8,
        likedBy: []
      }
    ]
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
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Marvel%27s_Spider-Man_2_%282025%29_logo_official_%28SGDB_124347%29.png'
    },
    clasificacion_edad: 'T (Adolescentes)',
    requerimientos_minimos: 'PlayStation 5',
    especificaciones: {
      os: 'PlayStation 5',
      minimos: {
        resolucion: '1440p (Modo Rendimiento)',
        framerate: '60 FPS',
        almacenamiento: '98 GB SSD'
      },
      recomendados: {
        resolucion: '4K HDR (Modo Fidelidad)',
        framerate: '30 FPS / 40 FPS (VRR)',
        almacenamiento: '98 GB SSD'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$1,349 MXN', descuento: null },
      { nombre: 'Digital Deluxe Edition', precio: '$1,599 MXN', descuento: null }
    ],
    etiquetas: ['Superhéroes', 'Mundo abierto', 'Acción'],
    fecha_lanzamiento: '20 de octubre de 2023',
    compania: 'Insomniac Games',
    descuento: null,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'T (Adolescentes)',
    requerimientos_minimos: 'CPU: Intel i5-4330 / GPU: GTX 960 / RAM: 8GB',
    especificaciones: {
      os: 'Windows',
      minimos: {
        procesador: 'Intel i5-4330 / AMD Ryzen 3 1200',
        graficos: 'NVIDIA GTX 960 / AMD R9 290X',
        memoria_ram: '8 GB',
        almacenamiento: '126 GB HDD'
      },
      recomendados: {
        procesador: 'Intel i7-4770 / AMD Ryzen 5 1500X',
        graficos: 'NVIDIA GTX 1060 / AMD RX 570',
        memoria_ram: '16 GB',
        almacenamiento: '126 GB SSD'
      }
    },
    versiones: [
      { nombre: 'Colección Legado de los Ladrones', precio: '$799 MXN', descuento: '50%' }
    ],
    etiquetas: ['Aventura', 'Historia', 'Tercera persona'],
    fecha_lanzamiento: '10 de mayo de 2016',
    compania: 'Naughty Dog',
    descuento: 50,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Assassin%27s_Creed_Valhalla_text_logo.svg/960px-Assassin%27s_Creed_Valhalla_text_logo.svg.png'
    },
    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Ryzen 3 1200 / GPU: GTX 960 / RAM: 8GB',
    especificaciones: {
      os: 'Windows',
      minimos: {
        procesador: 'Intel Core i5-4460 / AMD Ryzen 3 1200',
        graficos: 'NVIDIA GTX 960 / AMD R9 380',
        memoria_ram: '8 GB',
        almacenamiento: '50 GB HDD'
      },
      recomendados: {
        procesador: 'Intel Core i7-6700 / AMD Ryzen 7 1700',
        graficos: 'NVIDIA GTX 1080 / AMD Vega 64',
        memoria_ram: '8 GB (Dual Channel)',
        almacenamiento: '50 GB SSD'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$999 MXN', descuento: '75%' },
      { nombre: 'Deluxe Edition', precio: '$1,399 MXN', descuento: '75%' },
      { nombre: 'Ragnarök Edition', precio: '$1,999 MXN', descuento: '75%' }
    ],
    etiquetas: ['Mundo abierto', 'RPG', 'Vikingos'],
    fecha_lanzamiento: '10 de noviembre de 2020',
    compania: 'Ubisoft',
    descuento: 75,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Intel i5-8400 / GPU: GTX 1060 / RAM: 12GB',
    especificaciones: {
      os: 'Windows',
      minimos: {
        procesador: 'Intel Core i5-8400 / AMD Ryzen 3 3300X',
        graficos: 'NVIDIA GTX 1060 (3GB) / AMD RX 580 (4GB)',
        memoria_ram: '12 GB',
        almacenamiento: '60 GB'
      },
      recomendados: {
        procesador: 'Intel Core i7-8700K / AMD Ryzen 5 3600X',
        graficos: 'NVIDIA GTX 1070 (8GB) / AMD RX VEGA 56 (8GB)',
        memoria_ram: '16 GB',
        almacenamiento: '60 GB'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$1,199 MXN', descuento: '30%' },
      { nombre: 'Deluxe Edition', precio: '$1,599 MXN', descuento: '30%' },
      { nombre: 'Shadow of the Erdtree Edition', precio: '$1,799 MXN', descuento: null }
    ],
    etiquetas: ['RPG de acción', 'Mundo abierto', 'Fantasía oscura'],
    fecha_lanzamiento: '25 de febrero de 2022',
    compania: 'FromSoftware',
    descuento: 30,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Core i7-6700 / GPU: GTX 1060 / RAM: 12GB',
    especificaciones: {
      os: 'Windows / macOS',
      minimos: {
        procesador: 'Intel Core i7-6700 / AMD Ryzen 5 1600',
        graficos: 'NVIDIA GTX 1060 (6GB) / AMD Radeon RX 580 (8GB)',
        memoria_ram: '12 GB',
        almacenamiento: '70 GB SSD'
      },
      recomendados: {
        procesador: 'Intel Core i7-12700 / AMD Ryzen 7 7800X3D',
        graficos: 'NVIDIA RTX 2060 Super / AMD Radeon RX 5700 XT',
        memoria_ram: '16 GB',
        almacenamiento: '70 GB SSD NVMe'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$899 MXN', descuento: '50%' },
      { nombre: 'Ultimate Edition', precio: '$1,499 MXN', descuento: '30%' }
    ],
    etiquetas: ['Cyberpunk', 'Ciencia Ficción', 'Mundo abierto'],
    fecha_lanzamiento: '10 de diciembre de 2020',
    compania: 'CD Projekt Red',
    descuento: 50,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Intel i5-2500K / GPU: GTX 660 / RAM: 6GB',
    especificaciones: {
      os: 'Windows / macOS',
      minimos: {
        procesador: 'Intel Core i5-2500K / AMD Phenom II X4',
        graficos: 'NVIDIA GTX 660 / AMD Radeon HD 7870',
        memoria_ram: '6 GB',
        almacenamiento: '50 GB'
      },
      recomendados: {
        procesador: 'Intel Core i7-3770 / AMD FX-8350',
        graficos: 'NVIDIA GTX 770 / AMD Radeon R9 290',
        memoria_ram: '8 GB',
        almacenamiento: '50 GB'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$599 MXN', descuento: '80%' },
      { nombre: 'Complete Edition', precio: '$999 MXN', descuento: '75%' }
    ],
    etiquetas: ['Fantasía', 'Historia', 'Mundo abierto'],
    fecha_lanzamiento: '18 de mayo de 2015',
    compania: 'CD Projekt Red',
    descuento: 80,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Intel i5-4690 / GPU: GTX 970 / RAM: 8GB',
    especificaciones: {
      os: 'Windows / macOS',
      minimos: {
        procesador: 'Intel Core i5-4690 / AMD FX 8350',
        graficos: 'NVIDIA GTX 970 / AMD RX 480 (4GB)',
        memoria_ram: '8 GB',
        almacenamiento: '150 GB SSD'
      },
      recomendados: {
        procesador: 'Intel Core i7-8700K / AMD Ryzen 5 3600',
        graficos: 'NVIDIA RTX 2060 Super / AMD RX 5700 XT (8GB)',
        memoria_ram: '16 GB',
        almacenamiento: '150 GB SSD'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$1,199 MXN', descuento: '10%' },
      { nombre: 'Digital Deluxe', precio: '$1,399 MXN', descuento: '10%' }
    ],
    etiquetas: ['CRPG', 'Elecciones importan', 'Fantasía'],
    fecha_lanzamiento: '3 de agosto de 2023',
    compania: 'Larian Studios',
    descuento: 10,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Intel Core i5 @ 3.3 GHz / GPU: GTX 1050 Ti / RAM: 8GB',
    especificaciones: {
      os: 'Windows',
      minimos: {
        procesador: 'Intel Core i5 @ 3.3 GHz / AMD Ryzen 3 @ 3.1 GHz',
        graficos: 'NVIDIA GTX 1050 Ti (4GB) / AMD R9 280 (3GB)',
        memoria_ram: '8 GB',
        almacenamiento: '80 GB'
      },
      recomendados: {
        procesador: 'Intel Core i7-6700K / AMD Ryzen 7 1800X',
        graficos: 'NVIDIA GTX 1080 (8GB) / AMD RX Vega56 (8GB)',
        memoria_ram: '8 GB',
        almacenamiento: '80 GB'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$799 MXN', descuento: '70%' },
      { nombre: 'Deluxe Edition', precio: '$1,399 MXN', descuento: '70%' }
    ],
    etiquetas: ['Acción frenética', 'Demonios', 'FPS'],
    fecha_lanzamiento: '20 de marzo de 2020',
    compania: 'id Software',
    descuento: 70,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Intel Core i5-750 / GPU: 1GB VRAM / RAM: 8GB',
    especificaciones: {
      os: 'Windows / Linux',
      minimos: {
        procesador: 'Intel Core i5-750 o equivalente',
        graficos: 'GPU compatible con DirectX 11 (1GB VRAM)',
        memoria_ram: '8 GB',
        almacenamiento: '85 GB'
      },
      recomendados: {
        procesador: 'Intel Core i7-9700 / AMD Ryzen 7 2700X',
        graficos: 'NVIDIA RTX 2060 / AMD RX 5700 XT',
        memoria_ram: '16 GB',
        almacenamiento: '85 GB SSD'
      }
    },
    versiones: [
      { nombre: 'Juego Base', precio: 'Gratis', descuento: null },
      { nombre: 'Prime Status Upgrade', precio: '$299 MXN', descuento: null }
    ],
    etiquetas: ['Multijugador', 'Competitivo', 'Shooter táctico'],
    fecha_lanzamiento: '27 de septiembre de 2023',
    compania: 'Valve',
    descuento: null,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'T (Adolescentes)',
    requerimientos_minimos: 'CPU: Intel Core i3-6300 / GPU: GT 640 / RAM: 6GB',
    especificaciones: {
      os: 'Windows',
      minimos: {
        procesador: 'Intel Core i3-6300 / AMD FX-4350',
        graficos: 'NVIDIA GeForce GT 640 / AMD Radeon HD 7730',
        memoria_ram: '6 GB',
        almacenamiento: '75 GB'
      },
      recomendados: {
        procesador: 'Intel Core i5-3570K o equivalente',
        graficos: 'NVIDIA GeForce GTX 970 / AMD Radeon R9 290',
        memoria_ram: '8 GB',
        almacenamiento: '75 GB'
      }
    },
    versiones: [
      { nombre: 'Juego Base', precio: 'Gratis', descuento: null },
      { nombre: 'Champion Edition', precio: '$799 MXN', descuento: '30%' }
    ],
    etiquetas: ['Battle Royale', 'Multijugador', 'Hero Shooter'],
    fecha_lanzamiento: '4 de febrero de 2019',
    compania: 'Respawn Entertainment',
    descuento: null,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'E (Todos)',
    requerimientos_minimos: 'CPU: Intel Core i5-6600K / GPU: GTX 1050 Ti / RAM: 8GB',
    especificaciones: {
      os: 'Windows',
      minimos: {
        procesador: 'Intel Core i5-6600K / AMD Ryzen 5 1600',
        graficos: 'NVIDIA GTX 1050 Ti / AMD RX 570',
        memoria_ram: '8 GB',
        almacenamiento: '100 GB'
      },
      recomendados: {
        procesador: 'Intel Core i7-6700 / AMD Ryzen 7 2700X',
        graficos: 'NVIDIA GTX 1660 / AMD RX 5600 XT',
        memoria_ram: '12 GB',
        almacenamiento: '100 GB SSD'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$1,099 MXN', descuento: '25%' },
      { nombre: 'Ultimate Edition', precio: '$1,799 MXN', descuento: '25%' }
    ],
    etiquetas: ['Fútbol', 'Deportes', 'Multijugador'],
    fecha_lanzamiento: '27 de septiembre de 2024',
    compania: 'EA Sports',
    descuento: 25,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'E (Todos)',
    requerimientos_minimos: 'CPU: Dual Core 2.5 GHz / GPU: GTX 760 / RAM: 4GB',
    especificaciones: {
      os: 'Windows',
      minimos: {
        procesador: 'Procesador Dual Core 2.5 GHz',
        graficos: 'NVIDIA GTX 760 / AMD R7 270X',
        memoria_ram: '4 GB',
        almacenamiento: '20 GB'
      },
      recomendados: {
        procesador: 'Procesador Quad Core 3.0 GHz+',
        graficos: 'NVIDIA GTX 1060 / AMD RX 470',
        memoria_ram: '8 GB',
        almacenamiento: '20 GB'
      }
    },
    versiones: [
      { nombre: 'Juego Base', precio: 'Gratis', descuento: null }
    ],
    etiquetas: ['Deportes', 'Autos', 'Competitivo'],
    fecha_lanzamiento: '7 de julio de 2015',
    compania: 'Psyonix',
    descuento: null,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'E10+',
    requerimientos_minimos: 'Nintendo Switch',
    especificaciones: {
      os: 'Nintendo Switch',
      minimos: {
        resolucion: '720p (Modo Portátil)',
        framerate: '60 FPS',
        almacenamiento: '5.7 GB'
      },
      recomendados: {
        resolucion: '900p (Modo TV)',
        framerate: '60 FPS',
        almacenamiento: '5.7 GB'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$1,099 MXN', descuento: null }
    ],
    etiquetas: ['Plataformas 3D', 'Exploración', 'Familiar'],
    fecha_lanzamiento: '27 de octubre de 2017',
    compania: 'Nintendo',
    descuento: null,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'E10+',
    requerimientos_minimos: 'CPU: Intel Core 2 Duo E5200 / GPU: 9800GTX+ / RAM: 4GB',
    especificaciones: {
      os: 'Windows / macOS / Linux',
      minimos: {
        procesador: 'Intel Core 2 Duo E5200',
        graficos: 'NVIDIA GeForce 9800GTX+',
        memoria_ram: '4 GB',
        almacenamiento: '9 GB'
      },
      recomendados: {
        procesador: 'Intel Core i5',
        graficos: 'NVIDIA GeForce GTX 560',
        memoria_ram: '8 GB',
        almacenamiento: '9 GB'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$249 MXN', descuento: '50%' }
    ],
    etiquetas: ['Metroidvania', 'Difícil', '2D'],
    fecha_lanzamiento: '24 de febrero de 2017',
    compania: 'Team Cherry',
    descuento: 50,
    comentarios: []
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
      hero: 'https://cdn.akamai.steamstatic.com/steam/apps/2050650/ss_4938a1f8db1a38cf0db24ecaaefeaed7fb8c9f59.1920x1080.jpg',
      poster: 'https://m.media-amazon.com/images/M/MV5BN2E2YmNlNDMtNTI0OC00N2EzLWIzNDgtMTVlNWJjODhkNDI3XkEyXkFqcGc@._V1_.jpg',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Resident_Evil_4_remake_logo.svg/1280px-Resident_Evil_4_remake_logo.svg.png'
    },
    clasificacion_edad: 'M (Maduro +17)',
    requerimientos_minimos: 'CPU: Ryzen 3 1200 / GPU: GTX 1050 Ti / RAM: 8GB',
    especificaciones: {
      os: 'Windows / macOS',
      minimos: {
        procesador: 'Intel Core i5-7500 / AMD Ryzen 3 1200',
        graficos: 'NVIDIA GTX 1050 Ti / AMD RX 560',
        memoria_ram: '8 GB',
        almacenamiento: '70 GB'
      },
      recomendados: {
        procesador: 'Intel Core i7-8700 / AMD Ryzen 5 3600',
        graficos: 'NVIDIA GTX 1070 / AMD RX 5700',
        memoria_ram: '16 GB',
        almacenamiento: '70 GB SSD'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$999 MXN', descuento: '25%' },
      { nombre: 'Deluxe Edition', precio: '$1,299 MXN', descuento: '25%' }
    ],
    etiquetas: ['Terror de supervivencia', 'Zombis', 'Acción'],
    fecha_lanzamiento: '24 de marzo de 2023',
    compania: 'Capcom',
    descuento: 25,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'T (Adolescentes)',
    requerimientos_minimos: 'CPU: Intel Core i5-6300U / GPU: Intel HD 520 / RAM: 8GB',
    especificaciones: {
      os: 'Windows',
      minimos: {
        procesador: 'Intel Core i5-6300U / AMD Ryzen 5 2400G',
        graficos: 'Intel HD 520 / AMD Radeon RX Vega 11',
        memoria_ram: '8 GB',
        almacenamiento: '50 GB'
      },
      recomendados: {
        procesador: 'Procesador 6-Core 3.3 GHz',
        graficos: 'NVIDIA GTX 970 / AMD Radeon RX 570',
        memoria_ram: '16 GB',
        almacenamiento: '50 GB SSD'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$799 MXN', descuento: null },
      { nombre: 'Digital Deluxe', precio: '$1,099 MXN', descuento: null }
    ],
    etiquetas: ['RTS', 'Historia', 'Multijugador'],
    fecha_lanzamiento: '28 de octubre de 2021',
    compania: 'Relic Entertainment',
    descuento: null,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'E (Todos)',
    requerimientos_minimos: 'CPU: Ryzen 3 1200 / GPU: GTX 970 / RAM: 8GB',
    especificaciones: {
      os: 'Windows',
      minimos: {
        procesador: 'Intel i5-4460 / AMD Ryzehttp://localhost:5174/n 3 1200',
        graficos: 'NVIDIA GTX 970 / AMD RX 470',
        memoria_ram: '8 GB',
        almacenamiento: '110 GB'
      },
      recomendados: {
        procesador: 'Intel i5-8400 / AMD Ryzen 5 1500X',
        graficos: 'NVIDIA GTX 1070 / AMD RX 590',
        memoria_ram: '16 GB',
        almacenamiento: '110 GB SSD'
      }
    },
    versiones: [
      { nombre: 'Estándar', precio: '$1,099 MXN', descuento: '40%' },
      { nombre: 'Deluxe Edition', precio: '$1,399 MXN', descuento: '40%' },
      { nombre: 'Premium Edition', precio: '$1,799 MXN', descuento: '40%' }
    ],
    etiquetas: ['Carreras', 'Mundo abierto', 'Multijugador'],
    fecha_lanzamiento: '8 de noviembre de 2021',
    compania: 'Playground Games',
    descuento: 40,
    comentarios: []
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
      logo: 'https://upload.wikimedia.org/wikipedia/fr/7/72/Uncharted_4_A_Thief%27s_End_Logo.png'
    },
    clasificacion_edad: 'E10+',
    requerimientos_minimos: 'CPU: Intel Core i3-3210 / GPU: Intel HD Graphics 4000 / RAM: 4GB',
    especificaciones: {
      os: 'Windows / macOS / Linux',
      minimos: {
        procesador: 'Intel Core i3-3210 / AMD A8-7600',
        graficos: 'Intel HD 4000 / AMD Radeon R5',
        memoria_ram: '4 GB',
        almacenamiento: '1 GB'
      },
      recomendados: {
        procesador: 'Intel Core i5-4690 / AMD A10-7800',
        graficos: 'NVIDIA GeForce 700 / AMD Radeon Rx 200',
        memoria_ram: '8 GB',
        almacenamiento: '4 GB SSD'
      }
    },
    versiones: [
      { nombre: 'Java & Bedrock Edition', precio: '$499 MXN', descuento: null },
      { nombre: 'Deluxe Collection', precio: '$699 MXN', descuento: null }
    ],
    etiquetas: ['Supervivencia', 'Construcción', 'Mundo abierto'],
    fecha_lanzamiento: '18 de noviembre de 2011',
    compania: 'Mojang Studios',
    descuento: null,
    comentarios: []
  }
];

export const CATEGORIAS = [
  'Todas',
  'Aventura',
  'Acción',
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