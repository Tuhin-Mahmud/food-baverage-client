import { useState } from "react";
import useMenu from "../../hooks/useMenu";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import coverImg1 from '../../assets/images/cover/cover1.jpg'
import CoverImg from "../../components/CoverImg/CoverImg";
import Container from "../../components/utils/Container";
import MenuGrid from "./MenuGrid";


const MenuTabs = () => {
    const [menu, isLoading] = useMenu()
    const [tabIndex, setTabIndex] = useState(0);

    const dessert = menu.filter(item => item.category == 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <Container>
            <CoverImg img={coverImg1}></CoverImg>
            <div className="mt-5 md:mt-16">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className={'text-center '}>
                        <Tab><p className="font-medium text-xl text-orange-500 font-mono ">desserts</p></Tab>
                        <Tab><p className="font-medium text-xl text-orange-500 font-mono">pizza</p></Tab>
                        <Tab>
                            <p className="font-medium text-xl text-orange-500 font-mono">drinks</p>
                        </Tab>
                        <Tab>
                            <p className="font-medium text-xl text-orange-500 font-mono">soup</p>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <MenuGrid item={dessert}></MenuGrid>
                    </TabPanel>
                    <TabPanel>
                        <MenuGrid item={pizza}></MenuGrid>
                    </TabPanel>
                    <TabPanel>
                        <MenuGrid item={drinks}></MenuGrid>
                    </TabPanel>
                    <TabPanel>
                        <MenuGrid item={soup}></MenuGrid>
                    </TabPanel>
                </Tabs>
            </div>
        </Container>
    );
};

export default MenuTabs;