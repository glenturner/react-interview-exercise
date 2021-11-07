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
    InputField,
    Button,
    GoogleMap,
    Flex,
    SchoolFinder,
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


    // Using a button to trigger the search so this is not needed.
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
                <InputField
                    placeholder="Peninsula School District"
                    label="Search District"
                    value={districtInput}
                    onChange={onUpdateDistrict}
                />
                <InputField
                    placeholder="Kopachuck Middle School"
                    label="Search School"
                    value={schoolInput}
                    onChange={onUpdateSchool}
                />
                <Button onClick={handleSearch}>Submit</Button>

            </SchoolFinder>
            <GoogleMap zoom={15} center={{ lat: schoolSearch[0]?.LAT ? schoolSearch[0]?.LAT : 47.185379, lng: schoolSearch[0]?.LON ? schoolSearch[0]?.LON : -122.292900 }} locations={schoolSearch} />
        </Flex>
    );
};

export default Home