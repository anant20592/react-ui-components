import Dropdown from "../components/dropdown/Dropdown";

export default {
    title: 'Example/Dropdown',
    component: Dropdown
}

const Template = (args) => <Dropdown {...args} />
export const DropdownData = Template.bind({});
DropdownData.args = {
    children: <>
    <Dropdown.Toggle>
        Drop down
    </Dropdown.Toggle>
    <Dropdown.Menu >
        <Dropdown.Item href="#">one</Dropdown.Item>
        <Dropdown.Item href="https://google.com">two</Dropdown.Item>
        <Dropdown.Item>three</Dropdown.Item>
    </Dropdown.Menu>
    </>
}