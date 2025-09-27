import React from 'react';
import {
  FAQRoot,
  FAQGrid,
  FAQLeft,
  FAQTitle,
  FAQSubtitle,
  FAQQuestion,
  FAQAnswer,
  FAQButton,
  FAQRight,
  FAQCard,
  FAQCardTitle,
  FAQCardContent,
  FAQCardIcon,
} from '../styles/FAQSection.styles';
import faqContent from '../content/faqSectionContent';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const FAQSection = () => (
  <FAQRoot>
    <FAQGrid>
      <FAQLeft>
        <FAQTitle>{faqContent.left.title}</FAQTitle>
        <FAQSubtitle>{faqContent.left.subtitle}</FAQSubtitle>
        <FAQQuestion>{faqContent.left.question}</FAQQuestion>
        <FAQAnswer>{faqContent.left.answer}</FAQAnswer>
        <FAQButton variant="contained" color="warning">
          {faqContent.left.button}
        </FAQButton>
      </FAQLeft>
      <FAQRight>
        {faqContent.right.map((faq, idx) => (
          <FAQCard key={idx}>
            <FAQCardTitle>
              {faq.question}
              <FAQCardIcon>
                <InfoOutlinedIcon fontSize="small" />
              </FAQCardIcon>
            </FAQCardTitle>
            <FAQCardContent>{faq.answer}</FAQCardContent>
          </FAQCard>
        ))}
      </FAQRight>
    </FAQGrid>
  </FAQRoot>
);

export default FAQSection;