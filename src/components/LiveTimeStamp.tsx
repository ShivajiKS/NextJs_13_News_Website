'use client';
import React from 'react';
import TimeAgo from 'react-timeago';

type propTypes = {
    time: string;
};

const LiveTimeStamp: React.FC<propTypes> = ({ time }) => {
    return (
        <div>
            <TimeAgo date={time} />
        </div>
    );
};

export default LiveTimeStamp;
