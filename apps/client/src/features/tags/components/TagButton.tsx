import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import { CrossIcon, SpinnerIcon, SpinnerSize, SpinnerColor } from '../../../components';

type TagButton = {
    id: string;
    name: string;
    title: string;
    checked: boolean;
    isLoading: boolean;
    handleCheck: (id: string) => void;
    handleDelete: (id: string) => void;
};

export function TagButton({ id, name, title, handleCheck, handleDelete, checked, isLoading }: TagButton) {
    return (
        <div className="inline-flex mx-1 mb-1" title={title}>
            <button
                className={className(
                    'border border-r-0 border-blue-500 font-bold py-2 px-4 rounded-l',
                    checked
                        ? 'bg-blue-500 hover:bg-blue-400 text-white '
                        : 'bg-white hover:bg-blue-500 text-blue-500 hover:text-white'
                )}
                onClick={() => handleCheck(id)}
            >
                {name}
            </button>
            <button
                className={className(
                    'text-center border border-l-0 border-blue-500 font-bold py-2 px-2 w-10 rounded-r',
                    checked
                        ? 'bg-blue-500 hover:bg-red-400 text-white '
                        : 'bg-white hover:bg-red-500 text-blue-500 hover:text-white'
                )}
                onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(id);
                }}
            >
                {isLoading ? <SpinnerIcon size={SpinnerSize.xs} color={SpinnerColor.blue} /> : <CrossIcon />}
            </button>
        </div>
    );
}

TagButton.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    handleDelete: PropTypes.func,
    handleCheck: PropTypes.func,
    checked: PropTypes.bool,
    isLoading: PropTypes.bool,
};

TagButton.defaultProps = {
    id: '',
    name: '',
    title: '',
    handleDelete: () => {},
    handleCheck: () => {},
    checked: false,
    isLoading: false,
};