import { useEffect, useRef, useState } from "react";

export const useDynamicPagination = <T>(
    data: T[],
    total: number,
    fetchFunc: () => Promise<T[]>,
    increaseStartAt: () => void,
    increaseEnd: () => void
) => {
    const isMounted = useRef(false);

    const [fetching, setFetching] = useState(false);

    const onFetch = async () => {
        try {
            await fetchFunc();
            console.log("increase");
            increaseStartAt();
            increaseEnd();
        } catch (e) {
            console.log(e);
        } finally {
            setFetching(false);
        }
    };

    useEffect(() => {
        if (!data.length && !isMounted.current) {
            isMounted.current = true;
            onFetch();
        }
    }, []);

    useEffect(() => {
        if (fetching) {
            onFetch();
        }
    }, [fetching]);

    const scrollHandler = () => {
        if (document.body.scrollHeight - (window.scrollY + window.innerHeight) < 400 && data.length <= total - 1) {
            setFetching(true);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler);
        return () => document.removeEventListener("scroll", scrollHandler);
    }, [total, data.length]);
};
