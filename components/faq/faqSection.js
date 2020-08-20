import HeadingSecondary from "../heading/secondaryHeading";

import FaqComponent from "./faqComponent";

const FaqSection = () => {
  return (
    <section className="top-section-pt">
      <div className="container">
        <HeadingSecondary
          text="F.A.Q"
          classList="font-weight-bold color-secondary text-center"
        />
        <div className="mt-4">
          <FaqComponent
            classList="mt-3"
            question="How to contact with Customer Service?"
            answer="Our Customer Experience Team is available 7 days a week and we offer 2
          ways to get in contact.Email and Chat . We try to reply quickly, so
          you need not to wait too long for a response!."
          />
          <FaqComponent
            classList="mt-3"
            question="How to contact with Customer Service?"
            answer="Our Customer Experience Team is available 7 days a week and we offer 2
          ways to get in contact.Email and Chat . We try to reply quickly, so
          you need not to wait too long for a response!."
          />
          <FaqComponent
            classList="mt-3"
            question="How to contact with Customer Service?"
            answer="Our Customer Experience Team is available 7 days a week and we offer 2
          ways to get in contact.Email and Chat . We try to reply quickly, so
          you need not to wait too long for a response!."
          />
          <FaqComponent
            classList="mt-3"
            question="How to contact with Customer Service?"
            answer="Our Customer Experience Team is available 7 days a week and we offer 2
          ways to get in contact.Email and Chat . We try to reply quickly, so
          you need not to wait too long for a response!."
          />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
