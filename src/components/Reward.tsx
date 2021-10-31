import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Wrapper, Name, Body } from './Box';
import type { Reward as RewardBase } from '../types';

export interface RewardProps extends RewardBase {
    id: string;
    onSetExpanded: (value: string) => void;
    expanded: boolean;
    solvedNumber: number;
}

export const Reward = (props: RewardProps) => {
    const { cost, name, description, expanded, onSetExpanded, solvedNumber } = props;
    const resolved = solvedNumber >= cost;

    return (
        <Wrapper resolved={resolved}>
            <Name onClick={() => onSetExpanded(expanded ? '' : name)}>
                <span>{name}</span>
                <span>{cost} z {Math.max(solvedNumber, cost)}</span>

            </Name>
            {
                expanded && (
                    <Body>{description}</Body>
                )
            }
        </Wrapper>
    )

}