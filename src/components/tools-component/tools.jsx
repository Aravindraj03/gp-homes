import React, { useState } from "react";

const Tools = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "How can I confirm that you have received my reservation?",
      answer:
        "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    },
    {
      question: "Up to what age are they considered children?",
      answer:
        "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    },
    {
      question: "Do you have any discount code?",
      answer:
        "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    },
    {
      question: "How can I get in touch with my hotel?",
      answer:
        "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    },
    {
      question: "On the last day, can I leave the room later?",
      answer:
        "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    },
    {
      question: "Can I cancel my reservation?",
      answer:
        "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    },
    {
      question: "Do you have hotels with a spa?",
      answer:
        "Lorem ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine. Donec in quis the pellentesque velit id velit ac arcu posuere blane.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="accordion-box clearfix">
              {faqItems.map((item, index) => (
                <li
                  className={`accordion block ${
                    activeIndex === index ? "active" : ""
                  }`}
                  key={index}
                >
                  <div
                    className="acc-btn"
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.question}
                  </div>
                  {activeIndex === index && (
                    <div className="acc-content">
                      <div className="content">
                        <div className="text">{item.answer}</div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
