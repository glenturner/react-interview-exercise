import React, { useCallback, useEffect, useState } from "react"
import {
    // Button,
    Center,
    Heading,
    Text,
    Icon,
    Input,
    ScaleFade,
    OrderedList,
    Divider,
    ListItem,
    Spinner,
    InputGroup, // Some Chakra components that might be usefull
    HStack,
    VStack,
    InputRightAddon,
} from "@chakra-ui/react"
import {
    LandingSection,
    SearchField,
    Button,
    GoogleMap,
    Flex,
    SchoolFinder,
    SchoolList,
} from ".";
import { Card } from '@components/design/Card'
import { searchSchoolDistricts, searchSchools, NCESDistrictFeatureAttributes, NCESSchoolFeatureAttributes } from "@utils/nces"


const Home: React.FC = () => {
    const [searching, setSearching] = React.useState(false)
    const [districtInput, setDistrictInput] = useState('')
    const [schoolInput, setSchoolInput] = useState('')
    const [districtSearch, setDistrictSearch] = React.useState<NCESDistrictFeatureAttributes[]>([]);
    const [schoolSearch, setSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);

    const handleSearch = useCallback(async () => {
        setSearching(true)

        const demoDistrictSearch = districtInput ? await searchSchoolDistricts(districtInput) : []
        setDistrictSearch(demoDistrictSearch)
        console.log("District example", demoDistrictSearch)

        const demoSchoolSearch = schoolInput ? await searchSchools(schoolInput, demoDistrictSearch.length ? demoDistrictSearch[1].LEAID : undefined) : []
        setSchoolSearch(demoSchoolSearch)
        console.log("School Example", demoSchoolSearch)
        // console.log("School Example", demoSchoolSearch.map((c) => c.NMCNTY))
        setSearching(false)
    }, [schoolSearch, districtSearch, schoolInput, districtInput])

    const onUpdateSchool = (value: any) => setSchoolInput(value);
    const onUpdateDistrict = (value: any) => setDistrictInput(value);


    // Using a button to trigger the search so this is not needed. The search button element is located in the School List element. I passed a prop to the component to handle the trigger for the search comment -- added by Glen Turner.
    // useEffect(() => {
    //     demo()
    // }, [])

    return (
        <Flex column style={{ width: '100%' }}>
            <LandingSection />
            <SchoolFinder>
                <Heading>School Data Finder</Heading>
                <Text>
                    {searching ? <Spinner /> : <></>}< br />
                    {districtSearch.length} Demo Districts<br />
                    {schoolSearch.length} Demo Schools<br />
                </Text>
                <SearchField
                    placeholder="Peninsula School District"
                    label="Search District"
                    value={districtInput}
                    onChange={onUpdateDistrict}
                />
                <SearchField
                    placeholder="Kopachuck Middle School"
                    // label="Search School"
                    value={schoolInput}
                    onChange={onUpdateSchool}
                />
                <Button onClick={handleSearch}>Submit</Button>

            </SchoolFinder>
            {/* <Flex style={{ width: '100%' }}>
                <SchoolList
                    onClick={handleSearch}
                    value={schoolInput}
                    onChange={onUpdateSchool}
                    data={schoolSearch} />
            </Flex> */}
            <GoogleMap zoom={4} center={{ lat: 39.06718, lng: -94.588878 }} locations={schoolSearch} />
        </Flex>
    );
};

export default Home