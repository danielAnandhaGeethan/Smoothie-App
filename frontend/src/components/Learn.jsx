import React from "react";
import HeroSlider from "hero-slider";
import { Slide } from "hero-slider";
import history from "../assets/smoothie_history.jpg";
import desc from "../assets/smoothie_desc.jpg";
import benefit from "../assets/smoothie_benefit.jpg";

const About = () => {
  const content = [
    {
      title: "WHAT IS SMOOTHIE",
      image: desc,
      text: "A smoothie is a blended beverage typically made by combining a variety of ingredients such as fruits, vegetables, liquids (like milk or yogurt), and additional elements like ice or sweeteners. The mixture is blended until smooth, resulting in a thick, creamy, and flavorful drink. Smoothies are popular for their refreshing and versatile nature, offering a convenient way to incorporate a wide range of nutrients into one tasty serving. They can be enjoyed as a quick and nutritious snack, a meal replacement, or a post-workout refresher. The beauty of smoothies lies in their adaptability, allowing individuals to tailor recipes to their taste preferences and dietary needs.",
    },
    {
      title: "HISTORY OF SMOOTHIE",
      image: history,
      text: "The smoothie's history began in the mid-20th century, with the term 'smoothie' coined in the 1960s for blended fruit and yogurt drinks. Initially a health-focused beverage, smoothies gained popularity in the 1970s and 1980s, becoming a staple in health food stores and juice bars. The 1990s saw a surge in smoothie consumption, thanks to powerful blenders and a fitness-conscious culture. Today, smoothies are beloved for their convenience and ability to blend a variety of nutritious ingredients into a delicious and vibrant drink.",
    },
    {
      title: "BENEFITS OF SMOOTHIE",
      image: benefit,
      text: "Smoothies are a powerhouse of health benefits, delivering a burst of vitamins, minerals, and antioxidants from fresh fruits and vegetables. Packed with fiber for digestion and a feeling of fullness, they support weight management. The versatility of smoothies allows for easy incorporation of protein, aiding in muscle repair and post-workout recovery. The hydration from liquid components contributes to overall fluid balance. With customizable recipes, smoothies offer a delicious and accessible way to meet various nutritional needs, making them a convenient and nutritious choice for overall well-being.",
    },
  ];

  return (
    <div className="mt-36 w-full" name="learn">
      <div className="p-20">
        <HeroSlider
          height="80vh"
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
          }}
        >
          {content.map((display) => (
            <div>
              <Slide
                background={{
                  backgroundImage: `url(${display.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="relative h-full px-10 pb-32 pt-20 text-white bg-black bg-opacity-30 flex flex-col justify-between">
                  <div className="text-5xl font-bold font-serif">
                    {display.title}
                  </div>
                  <div className="text-3xl font-serif">{display.text}</div>
                </div>
              </Slide>
            </div>
          ))}
        </HeroSlider>
      </div>
    </div>
  );
};

export default About;
