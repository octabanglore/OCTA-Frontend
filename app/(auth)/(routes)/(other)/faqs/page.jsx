import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqData from "./faqs.json";

const FAQs = () => {
  return (
    <>
      <div className="custom-h3 custom-text-grey800 mb-8">FAQs</div>
      <Accordion type="single" collapsible>
        {faqData.map((item) => (
          <AccordionItem value={item.id} key={item.id} className="mb-2 w-9/12">
            <AccordionTrigger className="custom-h6">
              {item.heading}
            </AccordionTrigger>
            <AccordionContent className="custom-b2 custom-text-grey600">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default FAQs;
