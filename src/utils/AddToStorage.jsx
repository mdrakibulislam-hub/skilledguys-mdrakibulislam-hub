export const applyBtnHandler = id => {
    let value = [];
    const appliedJobs = localStorage.getItem('appliedJobs')

    if (appliedJobs) {
        const exitst = appliedJobs.includes(id)
        if (exitst) {
            alert('already ase')
            return
        }
        value = JSON.parse(appliedJobs)
        const newValue = [...value, id]
        localStorage.setItem("appliedJobs", JSON.stringify(newValue));
    } else {
        value[0] = id
        localStorage.setItem("appliedJobs", JSON.stringify(value));
    }
}