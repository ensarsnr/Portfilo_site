import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      welcome: "Hoş geldiniz!",
      about: `Türkçe lorem ipsum olacak burasıda...`,
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
    },
  },
  en: {
    translation: {
      welcome: "Welcome!",
      about: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of type
      and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting,
      remaining essentially unchanged.`,
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
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
});
