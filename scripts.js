document.addEventListener('DOMContentLoaded', function () {
    const messages = [
        'Bienvenido  ',
        'Benvingut  ',
        'Bienvenue  ',
        'Willkommen  ',
        'ようこそ  ',
        'Welcome  '
    ];
    let currentIndex = 0;
    const banner = document.getElementById('welcome-banner');
    let charIndex = 0;
    let isDeleting = false;

    function typeMessage() {
        const currentMessage = messages[currentIndex];
        if (isDeleting) {
            banner.textContent = currentMessage.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % messages.length;
            }
        } else {
            banner.textContent = currentMessage.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentMessage.length) {
                isDeleting = true;
            }
        }
        setTimeout(typeMessage, isDeleting ? 100 : 200);
    }

    typeMessage();
});

const about1Text = {
    en: "I consider my speciality to be backend development, where the technologies I master are java, Spring, PHP and Laravel. Although I have also used JavaScript and Vue.JS for the frontend sections in certain projects.",
    es: "Considero que mi especialidad es el desarrollo backend, donde las tecnologías que domino son java, Spring, PHP y Laravel. Aunque también he utilizado JavaScript y Vue.JS para las secciones frontend en ciertos proyectos."
};

const about2Text = {
    en: "I am a person with great initiative to learn and experience new thing. I have a strong ability to analyze complex problems and find optimal solutions. Additionally, I pay close attention to details, making sure everything works correcty to provide a great user experience.",
    es: "Soy una persona con gran iniciativa para aprender y experimentar cosas nuevas. Tengo una sólida capacidad para analizar problemas complejosy hallar soluciones óptimas. Además, presto especial atención a los detalles, asegurándome de que todo funcione correctamente para proporcionar una excelente experiencia al usuario."
};

const projectsText = {
    en: "Here are some of the projects I've worked on.",
    es: "Aquí hay algunos de los proyectos en los que he trabajado."
};

const horoskope1Text = {
    en: "Horoskope's project consists of a social network, where users can follow others, have followers, and access a main page to view the posts of those they follow, with the theme of astrology and tarot.",
    es: "El proyecto de Horoskope consiste en una red social, donde los usuarios pueden seguir a otros, tener seguidores y acceder a una página principal para ver las publicaciones de aquellos a quienes siguen, con el tema de la astrología y el tarot."
};

const horoskope2Text = {
    en: "In addition to the basic functions of a social network, such as interacting with other users, this app offers the possibility to consult daily horoscopes, as well as comparing compatibility between users individually and in groups. It also allows three types of card draws: yes or no questions, consultations about money, love, or health, and offers the option to book appointments with a psychic for personal readings.",
    es: "Además de las funciones básicas de una red social, como la interacción con otros usuarios, esta aplicación ofrece la posibilidad de consultar el horóscopo diario, asícomo comparar la compatibilidad entre usuarios. También permite realizar tres tipos de lanzamientos de cartas: preguntas con respuestas de sí o no, consultas sobre dinero, amor o salud, y ofrece la opción de reservar citas con una pitonisa para tiradas personales."
};
const horoskope3Text = {
    en: "The main objective is to carry out a complete integration of the horoscope, tarot and social media to provide users with a place where they can connect with others who share those interests. With the intention of create an online community where users can share their experiences, knowledge and opinions on these topics, generating a environment of exchange and mutual learning.",
    es: "El objetivo principal es realizar una integración completa del horóscopo, tarot y redes sociales para proporcionar a los usuarios un lugar donde puedan conectar con otras personas que compartan dichos intereses. Con intención de fomentar la creación de una comunidad online donde los usuarios puedan compartir sus experiencias, conocimientos y opiniones sobre estos temas, generando así un ambiente de intercambio y aprendizaje mutuo."
};

const horoskope4Text = {
    en:"Horoskope is built with Laravel, PHP, MariaDB, JavaScript, and Bootstrap.",
    es:"Horoskope se ha creado usando Laravel, PHP, MariaDB, JavaScript y Bootstrap"
};

const contactText = {
    en:"Feel free to reach out!",
    es:"¡No dudes en ponerte en contacto!"
}


let currentLanguage = 'en';

document.getElementById('toggle-language').addEventListener('click', function () {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    document.getElementById('about-text-1').textContent = about1Text[currentLanguage];
    document.getElementById('about-text-2').textContent = about2Text[currentLanguage];
    document.getElementById('projects-text').textContent = projectsText[currentLanguage];
    document.getElementById('horoskope-text-1').textContent = horoskope1Text[currentLanguage];
    document.getElementById('horoskope-text-2').textContent = horoskope2Text[currentLanguage];
    document.getElementById('horoskope-text-3').textContent = horoskope3Text[currentLanguage];
    document.getElementById('horoskope-text-4').textContent = horoskope4Text[currentLanguage];
    document.getElementById('contact-text').textContent = contactText[currentLanguage];

});