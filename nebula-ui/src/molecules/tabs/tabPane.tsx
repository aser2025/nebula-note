import React from 'react';

export type TabPaneProps = {
    id?: string;
    title: string;
    onRemoveClick?: () => void;
    children: React.ReactNode | Array<React.ReactNode>;
    ['data-test-id']?: string;
};
const TabPane = ({ children }: TabPaneProps) => {
    return children;
};

export default TabPane;
