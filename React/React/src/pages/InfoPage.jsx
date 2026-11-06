import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './InfoPage.css';

function InfoPage() {
  const { slug } = useParams();

  // 1. DICCIONARIO CON CONTENIDO DETALLADO Y REAL POR SECCIÓN
  const contenidoPaginas = {
    // ACERCA DE
    'acerca-de': {
      titulo: 'Acerca de Spexs Store',
      subtitulo: 'Tu plataforma de distribución digital de confianza',
      banner: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Spexs Store es una plataforma creada para conectar a los entusiastas de los videojuegos con sus títulos favoritos de manera inmediata y confiable.',
      secciones: [
        {
          titulo: 'Nuestra Visión',
          texto: 'Ofrecer una catálogo curado de juegos digitales garantizando licencias 100% legales, precios competitivos y un proceso de compra fluido.'
        },
        {
          titulo: 'Pilares Fundamentales',
          puntos: [
            'Entrega de claves al instante tras completar tu compra.',
            'Protección total de tu información de pago.',
            'Atención continua ante cualquier duda con tu biblioteca.'
          ]
        }
      ]
    },

    // PRENSA E INFORMACIÓN CORPORATIVA
    'prensa': {
      titulo: 'Prensa y Medios de Comunicación',
      subtitulo: 'Kit de prensa, contactos y noticias de la empresa',
      banner: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Espacio dedicado a creadores de contenido, periodistas y medios especializados en la industria de los videojuegos.',
      secciones: [
        {
          titulo: 'Solicitudes de Prensa',
          texto: 'Para entrevistas, comunicados oficiales o revisión de títulos para reseñas, contáctanos en prensa@spexsstore.com'
        },
        {
          titulo: 'Recursos para Creadores',
          puntos: [
            'Logotipos en formato PNG sin fondo y SVG vectorial.',
            'Manual de identidad corporativa y paleta de colores.',
            'Capturas promocionales de nuestros lanzamientos.'
          ]
        }
      ]
    },

    'informacion-corporativa': {
      titulo: 'Información Corporativa',
      subtitulo: 'Datos legales y estructura de la empresa',
      banner: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Información sobre la constitución legal y operaciones administrativas de Spexs Store.',
      secciones: [
        {
          titulo: 'Datos Institucionales',
          puntos: [
            'Razón Social: Spexs Interactive S.A. de C.V.',
            'Sede Administrativa: Monterrey, Nuevo León, México.',
            'Contacto Empresarial: corporativo@spexsstore.com'
          ]
        }
      ]
    },

    // EMPLEOS Y VACANTES
    'empleos': {
      titulo: 'Bolsa de Trabajo y Empleos',
      subtitulo: 'Construye el futuro del entretenimiento digital con nosotros',
      banner: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Buscamos constantemente profesionales talentosos en desarrollo de software, diseño de interfaces y soporte a usuarios.',
      secciones: [
        {
          titulo: 'Perfiles Frecuentes',
          puntos: [
            'Desarrolladores Web Front-End (React.js, JavaScript, CSS).',
            'Especialistas en Soporte al Cliente y Atención a Incidentes.',
            'Administradores de Contenido y Gestión de Juegos.'
          ]
        },
        {
          titulo: '¿Cómo postularte?',
          texto: 'Envía tu Curriculum Vitae o enlace a tu portafolio a empleo@spexsstore.com especificando tu área de interés.'
        }
      ]
    },

    // DESARROLLADORES Y COMUNIDAD
    'desarrolladores': {
      titulo: 'Portal para Desarrolladores',
      subtitulo: 'Publica y distribuye tu videojuego en nuestra plataforma',
      banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Ofrecemos un canal de distribución directo para estudios independientes que buscan posicionar sus títulos.',
      secciones: [
        {
          titulo: 'Proceso de Integración',
          puntos: [
            'Envía la demostración técnica o build jugable de tu proyecto.',
            'Evaluación de compatibilidad y firma de contrato digital.',
            'Publicación inmediata en la tienda con panel de métricas de ventas.'
          ]
        }
      ]
    },

    'afiliados': {
      titulo: 'Programa de Afiliados',
      subtitulo: 'Gana comisiones compartiendo tu enlace de recomendación',
      banner: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Diseñado para streamers, creadores de contenido y sitios de ofertas de videojuegos.',
      secciones: [
        {
          titulo: 'Beneficios del Programa',
          puntos: [
            'Porcentaje de ganancia asignado por cada venta generada con tu enlace.',
            'Panel de control en tiempo real para rastrear clics y conversiones.',
            'Retiros mensuales de tu saldo acumulado.'
          ]
        }
      ]
    },

    'api': {
      titulo: 'API y Herramientas Técnicas',
      subtitulo: 'Documentación para integraciones de software',
      banner: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Endpoints REST y herramientas para validación de claves digitales y consulta de datos.',
      secciones: [
        {
          titulo: 'Servicios Disponibles',
          puntos: [
            'API de consulta de catálogo en tiempo real.',
            'Verificación automática de recibos y claves activadas.'
          ]
        }
      ]
    },

    // AYUDA, SOPORTE Y GESTIÓN
    'ayuda': {
      titulo: 'Centro de Ayuda y Preguntas Frecuentes',
      subtitulo: 'Respuestas rápidas a las dudas más habituales',
      banner: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Encuentra información clara para solucionar inconvenientes comunes al comprar o gestionar tus juegos.',
      secciones: [
        {
          titulo: 'Dudas Frecuentes',
          puntos: [
            '¿Dónde veo mi clave de juego? Se genera inmediatamente en la sección de Recibos.',
            '¿Cómo edito mi información? Puedes cambiar tu correo o datos desde tu Perfil de usuario.',
            '¿Los juegos son permanentes? Sí, una vez comprada la clave queda guardada para siempre en tu historial.'
          ]
        }
      ]
    },

    'gestion-cuenta': {
      titulo: 'Guía de Gestión de Cuenta',
      subtitulo: 'Aprende a administrar tu perfil, seguridad y compras',
      banner: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Instrucciones paso a paso para configurar tu usuario y mantener tu cuenta de Spexs Store al día.',
      secciones: [
        {
          titulo: 'Opciones de Cuenta',
          puntos: [
            'Modificación de Nombre y Correo: Disponible en la vista de Perfil.',
            'Historial de Compras: Consulta el detalle completo de tus transacciones y claves adquiridas en la pestaña Recibos.',
            'Cierre de Sesión: Utiliza el botón de salir en el menú superior para asegurar tu cuenta.'
          ]
        }
      ]
    },

    'contacto': {
      titulo: 'Atención y Contacto',
      subtitulo: 'Comunícate directamente con nuestro equipo de atención',
      banner: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Si necesitas asistencia personalizada con una compra o tienes consultas sobre la plataforma, contáctanos.',
      secciones: [
        {
          titulo: 'Canales Oficiales',
          puntos: [
            'Correo de Soporte: soporte@spexsstore.com',
            'Consultas Generales: contacto@spexsstore.com',
            'Horario de Respuesta: Lunes a Viernes de 9:00 a 18:00 hrs (CST).'
          ]
        }
      ]
    },

    'reembolsos': {
      titulo: 'Devoluciones y Reembolsos',
      subtitulo: 'Garantía de reembolso de licencias digitales',
      banner: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Lineamientos para solicitar la devolución del dinero por compras realizadas en la plataforma.',
      secciones: [
        {
          titulo: 'Requisitos para Reembolso',
          puntos: [
            'La clave del juego no debe haber sido revelada o canjeada.',
            'La solicitud debe realizarse dentro de los 14 días posteriores a la transacción.',
            'El importe se abonará directamente al método de pago usado en la compra.'
          ]
        }
      ]
    },

    'seguridad': {
      titulo: 'Seguridad y Privacidad',
      subtitulo: 'Protección de datos y cifrado de transacciones',
      banner: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Medidas de seguridad implementadas para mantener a salvo tus credenciales e historial de compras.',
      secciones: [
        {
          titulo: 'Infraestructura de Protección',
          puntos: [
            'Contraseñas encriptadas mediante algoritmos seguros.',
            'Conexiones protegidas mediante protocolo HTTPS.',
            'Procesamiento de pagos con pasarelas reguladas.'
          ]
        }
      ]
    },

    // MÉTODOS DE PAGO Y LEGAL
    'metodos-pago': {
      titulo: 'Métodos de Pago Aceptados',
      subtitulo: 'Formas de pago seguras para adquirir tus juegos',
      banner: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Información sobre las opciones bancarias y electrónicas disponibles en nuestra pasarela de pago.',
      secciones: [
        {
          titulo: 'Opciones de Pago',
          puntos: [
            'Tarjetas de Crédito y Débito (Visa, Mastercard, American Express).',
            'Tarjetas de Regalo de saldo Spexs Store.'
          ]
        }
      ]
    },

    'tarjetas-regalo': {
      titulo: 'Tarjetas de Regalo Spexs Store',
      subtitulo: 'Saldo digital para comprar tus juegos',
      banner: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Canjea saldos de regalo para realizar compras en el catálogo sin utilizar tarjetas bancarias.',
      secciones: [
        {
          titulo: 'Uso de Saldo',
          texto: 'Ingresa tu código durante la confirmación de la orden para descontar el saldo disponible de tu cuenta.'
        }
      ]
    },

    'cookies': {
      titulo: 'Política de Cookies',
      subtitulo: 'Uso de datos locales de navegación',
      banner: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Explicación del uso de LocalStorage e historial de sesión dentro de la aplicación.',
      secciones: [
        {
          titulo: 'Almacenamiento Local',
          puntos: [
            'Mantenimiento de sesión iniciada.',
            'Persistencia de juegos agregados al carrito.'
          ]
        }
      ]
    },

    'terminos': {
      titulo: 'Términos y Condiciones de Servicio',
      subtitulo: 'Reglamento general para el uso del sitio',
      banner: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Términos legales que aplican al navegar y realizar compras dentro de Spexs Store.',
      secciones: [
        {
          titulo: 'Condiciones de Uso',
          puntos: [
            'Las licencias adquiridas son exclusivas para uso personal.',
            'Queda prohibida la duplicación o reventa no autorizada de las claves entregadas.'
          ]
        }
      ]
    },

    'privacidad': {
      titulo: 'Política de Privacidad',
      subtitulo: 'Uso y protección de tus datos personales',
      banner: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80',
      descripcion:
        'Garantizamos el tratamiento confidencial de la información registrada por nuestros usuarios.',
      secciones: [
        {
          titulo: 'Resguardo de Información',
          texto: 'Tus datos nunca son compartidos con terceros con fines comerciales o de publicidad.'
        }
      ]
    }
  };

  // 2. MAPEO DIRECTO DE ALIAS (Mapea absolutamente cualquier variante que venga en la URL)
 const aliasRutas = {
    // REEMBOLSOS Y DEVOLUCIONES
    'devoluciones': 'reembolsos',
    'devolucion': 'reembolsos',
    'reembolso': 'reembolsos',
    'reembolsos': 'reembolsos',
    'devoluciones-y-reembolsos': 'reembolsos',

    // CUENTA Y USUARIO
    'gestion-cuenta': 'gestion-cuenta',
    'gestionar-cuenta': 'gestion-cuenta',
    'cuenta': 'gestion-cuenta',
    'mi-cuenta': 'gestion-cuenta',

    // AYUDA Y SOPORTE
    'ayuda': 'ayuda',
    'soporte': 'ayuda',
    'soporte-tecnico': 'ayuda',
    'faq': 'ayuda',
    'preguntas-frecuentes': 'ayuda',
    'contacto': 'contacto',

    // EMPLEOS
    'empleos': 'empleos',
    'empleo': 'empleos',
    'trabaja-con-nosotros': 'empleos',
    'bolsa-de-trabajo': 'empleos',

    // CORPORATIVO Y SOBRE NOSOTROS
    'acerca-de': 'acerca-de',
    'nosotros': 'acerca-de',
    'prensa': 'prensa',
    'informacion-corporativa': 'informacion-corporativa',
    'corporativo': 'informacion-corporativa',

    // DESARROLLADORES Y ASOCIADOS
    'desarrolladores': 'desarrolladores',
    'publica-tu-juego': 'desarrolladores',
    'afiliados': 'afiliados',
    'programa-de-afiliados': 'afiliados',
    'api': 'api',
    'api-y-herramientas': 'api',

    // LEGAL Y PAGOS
    'seguridad': 'seguridad',
    'centro-de-seguridad': 'seguridad',
    'metodos-pago': 'metodos-pago',
    'metodos-de-pago': 'metodos-pago',
    'tarjetas-de-credito': 'metodos-pago',
    'tarjetas-de-credito-y-debito': 'metodos-pago',
    'tarjetas-regalo': 'tarjetas-regalo',
    'tarjetas-de-regalo': 'tarjetas-regalo',
    'cookies': 'cookies',
    'politica-de-cookies': 'cookies',
    'terminos': 'terminos',
    'condiciones': 'terminos',
    'terminos-y-condiciones': 'terminos',
    'privacidad': 'privacidad',
    'politica-de-privacidad': 'privacidad'
  };
  const slugLimpio = slug ? slug.toLowerCase() : 'acerca-de';
  const claveFinal = aliasRutas[slugLimpio] || slugLimpio;

  // Si por alguna razón la URL no está registrada, cargamos 'ayuda' por defecto en lugar de una plantilla vacía
  const info = contenidoPaginas[claveFinal] || contenidoPaginas['ayuda'];

  return (
    <div className="info-page-container">
      <div className="info-page-card">
        {info.banner && (
          <div className="info-banner-wrapper">
            <img src={info.banner} alt={info.titulo} className="info-banner-img" />
            <div className="info-banner-overlay" />
          </div>
        )}

        <header className="info-header">
          <h1>{info.titulo}</h1>
          {info.subtitulo && <p className="info-subtitulo">{info.subtitulo}</p>}
        </header>

        <div className="info-divider" />

        <p className="info-descripcion-principal">{info.descripcion}</p>

        <div className="info-secciones">
          {info.secciones?.map((sec, index) => (
            <div key={index} className="info-seccion-item">
              <h3>{sec.titulo}</h3>
              {sec.texto && <p>{sec.texto}</p>}
              {sec.puntos && (
                <ul className="info-lista">
                  {sec.puntos.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="info-footer-actions">
          <Link to="/catalogo" className="btn-volver-catalogo">
            ← Volver al Catálogo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InfoPage;