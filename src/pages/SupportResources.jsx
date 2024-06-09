import React from "react";
import Footer from "../component/Footer";

const SupportResources = () => {
  const articles = [
    {
      id: 1,
      title: "Recognizing the Signs of Suicide",
      content:
        "Recognizing the signs of suicide is crucial for intervention and prevention efforts. Some common signs include changes in behavior, such as withdrawal from social activities, sudden mood swings, and increased substance abuse.",
      supportMaterial: [
        {
          id: 1,
          name: "National Suicide Prevention Lifeline",
          link: "https://suicidepreventionlifeline.org/",
        },
        {
          id: 2,
          name: "Crisis Text Line",
          link: "https://www.crisistextline.org/",
        },
      ],
    },
    {
      id: 2,
      title: "Coping Strategies for Mental Health",
      content:
        "Coping strategies for mental health involve various techniques to manage stress, anxiety, and depression. Some effective coping strategies include practicing mindfulness and meditation, engaging in regular physical activity, maintaining a healthy diet, and getting enough sleep.",
      supportMaterial: [
        { id: 3, name: "Mindful", link: "https://www.mindful.org/" },
        { id: 4, name: "Headspace", link: "https://www.headspace.com/" },
      ],
    },
    {
      id: 3,
      title: "Supporting Loved Ones in Crisis",
      content:
        "Supporting loved ones in crisis can be challenging but essential. Listen actively, express empathy, and offer non-judgmental support. Encourage them to seek professional help if needed.",
      supportMaterial: [
        {
          id: 5,
          name: "NAMI - National Alliance on Mental Illness",
          link: "https://www.nami.org/",
        },
        {
          id: 6,
          name: "SAMHSA - Substance Abuse and Mental Health Services Administration",
          link: "https://www.samhsa.gov/",
        },
      ],
    },
  
    {
      id: 4,
      title: "Understanding the Impact of Bullying on Mental Health",
      content:
        "Bullying can have a severe impact on mental health, leading to increased stress, anxiety, and depression. Understanding the signs of bullying and providing support to those affected is essential for prevention.",
      supportMaterial: [
        {
          id: 7,
          name: "StopBullying.gov",
          link: "https://www.stopbullying.gov/",
        },
        {
          id: 8,
          name: "Pacer's National Bullying Prevention Center",
          link: "https://www.pacer.org/bullying/",
        },
      ],
    },
    {
      id: 5,
      title: "Promoting Emotional Wellness in the Workplace",
      content:
        "Creating a supportive work environment that prioritizes emotional wellness can lead to increased productivity and job satisfaction. Employers can implement strategies such as employee assistance programs, mental health resources, and stress management workshops.",
      supportMaterial: [
        {
          id: 9,
          name: "Mental Health America - Workplace Wellness",
          link: "https://www.mhanational.org/workplace-wellness",
        },
        {
          id: 10,
          name: "CDC - Workplace Health Promotion",
          link: "https://www.cdc.gov/workplacehealthpromotion/index.html",
        },
      ],
    },
    {
      id: 6,
      title: "Navigating Grief and Loss",
      content:
        "Grief and loss are natural responses to various life experiences, including the death of a loved one, divorce, or job loss. It's essential to acknowledge and process these emotions while seeking support from friends, family, or professional counselors.",
      supportMaterial: [
        {
          id: 11,
          name: "GriefShare - Grief Recovery Support Groups",
          link: "https://www.griefshare.org/",
        },
        {
          id: 12,
          name: "American Hospice Foundation - Coping with Loss",
          link: "https://americanhospice.org/coping-with-loss/",
        },
      ],
    },
  
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mt-8 mb-8 text-purple-600 ">
        Support Resources for Suicide Prevention 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white border-2 p-6 rounded-lg shadow-md transition duration-300 hover:bg-purple-100 cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-purple-600 mb-4">
              {article.title}
            </h2>
            <p className="text-gray-700">{article.content}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Support Material:</h3>
              <ul className="text-gray-700">
                {article.supportMaterial.map((material) => (
                  <li key={material.id} className="mb-1">
                    <a
                      href={material.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-blue-500"
                    >
                      {material.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
   <div className="mt-9">
   <Footer/>
   </div>
    </div>
  );
};

export default SupportResources;
