import { useEffect, useState, useMemo, useCallback } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import styled from 'styled-components';

import { Point, PointProps } from './Point';
import { Reward, RewardProps } from './Reward';
import { db } from '../firebase';

export const Game = () => {
    const [points, setPoints] = useState<PointProps[]>([]);
    const [rewards, setRewards] = useState<RewardProps[]>([]);
    const [expanded, setExpanded] = useState('');

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

        const qRewards = query(collection(db, "rewards"));
        const unsubscribeRewards = onSnapshot(qRewards, (querySnapshot) => {
            //   @ts-ignore
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            //   @ts-ignore
            setRewards(data);
        });

        return () => {
            unsubscribePoints();
            unsubscribeRewards();
        }
    }, [])

    const solvedNumber = useMemo(() => points.filter(p => p.resolved), [points]).length;

    return (
        <>
            <h1>Spionazni Cile</h1>
            {points.map(point => <Point key={point.id} {...point} onSetExpanded={(value) => setExpanded(value)} expanded={point.name === expanded} />)}

            <h1>Odmeny z velitelstvi</h1>
            {rewards.sort((a, b) => a.cost - b.cost).map((reward) => {
                return (
                    <Reward {...reward} onSetExpanded={(value) => setExpanded(value)} expanded={reward.name === expanded} solvedNumber={solvedNumber} />
                )
            })}
        </>
    )
}