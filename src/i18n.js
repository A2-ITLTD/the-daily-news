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
                sn1title: "Passenger numbers plummet on Bangladesh-India routes following Aug 5",
                sn2title: "Hasina 'destroyed' Bangladesh's institutions: Yunus",
                sn3title: "Short gunning for Warner's vacant slot",
                sn4title: "Taskforce formed for banking reforms",
                sn5title: "US-Bangla starts direct flight from Dhaka to Jeddah",
                n1title: "The case of disgruntled DC aspirants",
                n1shortdes: "In a stunning departure from the disciplined nature of public service, chaos erupted at the heart of Bangladesh's Ministry of Public Administration on September 10. Mid-level civil servants, frustrated with the recent appointment of 59 deputy commissioners (DCs), openly protested at the secretariat, shouting slogans and shoving senior officials—a scene unimaginable in the typically hierarchical and rule-bound structure of bureaucracy. The discontent stems from allegations of favouritism and unfairness in the selection process, as many aspiring DCs found themselves bypassed in favour of others.",
                n2title: "Why do people buy iPhones? We asked Apple users",
                n3title: "Samsung Electronics to fire 30% of overseas employees: report ",
                n4title: "Microsoft hosts summit to discuss CrowdStrike outage",
                n5title: "Protecting innovation: The need to keep politics out of startup funding",
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
                sn1title: "৫ আগস্টের পর বাংলাদেশ-ভারত রুটে যাত্রীর সংখ্যা কমেছে",
                sn2title: "বাংলাদেশের প্রতিষ্ঠানগুলো ধ্বংস করেছেন হাসিনা: ইউনূস",
                sn3title: "ওয়ার্নারের শূন্যস্থান পূরণের জন্য শর্ট তৈরি",
                sn4title: "ব্যাংকিং সংস্কারের জন্য টাস্কফোর্স গঠন",
                sn5title: "ঢাকা থেকে জেদ্দা সরাসরি ফ্লাইট চালু করেছে ইউএস-বাংলা",
                n1title: "অসন্তুষ্ট ডিসি প্রার্থীদের বিক্ষোভ",
                n1shortdes: "বাংলাদেশের জনপ্রশাসন মন্ত্রণালয়ের কেন্দ্রস্থলে বিশৃঙ্খলার এক অবিশ্বাস্য দৃশ্য দেখা গেল ১০ সেপ্টেম্বর। ৫৯ জন উপকমিশনার (ডিসি) নিয়োগের সাম্প্রতিক প্রক্রিয়ায় অসন্তুষ্ট মধ্যম সারির সরকারি কর্মকর্তারা প্রকাশ্যে বিক্ষোভ শুরু করেন। তারা সচিবালয়ে উচ্চপদস্থ কর্মকর্তাদের সামনে স্লোগান দেন এবং ধাক্কাধাক্কি করেন—যা সাধারণত শৃঙ্খলাবদ্ধ এবং নিয়মিত সরকারি কাঠামোর মধ্যে কল্পনা করা যায় না। তাদের অসন্তোষের কারণ হলো নিয়োগ প্রক্রিয়ায় পক্ষপাতিত্ব এবং অবিচারের অভিযোগ, যেখানে অনেক আশাবাদী ডিসি প্রার্থীকে উপেক্ষা করে অন্যদের অগ্রাধিকার দেওয়া হয়েছে।",
                n2title: "মানুষ কেন আইফোন কিনে? আমরা অ্যাপল ব্যবহারকারীদের জিজ্ঞাসা করেছি",
                n3title: "স্যামসাং ইলেকট্রনিকস ৩০% বিদেশি কর্মী ছাঁটাই করবে: প্রতিবেদন",
                n4title: "ক্রাউডস্ট্রাইক আউটেজ নিয়ে আলোচনা করতে মাইক্রোসফ্ট শীর্ষ সম্মেলন আয়োজন করেছে",
                n5title: "উদ্ভাবন রক্ষা: স্টার্টআপ তহবিল থেকে রাজনীতি দূরে রাখার প্রয়োজন"

            },
        }
    }
})