import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debugger: true,
    lng: "en",
    resources: {
        en: {
            translation: {
                websitename: "The Daily News",
                Home: "Home",
                Categories: "Categories",
                LatestNews: "Latest News",
                BreakingNews: "Breaking News",
                Contact: "Contact",
                featurednews: "Featured News",
                LatestNews: "Latest News",
                FollowUs: "Follow Us",
                BusinessNews : "Business News",
                Newsletter: "Newsletter",
                Newslettertext: "Your email address will not be this published. Required fields are News Today.",
                Send: "Send",
                Sports: "Sports",
                Business: "Business",
                Entertainment: "Entertainment",
                LifeandLiving: "Life&Living",
                Youth: "Youth",
                Tech: "Tech",
                Multimedia: "Multimedia",
                Politics: "Politics",
                News: "News",
                Social: "Social",
                Copyrighttext: "All right reserved by The Daily News",
                sn1title: "Passenger numbers plummet on Bangladesh-India routes following Aug 5",
                sn2title: "Hasina 'destroyed' Bangladesh's institutions: Yunus",
                sn3title: "Short gunning for Warner's vacant slot",
                sn4title: "Taskforce formed for banking reforms",
                sn5title: "US-Bangla starts direct flight from Dhaka to Jeddah",
                sn6title: "Six killed in Cox’s Bazar landslides amid relentless rain",
                sn7title: "Our expectations from Dhaka University",
                sn8title: "Govt may miss Aman acreage target",
                sn9title: "Gaza: where sickness can be ‘death sentence’",
                sn10title: "Shah Abdul Karim, the Baul king who sang his soul",
                n1title: "The case of disgruntled DC aspirants",
                n1shortdes: "In a stunning departure from the disciplined nature of public service, chaos erupted at the heart of Bangladesh's Ministry of Public Administration on September 10. Mid-level civil servants, frustrated with the recent appointment of 59 deputy commissioners (DCs), openly protested at the secretariat, shouting slogans and shoving senior officials—a scene unimaginable in the typically hierarchical and rule-bound structure of bureaucracy. The discontent stems from allegations of favouritism and unfairness in the selection process, as many aspiring DCs found themselves bypassed in favour of others.",
                n2title: "Why do people buy iPhones? We asked Apple users",
                n3title: "Samsung Electronics to fire 30% of overseas employees: report ",
                n4title: "Microsoft hosts summit to discuss CrowdStrike outage",
                n5title: "Protecting innovation: The need to keep politics out of startup funding",
                n6title: "Luxury hotels fall silent as business travellers fade away",
                n6shortdes: "Luxury hotels in Dhaka are yet to resume normal business activities as foreign and local clients do not...",
                n7title: "Optimism of US firms in China at record lows: report",
                n7shortdes: "People queue to enter a Nike shop at a shopping mall in Beijing. A report by the EU ....",
                n8title: "Asia Insurance fined for embezzling Tk 2.27cr",
                n8shortdes: "The Bangladesh Financial Intelligence Unit (BFIU), a wing of the country's central bank responsible for investigating money laundering, has fined Asia .....",
                n9title: "China gives duty-free access to all products of Bangladesh",
                n9shortdes: "China has decided to provide 100 percent duty-free access to products from Bangladesh, as well as other least developed countries (LDCs).",
                n10title: "Ronaldo first to garner billion-strong following on socials",
                n11title: "Batter Shakib at crossroads?", 
                n12title: "Yamal wants to become a Barcelona 'legend'", 
                n13title: "Calm before derby storm for Inter as dark fan underbelly revealed", 
                n14title: "An alarming brain drain crisis / Why are Bangladesh's brightest engineering minds leaving?",
                n14shortdes: "Every once in a while, the term brain drain pops up in discussions to dissect the migration of so many Bangladeshi students to foreign countries. Although the migration takes place in pursuit of higher studies, most of these students have no intention to return to the country.", 
            },
        },
        bn : {
            translation: {
                websitename: "দৈনিক পত্রিকা",
                Home: "হোম",
                Categories: "বিভাগসমূহ",
                LatestNews: "সর্বশেষ সংবাদ",
                BreakingNews: "ব্রেকিং নিউজ",
                Contact: "যোগাযোগ",
                featurednews: "বৈশিষ্ট্যযুক্ত সংবাদ",
                LatestNews: "সর্বশেষ সংবাদ",
                FollowUs: "আমাদের অনুসরণ করুন",
                BusinessNews: "ব্যবসায়িক সংবাদ",
                Newsletter: "নিউজলেটার",
                Newslettertext: "আপনার ইমেইল ঠিকানা প্রকাশ করা হবে না। প্রয়োজনীয় ফিল্ডগুলি আজকের সংবাদ।",
                Send: "পাঠান",
                Sports: "খেলাধুলা",
                Business: "ব্যবসা",
                Entertainment: "বিনোদন",
                LifeandLiving: "জীবনধারা",
                Youth: "যুব",
                Tech: "প্রযুক্তি",
                Multimedia: "মাল্টিমিডিয়া",
                Politics: "রাজনীতি",
                News: "সংবাদ",
                Social: "সামাজিক যোগাযোগ মাধ্যম",
                Copyrighttext: "সর্বস্বত্ব সংরক্ষিত দৈনিক পত্রিকা দ্বারা",
                sn1title: "৫ আগস্টের পর বাংলাদেশ-ভারত রুটে যাত্রীর সংখ্যা কমেছে",
                sn2title: "বাংলাদেশের প্রতিষ্ঠানগুলো ধ্বংস করেছেন হাসিনা: ইউনূস",
                sn3title: "ওয়ার্নারের শূন্যস্থান পূরণের জন্য শর্ট তৈরি",
                sn4title: "ব্যাংকিং সংস্কারের জন্য টাস্কফোর্স গঠন",
                sn5title: "ঢাকা থেকে জেদ্দা সরাসরি ফ্লাইট চালু করেছে ইউএস-বাংলা",
                sn6title: "অবিরাম বৃষ্টির মধ্যে কক্সবাজারে ভূমিধসে ছয়জন নিহত",
                sn7title: "ঢাকা বিশ্ববিদ্যালয় থেকে আমাদের প্রত্যাশা",
                sn8title: "আমন চাষের লক্ষ্যমাত্রা পূরণ করতে পারে না সরকার",
                sn9title: "গাজা: যেখানে অসুস্থতা হতে পারে ‘মৃত্যুদণ্ড’",
                sn10title: "শাহ আবদুল করিম, বাউল সম্রাট যিনি আত্মার গান গেয়েছেন",
                n1title: "অসন্তুষ্ট ডিসি প্রার্থীদের বিক্ষোভ",
                n1shortdes: "বাংলাদেশের জনপ্রশাসন মন্ত্রণালয়ের কেন্দ্রস্থলে বিশৃঙ্খলার এক অবিশ্বাস্য দৃশ্য দেখা গেল ১০ সেপ্টেম্বর। ৫৯ জন উপকমিশনার (ডিসি) নিয়োগের সাম্প্রতিক প্রক্রিয়ায় অসন্তুষ্ট মধ্যম সারির সরকারি কর্মকর্তারা প্রকাশ্যে বিক্ষোভ শুরু করেন। তারা সচিবালয়ে উচ্চপদস্থ কর্মকর্তাদের সামনে স্লোগান দেন এবং ধাক্কাধাক্কি করেন—যা সাধারণত শৃঙ্খলাবদ্ধ এবং নিয়মিত সরকারি কাঠামোর মধ্যে কল্পনা করা যায় না। তাদের অসন্তোষের কারণ হলো নিয়োগ প্রক্রিয়ায় পক্ষপাতিত্ব এবং অবিচারের অভিযোগ, যেখানে অনেক আশাবাদী ডিসি প্রার্থীকে উপেক্ষা করে অন্যদের অগ্রাধিকার দেওয়া হয়েছে।",
                n2title: "মানুষ কেন আইফোন কিনে? আমরা অ্যাপল ব্যবহারকারীদের জিজ্ঞাসা করেছি",
                n3title: "স্যামসাং ইলেকট্রনিকস ৩০% বিদেশি কর্মী ছাঁটাই করবে: প্রতিবেদন",
                n4title: "ক্রাউডস্ট্রাইক আউটেজ নিয়ে আলোচনা করতে মাইক্রোসফ্ট শীর্ষ সম্মেলন আয়োজন করেছে",
                n5title: "উদ্ভাবন রক্ষা: স্টার্টআপ তহবিল থেকে রাজনীতি দূরে রাখার প্রয়োজন",
                n6title: "ব্যবসায়িক ভ্রমণকারীদের অনুপস্থিতিতে বিলাসবহুল হোটেলগুলো নিস্তব্ধ",
                n6shortdes: "ঢাকার বিলাসবহুল হোটেলগুলো এখনও স্বাভাবিক ব্যবসায়িক কার্যক্রম শুরু করতে পারেনি কারণ বিদেশি এবং স্থানীয় গ্রাহকরা এখনও...",
                n7title: "চীনে মার্কিন কোম্পানিগুলোর আশাবাদ সর্বনিম্ন পর্যায়ে: প্রতিবেদন",
                n7shortdes: "বেইজিংয়ের একটি শপিং মলে নাইকি দোকানে প্রবেশের জন্য মানুষ সারিবদ্ধভাবে দাঁড়িয়ে আছে। ইউরোপীয় ইউনিয়নের একটি প্রতিবেদনে উল্লেখ করা হয়েছে....",
                n8title: "২.২৭ কোটি টাকা আত্মসাৎ করার জন্য এশিয়া ইন্স্যুরেন্সকে জরিমানা",
                n8shortdes: "দেশের কেন্দ্রীয় ব্যাংকের অধীন মানি লন্ডারিং তদন্তের জন্য দায়ী বাংলাদেশ ফিনান্সিয়াল ইন্টেলিজেন্স ইউনিট (বিএফআইইউ) এশিয়া ইন্স্যুরেন্সকে জরিমানা করেছে...",
                n9title: "চীন বাংলাদেশের সকল পণ্যের জন্য শুল্কমুক্ত অ্যাক্সেস দিয়েছে",
                n9shortdes: "চীন বাংলাদেশ সহ অন্যান্য সর্বনিম্ন উন্নয়নশীল দেশগুলির (LDCs) পণ্যের জন্য ১০০ শতাংশ শুল্কমুক্ত অ্যাক্সেস প্রদান করার সিদ্ধান্ত নিয়েছে।",
                n10title: "সোশ্যাল মিডিয়ায় এক বিলিয়ন ফলোয়ার অর্জনকারী প্রথম ব্যক্তি রোনালদো",
                n11title: "ব্যাটার শাকিব কি সিদ্ধান্তের সন্ধিক্ষণে?",
                n12title: "ইয়ামাল বার্সেলোনার 'লিজেন্ড' হতে চান",
                n13title: "ইন্টার ডার্বির আগে শান্ত পরিবেশ, ফ্যানদের অন্ধকার দিক উন্মোচিত",
                n14title: "উদ্বেগজনক ব্রেন ড্রেন সংকট / কেন বাংলাদেশের সেরা প্রকৌশলী মেধাবীরা দেশ ছেড়ে চলে যাচ্ছেন?",
                n14shortdes: "প্রতি সময়ে সময়ে ব্রেন ড্রেন শব্দটি উঠে আসে, যখন বাংলাদেশি শিক্ষার্থীদের বিদেশে যাওয়ার আলোচনা হয়। যদিও এই অভিবাসন উচ্চশিক্ষার জন্য হয়, বেশিরভাগ শিক্ষার্থীরই দেশে ফিরে আসার কোনো ইচ্ছা থাকে না।"

            },
        }
    }
})