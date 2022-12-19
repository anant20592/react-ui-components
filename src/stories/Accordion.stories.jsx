import React from 'react';
import Accordion from '../components/accordion/Accordion';
import AccordionBody from '../components/accordion/AccordionBody';
import AccordionHeader from '../components/accordion/AccordionHeader';
import AccordionItem from '../components/accordion/AccordionItem';

export default {
    title: 'Example/Accordion',
    component: Accordion,
    //subcomponents: {Link}
  };
const Template = (args) => <Accordion {...args} activeKey={"0"}/>

export const AccordionData = Template.bind({});
AccordionData.args = {
    children:
    <> 
      <AccordionItem eventKey={"0"}>
        <AccordionHeader >
        Click Me!
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
          anim id est laborum.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem eventKey={"1"}>
        <AccordionHeader >
          Click Me!
        </AccordionHeader>
        <AccordionBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
          anim id est laborum.
        </AccordionBody>
      </AccordionItem>
      </>,
    flush: false
}