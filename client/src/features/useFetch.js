import axios from 'axios';

// const dummyData = [
//     {
//         "Gis": "ሰላም",
//         "phonetic": "selam",
//         "part_of_speech": "noun",
//         "translation": "peace",
//         "root": "ሰላም",
//         "plural": "ሰላማት",
//         "synonyms": "ፍቅር",
//         "antonyms": "ጸብእ",
//         "example_usage": "ሰላም በሰላም ይነብር።",
//         "derived_forms": "ሰላማዊ",
//         "etymology": "Geez origin, meaning tranquility",
//         "gender": "neutral",
//         "audio_pronunciation": null,
//         "notes": "Used as a greeting and concept of peace"
//       },
//       {
//         "Gis": "ምንዳቤ",
//         "phonetic": "mindabe",
//         "part_of_speech": "noun",
//         "translation": "idea",
//         "root": "ምንዳቤ",
//         "plural": "ምንዳቤያት",
//         "synonyms": "ዓጸባ",
//         "antonyms": "ጣዕም",
//         "example_usage": "ረከቦሙ ምንዳቤ ለዮሴፍ ወማርያም።",
//         "derived_forms": null,
//         "etymology": "Innovative thinking in Geez culture",
//         "gender": "neutral",
//         "audio_pronunciation": null,
//         "notes": "Represents thoughts or concepts"
//       },
//       {
//         "Gis": "ስም",
//         "phonetic": "sim",
//         "part_of_speech": "noun",
//         "translation": "name",
//         "root": "ስም",
//         "plural": "አስማት",
//         "synonyms": "ተጸውዖ",
//         "antonyms": null,
//         "example_usage": "ስም ይመርሕ ወማሕቶት ያበርህ።",
//         "derived_forms": "ተሰምየ",
//         "etymology": "Literal meaning of identification",
//         "gender": "neutral",
//         "audio_pronunciation": null,
//         "notes": "Found in spiritual texts"
//       },
// ]

const URL = "http://127.0.0.1:8000/api/gis/"

export const fetchVberbs = async () => {
  try {
    const response = await axios.get(URL)
    console.log("API Response:", response);  // Log the full response
    console.log("API Response Data:", response.data);

    return response.data

  } catch (error) {
    console.error("Error fetching verbs:", error.message);
    return [];
  }
}

