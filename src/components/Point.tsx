
import { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { doc, updateDoc } from "firebase/firestore";

import { Wrapper, Name, Body } from './Box';
import { db } from '../firebase';
import type { Point as PointBase } from '../types'

export interface PointProps extends PointBase {
    id: string;
    onSetExpanded: (value: string) => void;
    expanded: boolean;
}

const InputWrapper = styled.div`
    margin-top: auto;
`;

const Input = styled.input`
`;

const Button = styled.button``;

export const Point = (props: PointProps) => {
    const { id, name, description, code, resolved, onSetExpanded, expanded } = props;
    const [inputCode, setInputCode] = useState('');
    const [inputState, setInputState] = useState<undefined | 'success' | 'error'>()

    const submitCode = useCallback(async () => {
        if (code === inputCode?.toLowerCase()) {
            setInputState('success');

            const pointRef = doc(db, "points", id);

            await updateDoc(pointRef, {
                resolved: true
            });
        } else {
            setInputState('error');
        }
        setInputCode('')
    }, [code, inputCode, id]);

    useEffect(() => {
        setTimeout(() => {
            setInputState(undefined);
        }, 5 * 1000);
    }, [inputState])



    return (
        <Wrapper resolved={resolved}>
            <Name onClick={() => onSetExpanded(expanded ? '' : name)}>
                <span>{name}</span>
                <span>{resolved ? 'splneno' : 'x'}</span>
            </Name>
            {
                expanded && (
                    <Body>
                        {description}

                        {!resolved && (
                            <InputWrapper>
                                {inputState ? (<div>{inputState}</div>) : (<div>zadat kod</div>)}
                                <Input value={inputCode} onChange={(event) => setInputCode(event.target.value)} />
                                <Button onClick={submitCode} >Zadat</Button>
                            </InputWrapper>
                        )}

                    </Body>)
            }

        </Wrapper>
    )
}
