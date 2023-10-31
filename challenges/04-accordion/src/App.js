import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  function handleOpen(index) {
    if (index === openIndex) {
      setOpenIndex(null);
      return;
    }
    setOpenIndex(index);
  }

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          faq={faq}
          index={index}
          key={faq.title}
          open={index === openIndex}
          handleOpen={handleOpen}
        >
          {faq.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ faq, index, open, handleOpen, children }) {
  return (
    <div
      className={`item ${open ? "open" : ""}`}
      onClick={() => handleOpen(index)}
    >
      <p className="number">{index < 10 ? `0${index}` : `${index}`}</p>

      <p className="title">{faq.title}</p>
      <p className="icon">{open ? "-" : "+"}</p>
      {open && <p className="content-box">{children}</p>}
    </div>
  );
}
