export const convertDateToString = (date: string): string => {
    const newDate = new Date(date)
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    // @ts-ignore
    return newDate.toLocaleDateString('en-US', options)
}
