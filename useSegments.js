import React from 'react';

const room = new WebsimSocket();
const collection = room.collection('advert_segment_v2');

export const useSegments = () => {
    const segments = React.useSyncExternalStore(
        collection.subscribe,
        collection.getList
    );
    return segments;
};

export const addSegment = async (segmentData) => {
    return await collection.create(segmentData);
};

