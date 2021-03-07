const rightDate = (date) =>{
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    date = date.split('/');
    date[1] = months[--date[1]];
    date = date.join(' ');
    return date
}

export default rightDate;