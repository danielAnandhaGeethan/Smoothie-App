import React from "react";
import HeroSlider from "hero-slider";
import { Slide } from "hero-slider";
import history from "../assets/smoothie_history.jpg";
import desc from "../assets/smoothie_desc.jpg";
import benefit from "../assets/smoothie_benefit.jpg";

const About = () => {
  const content = [
    {
      title: "WHAT IS A SMOOTHIE",
      image: desc,
      text: "A smoothie is a blended beverage crafted by combining fruits, vegetables, liquids (such as milk or yogurt), and extras like ice or sweeteners. Blended until smooth, it yields a thick, creamy, and flavorful drink. Smoothies are renowned for their refreshing and flexible nature, providing a convenient means to pack a variety of nutrients into a single, delicious serving. Ideal for a quick and nutritious snack, a meal replacement, or a post-workout refresher, smoothies' beauty lies in their adaptability. Individuals can customize recipes to suit their taste preferences and dietary requirements.",
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
    <div className="lg:block mt-36 w-full hidden" name="learn">
      <div className="py-28 px-36">
        <HeroSlider
          height="75vh"
          autoplay
          controller={{
            initialSlide: 1,
            slidingDuration: 500,
            slidingDelay: 100,
          }}
        >
          {content.map((display, index) => (
            <div key={index}>
              <Slide>
                <div
                  style={{
                    backgroundImage: `url(${display.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "10%",
                    height: "100%",
                  }}
                  className="px-10 pb-32 pt-20"
                >
                  <div className="relative h-[130%] bg-opacity-30 bg-black rounded-[30px] shadow-full blur-[3px]"></div>
                  <div className="absolute -mt-[350px] z-10 text-white gap-5 py-5 px-10 flex flex-col justify-between">
                    <div className="text-3xl font-bold font-serif">
                      {display.title}
                    </div>
                    <div className="text-2xl font-serif">{display.text}</div>
                  </div>
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
