import React, { useCallback, useEffect, useState } from "react"
import {
    LandingSection,
    Flex,
    SchoolSearch,
} from ".";
import { searchSchoolDistricts, searchSchools, NCESDistrictFeatureAttributes, NCESSchoolFeatureAttributes } from "@utils/nces"


const Home: React.FC = () => {
    const [searching, setSearching] = React.useState(false)
    const [districtInput, setDistrictInput] = useState('')
    const [schoolInput, setSchoolInput] = useState('')
    const [districtSearch, setDistrictSearch] = React.useState<NCESDistrictFeatureAttributes[]>([]);
    const [schoolSearch, setSchoolSearch] = React.useState<NCESSchoolFeatureAttributes[]>([]);

    const handleSearch = useCallback(async () => {
        setSearching(true)

        const searchResponse = schoolInput ? await searchSchools(schoolInput) : []
        setSchoolSearch(searchResponse)

        setSearching(false)
    }, [schoolSearch, districtSearch, schoolInput, districtInput])

    const onUpdateSchool = useCallback((value: any) => setSchoolInput(value), []);

    // Decided to omit district search in order to improve UX -- added by Glen Turner.
    // const onUpdateDistrict = (value: any) => setDistrictInput(value);

    useEffect(() => {
        const listener = (event: any) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                try {
                    event.preventDefault();
                    handleSearch()
                } catch (error) {
                    console.error(`Something went wrong with your search `, error);
                }
            }
        };
        document.addEventListener("keydown", listener);
        return () => { document.removeEventListener("keydown", listener) };
    }, [schoolSearch, districtSearch, schoolInput, districtInput]);

    return (
        <Flex column style={{ width: '100%' }}>
            <LandingSection />
            <Flex style={{ width: '100%' }}>
                <SchoolSearch
                    id="search_button"
                    isLoading={searching}
                    onClick={handleSearch}
                    value={schoolInput}
                    onChange={onUpdateSchool}
                    locations={schoolSearch}
                    data={schoolSearch} />
            </Flex>
        </Flex>
    );
};

export default Home