import AccordionButton from "../components/accordion/AccordionButton";
import AccordionHeader from "../components/accordion/AccordionHeader";


export default {
    title: 'Example/AccordionHeader',
    component: AccordionHeader,
  //  subcomponent: AccordionButton
}
const Template = (args) => <AccordionHeader {...args} />

export const Default = Template.bind({});
Default.args = {
    className: 'rui-accordion-header',
    children: 'Click Me!'
}