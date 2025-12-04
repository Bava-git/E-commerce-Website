import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export const safeSortAscending = (array, identifier) => {
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }

    return array.sort((a, b) => {
        if (a?.[identifier] && b?.[identifier]) {
            return a[identifier].localeCompare(b[identifier]);
        }
        return 0;
    });
};

export const safeSortDescending = (array, identifier) => {
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }

    return array.sort((a, b) => {
        if (a?.[identifier] && b?.[identifier]) {
            return b[identifier].localeCompare(a[identifier]);
        }
        return 0;
    });
};

export const groupingItems = (array, condition) => {
    return array.reduce((groups, item) => {
        const title = item[condition];
        if (!groups[title]) {
            groups[title] = [];
        }
        groups[title].push(item);
        return groups;
    }, {});
};

export const oneItemFromArray = (array, identifier, selectedId) => {
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }

    const returnArray = array.filter(item => String(item?.[identifier]) === String(selectedId));
    return returnArray[0];
};

export const multipleItemFromArray = (array, identifier, selectedId) => {
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }

    const returnArray = array.filter(item => item?.[identifier] === selectedId);
    return returnArray;
};

export const addToArray = (array, newItem) => {
    if (!Array.isArray(array)) {
        return [];
    }

    array.push(newItem)
    return array;
};

export const updateToArray = (array, identifier, updateItem) => {
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }

    const returnArray = array.map(item => item?.[identifier] === updateItem?.[identifier] ? updateItem : item);
    return returnArray;
};

export const delFromArray = (array, identifier, selectedId) => {
    if (!Array.isArray(array) || array.length === 0) {
        return [];
    }

    const returnArray = array.filter(item => String(item?.[identifier]) !== String(selectedId));
    return returnArray;
};

export const Pagination = ({ data, ItemPerPage, setTableData }) => {

    let CurrentPage = 0;
    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        loadPage(data, 0);
    }, [data, ItemPerPage]);

    const loadPage = (data, pageno) => {

        if (data?.length === 0) {
            return;
        } else if (data?.length <= 10) {
            setTableData(data);
            return;
        }

        let NoOfPages = Math.ceil(data?.length / ItemPerPage);
        if (NoOfPages <= 0) {
            pageno = 0
        } else if (pageno >= NoOfPages) {
            pageno = NoOfPages - 1;
        }
        let startIndex = pageno * ItemPerPage;
        let EndIndex = startIndex + ItemPerPage;
        setTableData(data?.slice(startIndex, EndIndex));
        pagenation(data)
    };

    const pagenation = (data) => {
        let NoOfPages = Math.ceil(data?.length / ItemPerPage);
        const allButtons = [
            <a key="previous" className='flex size-10 items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary' onClick={() => {
                if (CurrentPage === 0) {
                    return;
                }
                CurrentPage--;
                loadPage(data, CurrentPage);
            }}>
                <span className="material-symbols-outlined">chevron_left</span>
            </a>,
            // <a key="first" className={CurrentPage === 0 ? "pagination-item pagination-active" : "pagination-item"} onClick={() => {
            //     CurrentPage = 0;
            //     loadPage(data, CurrentPage);
            // }
            // }> First</a>,
        ];
        for (let i = 2; i < NoOfPages; i++) {
            allButtons.push(
                <a key={i}
                    className={`text-sm leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${CurrentPage === (i - 1)
                        ? 'font-bold text-white bg-primary'
                        : 'font-normal text-slate-600 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-slate-800/80'
                        }`}
                    onClick={() => {
                        CurrentPage = (i - 1);
                        loadPage(data, (i - 1));
                    }}>{i}</a>);
        }
        allButtons.push(
            // <a key="last" className={CurrentPage === (NoOfPages - 1) ? "pagination-item pagination-active" : "pagination-item"} onClick={() => {
            //     CurrentPage = NoOfPages - 1
            //     loadPage(data, (NoOfPages - 1));
            // }}>Last</a>,
            <a key="next" className='flex size-10 items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary' onClick={() => {
                if (CurrentPage === (NoOfPages - 1)) {
                    return;
                }
                CurrentPage++;
                loadPage(data, CurrentPage);
            }}>Next</a>,
        );
        setButtons(allButtons);
    };

    return (
        <nav className="pagination">
            {buttons}
        </nav>
    )

};

export const CopyButton = async (textToCopy) => {
    try {
        await navigator.clipboard.writeText(textToCopy);
        toast.success("Copied!");
        return true;
    } catch (err) {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text. Please copy manually.');
        return false;
    }
};