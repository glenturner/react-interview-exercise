import React from 'react';
import GoogleMapReact from 'google-map-react';
import { googleMapsKey } from '@utils/maps';
import { GooglePoint } from './GooglePoint';
import { Flex } from '..';
import style from './style.module.scss';

interface GoogleMapProps {
    center?: { lat: number, lng: number };
    zoom?: number;
    locations?: any;
}

export const GoogleMap = (props: GoogleMapProps) => {

    // console.log(`LOCATION =================> `, props.locations);

    return (
        <Flex
            className={style.wrapper}
            style={{ flex: 1, width: '100%', height: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapsKey }}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
                yesIWantToUseGoogleMapApiInternals
            >
                {
                    props.locations.map((location: any, index: any) => {
                        return <GooglePoint
                            key={index}
                            lat={location.LAT}
                            lng={location.LON}
                            text="Waypoint"
                        />
                    })
                }

            </GoogleMapReact>
        </Flex>
    );
};
