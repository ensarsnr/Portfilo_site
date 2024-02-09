import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      welcome: "Hoş geldiniz!",
      about: `Junior developer olarak kendimi geliştirmeye devam ediyorum.
              JavaScript teknolojileri ve Flutter ile mobil programlama konusunda uzmanlaşıyorum.
              Bilgisayarın dışında keşfetmeyi seviyorum ve amatör fotoğrafçılığa ilgi duyuyorum. 
              Bu web sitesi üzerinden fotoğraflarıma ve üzerinde çalıştığım projelere göz atabilirsiniz.`,
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
        ME: "Karadağ"
      }
    },
  },
  en: {
    translation: {
      welcome: "Welcome!",
      about: `I am actively developing myself as a junior developer. 
              I want to specialize in mobile programming with JavaScript technologies and Flutter.
              Apart from computers, I enjoy exploring and have a passion for amateur photography. 
              You can explore my photos and the projects I've worked on through this website.`,
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
        ME: "Montenegro"
      }
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});
