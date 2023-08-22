const validation = {
    isEmpty(val) {
        return (val === "");
    },
    hasNoSlashes(val) {
        return (val.indexOf("/") === -1);
    },
    isInvalidYear(val) {
        const year = val.substring(val.length - 4); 
        return (isNaN(year)); 
    },
    isInvalidDate(val) {
        return (val.toString() === "Invalid Date");
    }
};