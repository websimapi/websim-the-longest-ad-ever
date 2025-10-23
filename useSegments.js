import React from 'react';
import { collection } from './db.js';

export const useSegments = () => {
    const segments = React.useSyncExternalStore(
        collection.subscribe,
        collection.getList,
        () => []
    );
    return segments;
};

export const addSegment = async (segmentData) => {
    return await collection.create(segmentData);
};

