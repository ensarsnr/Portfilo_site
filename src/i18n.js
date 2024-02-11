import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      welcome: "Hoş geldiniz!",
      about: `
      Javascript ve teknolojileri konusunda kendisini sürekli geliştiren bir yazılımcıyım.
      Hem Web hem de Mobil(FLutter, React-Native) platformlar için FullStack uygulamalar geliştiriyorum.
      Sorunları çözmekten ve geliştirme sırasında ortaya çıkan hatalarla uğraşmaktan zevk alıyorum.
      Yazılım alanının dışında, yeni yerler keşfetmekten ve seyahat etmekten hoşlanıyorum.`,
      workingProcess: "Çalışma Süreci",
      workingTitle: "Çalışmalarımın Detayları",
      workingInfo:
        "Daha fazla bilgi için aşağıda ki alandan CV'yi indirebilirsiniz.",
      cvDownload: "CV İndir",
      sourceCode: "Kaynak Kodu",
      // Projeler hakkında bilgiler
      projects: {
        dockerWebsite: "Web arayüzü sayesinde Docker komutları kullanma.",
        chatApp: "Gerçek zamanlı web sohbet uygulamasıdır.",
        flutterGame:
          "Klasik tabu oyununu elektronik ortama taşıyan bir mobil uygulamadır.",
        brh: "Özel React kancalarının (hook) bulunduğu bir koleksiyon.",
        pmanagement: "Proje yönetimini kolaylaştıracak bir web uygulaması.",
      },
      // Ayları tutuyoruz.
      months: {
        jan: "Ocak",
        feb: "Şubat",
        mar: "Mart",
        apr: "Nisan",
        may: "Mayıs",
        jun: "Haziran",
        jul: "Temmuz",
        aug: "Ağustos",
        sep: "Eylül",
        oct: "Ekim",
        nov: "Kasım",
        dec: "Aralık",
      },
      countries: {
        IT: "İtalya",
        BA: "Bosna Hersek",
        RS: "Sırbistan",
        ME: "Karadağ",
      },
    },
  },
  en: {
    translation: {
      welcome: "Welcome!",
      about: `
      I am a developer who continuously improves themselves in JavaScript and related technologies.
      I develop FullStack applications for both web and mobile platforms (Flutter, ReactNative). 
      I take pleasure in solving problems and dealing with errors that arise during development.
      Outside of the realm of software, I enjoy exploring and traveling to new places.`,
      workingProcess: "Working Process",
      workingTitle: "Details Of My Work",
      workingInfo:
        "For more information, you can download the CV from the area below.",
      cvDownload: "CV Download",
      sourceCode: "Source Code",
      // info projects
      projects: {
        dockerWebsite:
          "Using docker's deploy process with an interface via the browser.",
        chatApp: "It's a real-time web chat application.",
        flutterGame:
          "It is a mobile application that brings the classic taboo game to the electronic environment.",
        brh: "A collection of React hooks to speed-up your  hooks development",
        pmanagement:
          "A web application that will facilitate project management.",
      },

      // Months
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mart",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec",
      },
      countries: {
        IT: "Italy",
        BA: "Bosnia and Herzegovina",
        RS: "Serbia",
        ME: "Montenegro",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});
