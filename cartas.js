let cartas =[
    {
        nombre: "Moria es su pasión",
        img: "img/moria_original.jpg",
        descripcion: "No hay nada que te guste más que sentarte a mirar los chimentos a la hora de la siesta. Te encanta porque está Moria, que con su caracter deja callades a cualquiera que se atreva a meterse con ella.",
        valor: 1,
    },
    {
        nombre: "Duerme mucho",
        img: "img/duerme_mucho.jpg",
        descripcion: "Te gusta aprovechar cada momento para renovar energía. Tenés el sueño pesado, así que te quedás dormide hasta en el bondi. Igualmente te despertás justo a tiempo para no pasarte la parada.", 
        valor: 2,
    },
    {
        nombre: "Come sano",
        img: "img/come_sano.jpg",
        descripcion: "Te asegurás de incluir frutas, verduras y cereales a tu dieta, y, aunque te encanta el asado, te mandás un chori solo en reuniones con amigues. ¡Sabés que un cuerpo sano está preparado para cualquier aventura!", 
        valor: 3,
    },
    {
        nombre: "Workaholic",
        img: "img/workaholic.jpg",
        descripcion: "No sabés porqué, hay algo que hace que siempre lleves trabajo a tu casa. Respondés mensajes en el baño, y terminás leyendo informes en la cama. A veces querés mandar todo a la &%@!, pero no podés, es más fuerte que vos.", 
        valor: 4,
    },
    {
        nombre: "Llega tarde siempre",
        img: "img/llega_tarde.jpg",
        descripcion: "Sos ese amigue al que invitan media hora antes por las dudas. Siempre andás corriendo y nunca llegás a tiempo a ningún lado. Una vez casi te deja el micro para ir a la costa. Tu mejor amiga tuvo que pedirle al chofer que te espere.", 
        valor: 5,
    },
    {
        nombre: "Le tiran las cartas",
        img: "img/cartas.jpg",
        descripcion: "Una vez fuiste para probar y te encantó. Andabas medio desconfiade pero la mujer te dijo que ibas a volver con tu ex y así fue. No sabés quién es el presidente de Argentina, pero sabés que hoy la luna está es Tauro.", 
        valor: 6,
    },
    {
        nombre: "Hace ejercicio",
        img: "img/ejercicio.jpg",
        descripcion: "Te gusta levantarte temprano e ir a correr a la plaza, bañarte y desayunar potente. Nadie sabe de dónde sacás la voluntad, ni tampoco qué clase de magia negra invocás para que en invierno puedas almorzar ensalada en vez de un terrible guiso.", 
        valor: 7,
    },
    {
        nombre: "Toca la guitarra",
        img: "img/guitarra.jpg",
        descripcion: "Te aprendiste un par de acordes hace unos años, y ahora canchereas con tus amigues en la plaza. Soñás tocar como Van Halen pero no te animás, porque sabés que tu vecine te va a romper con el tema del ruido. 'Sigo cantando en la ducha', pensás.", 
        valor: 8,
    },
    {
        nombre: "Decora con stickers",
        img: "img/stickers.jpg",
        descripcion: "Tenés un cajón lleno lápices de colores en su empaque original. Vas a la facu, y aunque solo necesitás lapicera y un cuaderno, llevás tu cartuchera por las dudas. En tus apuntes metés stickers y lettering, ¡obvio!", 
        valor: 9,
    },
    {
        nombre: "Lumilagro >>> Stanley",
        img: "img/termos.jpg",
        descripcion: "Sabés qué es bueno en la vida. Te das cuenta de las cosas importantes y no le tenés miedo a nada. En los viajes por ruta sabés que si se te para el coche estás cubierto, porque tenés un buen termo con agua caliente.",
        valor: 0,
    },
    {
        nombre: "Va al show de Justin Bieber",
        img: "img/j_bieber.jpg",
        descripcion: "Te ganaste las entradas en un sorteo de Movistar. Tu vieja te acompañó, y formaron la fila desde la noche anterior. Ella te quería matar, pero al final arreglaron que por tres semanas no la ibas a joder con el karaoke en el living de la casa.", 
        valor: 1,
    },
    {
        nombre: "Tiene el último Iphone",
        img: "img/iphone.jpg",
        descripcion: "Te lo compraste cuando el dólar estaba diesiseis y te hiciste un viajecito a Miami. Sos de esas personas que piensan que lo de afuera es mejor, aunque los dos estén hechos en China.", 
        valor: 2,
    },
    {
        nombre: "Se baña cada tres días",
        img: "img/homero.jpg",
        descripcion: "No te da la vida. Entre estudio y trabajo dormís tres horas, comés un sanguchito y encima te pagan chaucha y palito. Por eso te anotaste a un cursito de programación, el tema es que ahora tuviste que ceder la ducha.",
        valor: 3,
    },
    {
        nombre: "Domingo = Limpieza",
        img: "img/limpieza.jpg",
        descripcion: "Tenés más de treinta, no sos coqueta ni próspera. Igual no importa, porque tenés tu casa limpia, regaste los cáctus planchaste la ropa para el lunes y te hiciste las viandas de la semana. La casa está en órden.",
        valor: 4,
    },
    {
        nombre: "Te vestís de amarillo patito",
        img: "img/pantone.jpg",
        descripcion: "Te gustó desde que te fanatizaste con 'Bananas en piyamas'. Todes te dicen que es un color horrible, pero vos estás convencide que algún día va a estar de moda, e incluso soñás que Pantone lo declare Color del Año.", 
        valor: 5,
    },
    {
        nombre: "Vive en Palermo",
        img: "img/palermo.jpg",
        descripcion: "Nunca cruzaste la General Paz, a lo sumo te fuiste a la playita de Vicente López. Una vez te invitaron a un asado en Ramos, pero no fuiste porque no sabías viajar en el Sarmiento.", 
        valor: 6,
    },
    {
        nombre: "Duerme la siesta",
        img: "img/siesta.jpg",
        descripcion: "Para vos es intocable. Sos una persona muy ocupada, por eso necesitás recargar energía sí o sí, aunque sea treinta minutos. El día que no dormiste la siesta, no llegás a ver ShowMatch.",
        valor: 7,
    },
    {
        nombre: "Viaja en bondi",
        img: "img/bondi.jpg",
        descripcion: "Sos una persona humilde y responsable. Preferís salir un ratito más temprano y aportar tu granito de arena para cuidar el medio ambiente.",
        valor: 8,
    },
    {
        nombre: "No tiene saldo en la SUBE",
        img: "img/sube.jpg",
        descripcion: "Sos bastante despistade, y siempre te das cuenta que se te terminó el saldo cuando querés viajar. Igualmente tenés mucho carisma, así que cada vez que pedís que te paguen el boleto no tenés problema.",
        valor: 9,
    },
    {
        nombre: "Es michi lover",
        img: "img/michi.jpg",
        descripcion: "Tu mejor amigue es un gatite. Preferís su tranquila compañía más que la de los perros. Son adorablemente apapachables y además no es necesario sacarlos a pasear.", 
        valor: 0,
    },
    {
        nombre: "Le gusta la parrilla",
        img: "img/parrilla.jpg",
        descripcion: "¡Qué boliche ni boliche! Te encanta juntarte con tus amigues a disfrutar un buen asado y charlar mientras toman vino. Sabés que las verdaderas amistades se forjan a base de compartir experiencias.", 
        valor: 1,
    },
]


/*{
        nombre: "Moria, the original",
        img: "img/moria_original.jpg",
        descripcion: "El meme en formato original",
        valor: 1,
    },
    {
        nombre: "Moria, rosa",
        img: "img/moria_rosa.jpg",
        descripcion: "Moria rosa", 
        valor: 2,
    },
    {
        nombre: "Moria, celeste",
        img: "img/moria_celeste.jpg",
        descripcion: "Moria celeste", 
        valor: 3,
    },
    {
        nombre: "Moria, amarilla",
        img: "img/moria_amarilla.jpg",
        descripcion: "Moria amarilla", 
        valor: 4,
    },
    {
        nombre: "Moria, verde",
        img: "img/moria_verde.jpg",
        descripcion: "Moria verde", 
        valor: 5,
    },
    {
        nombre: "Moria, lila",
        img: "img/moria_lila.jpg",
        descripcion: "Moria lila", 
        valor: 6,
    },
    {
        nombre: "Moria, en blanco y negro",
        img: "img/moria_blanco&negro.jpg",
        descripcion: "Moria en blanco y negro", 
        valor: 7,
    },
    {
        nombre: "Moria, sobresaturada",
        img: "img/moria_sobresaturada.jpg",
        descripcion: "Moria sobresaturada", 
        valor: 8,
    },
    {
        nombre: "Moria, el arte",
        img: "img/moria_arte.jpg",
        descripcion: "Cuadro artístico de Moria", 
        valor: 9,
    },
    {
        nombre: "Moria, en negativo",
        img: "img/moria_negativo.jpg",
        descripcion: "Moria en negativo",
        valor: 0,
    } */