import React from 'react';
import {
  AboutUsRoot,
  ContentContainer,
  AnimatedSection,
  HeroTitle,
  SectionTitle,
  ContentCard,
  BodyText,
  IntroText,
  HighlightText,
  ResponsiveGrid,
  MissionCard,
  VisionCard
} from '../StyledComponents/AboutUs.styled';

function AboutUs() {
  return (
    <AboutUsRoot>
      <ContentContainer>
        {/* Hero Section */}
        <AnimatedSection direction="up" delay="0s">
          <HeroTitle variant="h1">
            हमारे बारे में
          </HeroTitle>
          <IntroText>
            सवर्ण आर्मी में आपका स्वागत है, जो एक गतिशील संगठन है जो भारत में 
            सामान्य वर्ग के अधिकारों और हकों की वकालत करने के लिए प्रतिबद्ध है।
          </IntroText>
        </AnimatedSection>

        {/* Introduction Section */}
        <AnimatedSection direction="left" delay="0.2s">
          <ContentCard>
            <SectionTitle variant="h2">
              हमारी शुरुआत
            </SectionTitle>
            <BodyText>
              <HighlightText>2017 में स्थापित</HighlightText>, हमारी यात्रा जाति, धर्म, लिंग और भाषा के आधार पर 
              भेदभाव के खिलाफ संवैधानिक आदेश के बावजूद, सामान्य वर्ग द्वारा सामना किए जा रहे लगातार भेदभाव 
              की प्रतिक्रिया के रूप में शुरू हुई।
            </BodyText>
          </ContentCard>
        </AnimatedSection>

        {/* Mission Section */}
        <AnimatedSection direction="right" delay="0.4s">
          <MissionCard>
            <SectionTitle variant="h2">
              हमारा मिशन
            </SectionTitle>
            <BodyText>
              सवर्ण आर्मी में, हम <HighlightText>भारत के संविधान में निर्धारित सिद्धांतों</HighlightText> में 
              विश्वास करते हैं, जो स्पष्ट रूप से जाति, धर्म, लिंग या भाषा के आधार पर किसी भी नागरिक के साथ 
              भेदभाव की निंदा करता है।
            </BodyText>
            <BodyText>
              इन संवैधानिक सुरक्षा उपायों के बावजूद, सामान्य वर्ग को जाति के आधार पर लगातार भेदभाव का सामना 
              करना पड़ा है। इस उपेक्षा के जवाब में, हमने एक स्टैंड लिया और <HighlightText>2017 में सामान्य वर्ग 
              के लिए अपनी आवाज़ उठाई</HighlightText>।
            </BodyText>
            <BodyText>
              जैसे-जैसे समय आगे बढ़ा, हमारे विचार ऐसे व्यक्तियों की बढ़ती संख्या के साथ गूंजते रहे, जो हमारी तरह, 
              सामान्य वर्ग के सामने आने वाली चुनौतियों का समाधान करने के बारे में भावुक थे।
            </BodyText>
          </MissionCard>
        </AnimatedSection>

        {/* Responsive Grid for Organization and Formation */}
        <ResponsiveGrid>
          <AnimatedSection direction="left" delay="0.6s">
            <ContentCard>
              <SectionTitle variant="h2">
                परिवर्तन के लिए आयोजन
              </SectionTitle>
              <BodyText>
                <HighlightText>व्यवस्थित परिवर्तन की आवश्यकता</HighlightText> को पहचानते हुए और यह महसूस करते हुए 
                कि समाज को संगठन की आवश्यकता है, हमने एक सामान्य उद्देश्य के तहत लोगों को एकजुट करने की यात्रा शुरू की।
              </BodyText>
              <BodyText>
                हमारे समाज में बुद्धिजीवियों के साथ चर्चा के माध्यम से, हमने एक मजबूत संगठन की आवश्यकता की पहचान 
                की जो किसी भी जाति या धर्म के प्रति ईर्ष्या या घृणा के बिना सामान्य वर्ग के अधिकारों और अधिकारों के 
                लिए लड़ने के लिए एक मंच के रूप में काम कर सके।
              </BodyText>
            </ContentCard>
          </AnimatedSection>

          <AnimatedSection direction="right" delay="0.8s">
            <ContentCard>
              <SectionTitle variant="h2">
                सवर्ण आर्मी का गठन
              </SectionTitle>
              <BodyText>
                समाज के बुद्धिजीवियों के मार्गदर्शन के अनुरूप <HighlightText>सवर्ण आर्मी का जन्म हुआ</HighlightText>। 
                हमारे संगठन की विशेषता इसका सक्रिय और उत्साही दृष्टिकोण है, जो समाज में सकारात्मक बदलाव लाना चाहता है।
              </BodyText>
              <BodyText>
                हम सामान्य वर्ग के अधिकारों के लिए लड़ने और हमारे समुदाय के सामने आने वाली विभिन्न चुनौतियों का 
                समाधान करने की अपनी प्रतिबद्धता में एकजुट हैं।
              </BodyText>
            </ContentCard>
          </AnimatedSection>
        </ResponsiveGrid>

        {/* Vision Section */}
        <AnimatedSection direction="up" delay="1s">
          <VisionCard>
            <SectionTitle variant="h2">
              हमारा दृष्टिकोण
            </SectionTitle>
            <BodyText>
              सवर्ण आर्मी एक ऐसे समाज की कल्पना करती है जहां <HighlightText>जाति, धर्म या किसी अन्य कारक के 
              आधार पर भेदभाव खत्म हो जाए</HighlightText>। हम ईर्ष्या या घृणा से रहित एकता का माहौल बनाने का प्रयास 
              करते हैं, जहां सामान्य वर्ग के अधिकारों और अधिकारों की लगातार रक्षा और संरक्षण किया जाता है।
            </BodyText>
          </VisionCard>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection direction="up" delay="1.2s">
          <ContentCard>
            <IntroText>
              अधिक न्यायपूर्ण और न्यायसंगत समाज के निर्माण के हमारे मिशन में <HighlightText>सवर्ण आर्मी से जुड़ें</HighlightText>। 
              साथ मिलकर, हम बदलाव ला सकते हैं और भारत में आम वर्ग के लिए सकारात्मक बदलाव ला सकते हैं।
            </IntroText>
          </ContentCard>
        </AnimatedSection>
      </ContentContainer>
    </AboutUsRoot>
  );
}

export default AboutUs;