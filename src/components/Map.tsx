import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Map as MapComponent, MarkerLayer, Marker, MouseControl, KeyboardControl, CompassControl } from 'react-mapycz'
import { collection, query, onSnapshot } from "firebase/firestore";

import { db } from '../firebase'

import type { PointProps } from './Point';

export declare type MarkerCardConfiguration = {
    header?: string;
    body?: string;
    footer?: string;
    options?: {
        width: number;
        height: number;
    };
};

const getCoords = (geo: Required<PointProps>['geo']) => {
    const [lat, lng] = geo?.split(', ').map(r => r.substr(0, r.length - 1)).map(r => Number.parseFloat(r));
    console.log({ lat, lng });
    return { lat, lng }
}

const Wrapper = styled.div``;

const Header = styled.div`
    width: 100vw;
    height: 4vh;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderItem = styled.div`
    cursor: pointer;
`;

export const Map = () => {
    const [points, setPoints] = useState<PointProps[]>([]);
    const [onlyResolved, setOnlyResolved] = useState(false);

    useEffect(() => {
        const qPoints = query(collection(db, "points"));
        const unsubscribePoints = onSnapshot(qPoints, (querySnapshot) => {
            //   @ts-ignore
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            //   @ts-ignore
            setPoints(data);
        });

        return () => {
            unsubscribePoints();
        }
    }, [])

    console.log(points);

    return (
        <Wrapper>
            <Header>
                <HeaderItem onClick={() => setOnlyResolved(!onlyResolved)}>{onlyResolved ? 'Jen objevene' : 'Jen neobjevene'}</HeaderItem>
            </Header>
            <MapComponent center={{ lat: 49.1383607, lng: 17.2913566 }} zoom={14} height="96vh">
                <MarkerLayer>
                    {
                        points.filter(p => p.resolved === onlyResolved).map((p) => (
                            <Marker key={p.id} coords={getCoords(p.geo!)}
                                // @ts-ignore
                                style={{ backgroundColor: 'yellow' }}
                                card={
                                    {
                                        header: p.name,
                                        body: p.description,
                                        footer: ''
                                    }
                                } />
                        ))
                    }
                </MarkerLayer>
                <MouseControl zoom={true} pan={true} wheel={true} />
                <KeyboardControl />
                <CompassControl />
            </MapComponent>
        </Wrapper>

    )
}