import AccordionHeader from "../components/accordion/AccordionHeader";

export default {
    title: 'Base/AccordionHeader',
    component: AccordionHeader,
}
const Template = (args) => <AccordionHeader {...args} />

export const Default = Template.bind({});
Default.args = {
    children: 'Click Me!'
}