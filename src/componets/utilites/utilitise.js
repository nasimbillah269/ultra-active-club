const addToDb = (time) => {
    localStorage.setItem('break time', time)
}

const getStoredTime = () => {
    localStorage.getItem('break time')
}

export { addToDb, getStoredTime }