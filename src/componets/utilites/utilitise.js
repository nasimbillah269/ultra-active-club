const addToDb = (time) => {
    localStorage.setItem('break time', time)
}

const getStoredTime = (time) => {
    localStorage.getItem('break time', time)
}

export { addToDb, getStoredTime }