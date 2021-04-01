
import React, { useState, memo, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import 'react-vis/dist/style.css';
import {
    FlexibleWidthXYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineSeries,
    Crosshair,
    Hint,
    MarkSeries
} from 'react-vis';

const useStyles = makeStyles(theme => ({
    root: {}
}));

const ConsumerPrice = () => {
    const classes = useStyles();

    const DATA = [
        [{ x: 1, y: 10 }, { x: 2, y: 7 }, { x: 3, y: 15 }, { x: 4, y: 25 }, { x: 5, y: 13 },
        { x: 6, y: 17 }, { x: 7, y: 30 }, { x: 8, y: 10 }, { x: 9, y: 12 }, { x: 10, y: 18 },
        { x: 11, y: 15 }, { x: 12, y: 21 }, { x: 13, y: 23 }, { x: 14, y: 13 }],
        // [{ x: 1, y: 20 }, { x: 2, y: 5 }, { x: 3, y: 15 }]
    ];

    const [hintValues, setHintValues] = useState();

    const rememberValue = value => {
        setHintValues(value);
    };

    const forgetValue = () => {
        setHintValues();
    };

    return (
        <FlexibleWidthXYPlot
            height={400}
        >
            {/* <VerticalGridLines />
                <HorizontalGridLines /> */}
            <XAxis tickSize={1} tickFormat={function myFormatter(t, i) {
                return (
                    <tspan>
                        <tspan x="0" dy="1em"> {Math.round(t) === t ? 'Feb' + t : ""}</tspan>
                    </tspan>);
            }} />

            <YAxis tickFormat={v => v + '$'} />
            <LineSeries
                onValueMouseOver={rememberValue}
                onValueMouseOut={forgetValue}
                // onNearestXY={onNearestX}
                data={DATA[0]} />
            <MarkSeries
                onValueMouseOver={rememberValue}
                onValueMouseOut={forgetValue}
                data={DATA[0]}
            />
            {hintValues ? <Hint value={hintValues}  >
                <div style={{ background: '#1B1F2E', padding: 8, borderRadius: '5px' }}>
                    <Typography> Date: Feb {hintValues.x} </Typography>
                    <Typography> Price: {hintValues.y} $</Typography>
                </div>
            </Hint> : null}
        </FlexibleWidthXYPlot>
    );
};

export default memo(ConsumerPrice);
