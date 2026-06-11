const translations = {
  en: {
    heroTitle: "Unlimited movies, TV shows and more",
    heroSubtitle: "Starts at ₹149. Cancel anytime.",
    heroPrompt: "Ready to watch? Enter your email to create or restart your membership.",
    enjoy: "Enjoy on your TV",
    enjoyDesc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    watchEverywhere: "Watch everywhere",
    watchEverywhereDesc: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    download: "Download your shows to watch offline",
    downloadDesc: "Save your favourites easily and always have something to watch.",
    kids: "Create profiles for kids",
    kidsDesc: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    faqTitle: "Frequently Asked Questions",
    faq1: "What is Netflix?",
    faq2: "How much does Netflix cost?",
    faq3: "Where can I watch?",
    faq4: "How do I cancel?",
    faq5: "What can I watch on Netflix?",
    faq6: "Is Netflix good for kids?",
    footerContact: "Questions? Call 000-800-919-1694",
  },
  hi: {
    heroTitle: "अनलिमिटेड मूवीज़, टीवी शो और बहुत कुछ",
    heroSubtitle: "₹149 से शुरू। कभी भी रद्द करें।",
    heroPrompt: "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः प्रारंभ करने के लिए अपना ईमेल दर्ज करें।",
    enjoy: "अपने टीवी पर आनंद लें",
    enjoyDesc: "स्मार्ट टीवी, प्लेस्टेशन, एक्सबॉक्स, क्रोमकास्ट, एप्पल टीवी, ब्लू-रे प्लेयर्स और अधिक पर देखें।",
    watchEverywhere: "हर जगह देखें",
    watchEverywhereDesc: "अपने फोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड मूवीज़ और टीवी शो स्ट्रीम करें।",
    download: "अपने शो डाउनलोड करें और ऑफलाइन देखें",
    downloadDesc: "अपने पसंदीदा को आसानी से सहेजें और हमेशा देखने के लिए कुछ न कुछ रखें।",
    kids: "बच्चों के लिए प्रोफाइल बनाएं",
    kidsDesc: "बच्चों को उनके पसंदीदा पात्रों के साथ रोमांच पर भेजें, एक ऐसी जगह में जो केवल उनके लिए बनाई गई है — आपकी सदस्यता के साथ मुफ्त।",
    faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
    faq1: "नेटफ्लिक्स क्या है?",
    faq2: "नेटफ्लिक्स की लागत कितनी है?",
    faq3: "मैं कहां देख सकता हूं?",
    faq4: "मैं कैसे रद्द करूं?",
    faq5: "मैं नेटफ्लिक्स पर क्या देख सकता हूं?",
    faq6: "क्या नेटफ्लिक्स बच्चों के लिए अच्छा है?",
    footerContact: "प्रश्न? 000-800-919-1694 पर कॉल करें",
  },
};

function setLanguage(language) {
  const content = translations[language];

  // Update hero section
  document.querySelector(".hero > :nth-child(1)").textContent = content.heroTitle;
  document.querySelector(".hero > :nth-child(2)").textContent = content.heroSubtitle;
  document.querySelector(".hero > :nth-child(3)").textContent = content.heroPrompt;

  // Update first section
  document.querySelector(".first > div > :nth-child(1)").textContent = content.enjoy;
  document.querySelector(".first > div > :nth-child(2)").textContent = content.enjoyDesc;

  // Update second section
  document.querySelector(".second > .watch > :nth-child(1)").textContent = content.watchEverywhere;
  document.querySelector(".second > .watch > :nth-child(2)").textContent = content.watchEverywhereDesc;

  // Update third section
  document.querySelector(".third > div > :nth-child(1)").textContent = content.download;
  document.querySelector(".third > div > :nth-child(2)").textContent = content.downloadDesc;

  // Update fourth section
  document.querySelector(".fourth > .watch > :nth-child(1)").textContent = content.kids;
  document.querySelector(".fourth > .watch > :nth-child(2)").textContent = content.kidsDesc;

  // Update FAQ section
  document.querySelector("section > h2").textContent = content.faqTitle;
  const faqContents = document.querySelectorAll(".faq-content > span");
  faqContents[0].textContent = content.faq1;
  faqContents[1].textContent = content.faq2;
  faqContents[2].textContent = content.faq3;
  faqContents[3].textContent = content.faq4;
  faqContents[4].textContent = content.faq5;
  faqContents[5].textContent = content.faq6;

  // Update footer
  document.querySelector(".cook > p").textContent = content.footerContact;
}
function toggleDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }